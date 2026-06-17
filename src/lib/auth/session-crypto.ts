import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
  createHmac,
  timingSafeEqual as cryptoTimingSafeEqual,
} from "crypto";

// SESSION_SECRET must be 64 hex chars (= 32 bytes) for AES-256
const SESSION_SECRET = process.env.SESSION_SECRET;

function getKeys() {
  if (!SESSION_SECRET || SESSION_SECRET.length < 64) {
    throw new Error(
      "SESSION_SECRET must be set and at least 64 hex characters. Generate with: node -e \"console.log(require('crypto').randomBytes(32).toString('hex'))\"",
    );
  }
  return {
    encryptionKey: Buffer.from(SESSION_SECRET.slice(0, 64), "hex"), // 32 bytes for AES-256
    hmacKey: Buffer.from(SESSION_SECRET.slice(0, 64), "hex"),
  };
}

export interface SessionPayload {
  uid: string;
  email: string;
  role: "customer" | "admin";
  iat: number; // issued at (Unix timestamp seconds)
  exp: number; // expiration (Unix timestamp seconds)
  fingerprint: string; // hashed browser fingerprint for session binding
}

/**
 * Encrypt session payload using AES-256-GCM + HMAC-SHA256.
 * Output format: iv(hex).tag(hex).ciphertext(hex).hmac(hex)
 */
export function encryptSession(payload: SessionPayload): string {
  const { encryptionKey, hmacKey } = getKeys();

  const iv = randomBytes(12); // 96-bit IV for GCM
  const cipher = createCipheriv("aes-256-gcm", encryptionKey, iv);

  const plaintext = JSON.stringify(payload);
  const encrypted = Buffer.concat([
    cipher.update(plaintext, "utf8"),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();

  // Compose the data portion (everything except HMAC)
  const data = `${iv.toString("hex")}.${tag.toString("hex")}.${encrypted.toString("hex")}`;

  // HMAC over the data for tamper detection at the outer layer
  const hmac = createHmac("sha256", hmacKey).update(data).digest("hex");

  return `${data}.${hmac}`;
}

/**
 * Decrypt and verify a session cookie value.
 * Returns null if tampered, expired, malformed, or invalid in any way.
 */
export function decryptSession(token: string): SessionPayload | null {
  try {
    const { encryptionKey, hmacKey } = getKeys();

    const parts = token.split(".");
    if (parts.length !== 4) return null;

    const [ivHex, tagHex, ciphertextHex, hmacHex] = parts;

    // ── Step 1: Verify HMAC with constant-time comparison ──
    const data = `${ivHex}.${tagHex}.${ciphertextHex}`;
    const expectedHmac = createHmac("sha256", hmacKey)
      .update(data)
      .digest("hex");

    const hmacBuf = Buffer.from(hmacHex, "hex");
    const expectedBuf = Buffer.from(expectedHmac, "hex");
    if (
      hmacBuf.length !== expectedBuf.length ||
      !cryptoTimingSafeEqual(hmacBuf, expectedBuf)
    ) {
      return null;
    }

    // ── Step 2: AES-256-GCM decryption ──
    const iv = Buffer.from(ivHex, "hex");
    const tag = Buffer.from(tagHex, "hex");
    const ciphertext = Buffer.from(ciphertextHex, "hex");

    const decipher = createDecipheriv("aes-256-gcm", encryptionKey, iv);
    decipher.setAuthTag(tag);

    const decrypted = Buffer.concat([
      decipher.update(ciphertext),
      decipher.final(),
    ]);

    const payload: SessionPayload = JSON.parse(decrypted.toString("utf8"));

    // ── Step 3: Check expiration ──
    if (Date.now() / 1000 > payload.exp) return null;

    // ── Step 4: Structural validation ──
    if (
      !payload.uid ||
      !payload.role ||
      !["customer", "admin"].includes(payload.role)
    ) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
