/**
 * Hey Fede! - E-Mail Templates (HTML)
 * Inline-Styled für maximale E-Mail-Client-Kompatibilität
 */

const BRAND = {
  terracotta: "#CC624C",
  terracottaDeep: "#B8553F",
  brown: "#2d1f19",
  brownMid: "#5c3d35",
  cream: "#F5EFE8",
  beige: "#EEDFCC",
  peach: "#E4C0A8",
  white: "#fefefe",
} as const;

function baseLayout(content: string, preheader?: string): string {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hey Fede!</title>
  ${preheader ? `<span style="display:none;max-height:0;overflow:hidden;mso-hide:all">${preheader}</span>` : ""}
</head>
<body style="margin:0;padding:0;background-color:${BRAND.cream};font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.cream};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:${BRAND.white};border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(45,31,25,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:${BRAND.terracotta};padding:28px 32px;text-align:center;">
              <h1 style="margin:0;color:${BRAND.white};font-size:28px;font-weight:900;letter-spacing:-0.5px;">Hey Fede!</h1>
              <p style="margin:4px 0 0;color:rgba(254,254,254,0.8);font-size:12px;letter-spacing:1.5px;text-transform:uppercase;">Dessertbar & Café · Wetzlar</p>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding:32px;color:${BRAND.brown};">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 32px;background-color:${BRAND.beige};border-top:1px solid ${BRAND.peach};text-align:center;">
              <p style="margin:0 0 4px;font-size:13px;color:${BRAND.brownMid};">Hey Fede! · Langgasse 68 · 35576 Wetzlar</p>
              <p style="margin:0;font-size:12px;color:${BRAND.brownMid};">
                <a href="https://hey-fede.de" style="color:${BRAND.terracotta};text-decoration:none;">hey-fede.de</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Contact Form ───────────────────────────────────────

export function contactFormEmail(data: {
  name: string;
  email: string;
  message: string;
  subject?: string;
}): { subject: string; html: string } {
  return {
    subject: `Neue Nachricht von ${data.name} - ${data.subject || "Kontaktformular"}`,
    html: baseLayout(
      `
      <h2 style="margin:0 0 16px;font-size:22px;color:${BRAND.terracotta};">Neue Kontaktanfrage</h2>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid ${BRAND.beige};"><strong>Name:</strong></td>
          <td style="padding:8px 0;border-bottom:1px solid ${BRAND.beige};">${data.name}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid ${BRAND.beige};"><strong>E-Mail:</strong></td>
          <td style="padding:8px 0;border-bottom:1px solid ${BRAND.beige};"><a href="mailto:${data.email}" style="color:${BRAND.terracotta};">${data.email}</a></td>
        </tr>
        ${data.subject ? `<tr><td style="padding:8px 0;border-bottom:1px solid ${BRAND.beige};"><strong>Betreff:</strong></td><td style="padding:8px 0;border-bottom:1px solid ${BRAND.beige};">${data.subject}</td></tr>` : ""}
      </table>
      <div style="background-color:${BRAND.cream};border-radius:12px;padding:20px;border-left:4px solid ${BRAND.terracotta};">
        <p style="margin:0 0 4px;font-size:12px;color:${BRAND.brownMid};text-transform:uppercase;letter-spacing:1px;">Nachricht:</p>
        <p style="margin:0;font-size:15px;line-height:1.6;color:${BRAND.brown};white-space:pre-wrap;">${data.message}</p>
      </div>
      <p style="margin:20px 0 0;font-size:13px;color:${BRAND.brownMid};">Du kannst direkt auf diese E-Mail antworten, um ${data.name} zu erreichen.</p>
      `,
      `Neue Nachricht von ${data.name}: ${data.message.substring(0, 80)}...`,
    ),
  };
}

// ─── Contact Form Confirmation (to the sender) ─────────

export function contactConfirmationEmail(data: { name: string }): {
  subject: string;
  html: string;
} {
  return {
    subject: "Danke für deine Nachricht! - Hey Fede!",
    html: baseLayout(
      `
      <h2 style="margin:0 0 16px;font-size:22px;color:${BRAND.terracotta};">Danke, ${data.name}! 💛</h2>
      <p style="font-size:15px;line-height:1.6;color:${BRAND.brown};">
        Wir haben deine Nachricht erhalten und melden uns so schnell wie möglich bei dir - normalerweise innerhalb von 24 Stunden.
      </p>
      <p style="font-size:15px;line-height:1.6;color:${BRAND.brown};">
        Falls es dringend ist, erreichst du uns auch per WhatsApp oder direkt im Laden in der Langgasse 68 in Wetzlar.
      </p>
      <p style="margin:24px 0 0;font-size:15px;color:${BRAND.brown};">
        Süße Grüße,<br>
        <strong style="color:${BRAND.terracotta};">Dein Hey Fede! Team</strong> 🧇
      </p>
      `,
      `Danke ${data.name}! Wir haben deine Nachricht erhalten.`,
    ),
  };
}

// ─── Order Confirmation ─────────────────────────────────

export function orderConfirmationEmail(data: {
  name: string;
  orderId: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  pickupTime?: string;
  isDelivery?: boolean;
}): { subject: string; html: string } {
  const itemRows = data.items
    .map(
      (item) => `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid ${BRAND.beige};font-size:14px;">${item.quantity}× ${item.name}</td>
      <td style="padding:8px 0;border-bottom:1px solid ${BRAND.beige};font-size:14px;text-align:right;">${item.price.toFixed(2)} €</td>
    </tr>`,
    )
    .join("");

  return {
    subject: `Bestellung bestätigt #${data.orderId} - Hey Fede!`,
    html: baseLayout(
      `
      <h2 style="margin:0 0 8px;font-size:22px;color:${BRAND.terracotta};">Bestellung bestätigt! 🎉</h2>
      <p style="font-size:15px;color:${BRAND.brown};margin:0 0 20px;">
        Hey ${data.name}, deine Bestellung <strong>#${data.orderId}</strong> ist bei uns eingegangen.
      </p>

      ${data.pickupTime ? `<div style="background-color:${BRAND.cream};border-radius:12px;padding:16px;margin-bottom:20px;text-align:center;"><p style="margin:0 0 4px;font-size:12px;color:${BRAND.brownMid};text-transform:uppercase;letter-spacing:1px;">${data.isDelivery ? "Lieferung" : "Abholung"}</p><p style="margin:0;font-size:20px;font-weight:bold;color:${BRAND.terracotta};">${data.pickupTime}</p></div>` : ""}

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${itemRows}
        <tr>
          <td style="padding:12px 0 0;font-size:16px;font-weight:bold;color:${BRAND.brown};">Gesamt</td>
          <td style="padding:12px 0 0;font-size:16px;font-weight:bold;color:${BRAND.terracotta};text-align:right;">${data.total.toFixed(2)} €</td>
        </tr>
      </table>

      <p style="margin:24px 0 0;font-size:14px;color:${BRAND.brownMid};">
        Du kannst den Status deiner Bestellung jederzeit unter
        <a href="https://hey-fede.de/order-status/${data.orderId}" style="color:${BRAND.terracotta};font-weight:bold;">hey-fede.de/order-status</a> verfolgen.
      </p>
      `,
      `Bestellung #${data.orderId} bestätigt - ${data.items.length} Artikel, ${data.total.toFixed(2)} €`,
    ),
  };
}

// ─── Password Reset ─────────────────────────────────────

export function passwordResetEmail(data: { name: string; resetLink: string }): {
  subject: string;
  html: string;
} {
  return {
    subject: "Passwort zurücksetzen - Hey Fede!",
    html: baseLayout(
      `
      <h2 style="margin:0 0 16px;font-size:22px;color:${BRAND.terracotta};">Passwort zurücksetzen</h2>
      <p style="font-size:15px;line-height:1.6;color:${BRAND.brown};">
        Hey ${data.name}, du hast angefragt, dein Passwort zurückzusetzen. Klicke auf den Button, um ein neues Passwort zu wählen:
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
        <tr>
          <td align="center">
            <a href="${data.resetLink}" style="display:inline-block;background-color:${BRAND.terracotta};color:${BRAND.white};font-weight:bold;font-size:16px;padding:14px 32px;border-radius:50px;text-decoration:none;">
              Neues Passwort wählen
            </a>
          </td>
        </tr>
      </table>
      <p style="font-size:13px;color:${BRAND.brownMid};line-height:1.5;">
        Dieser Link ist 1 Stunde gültig. Falls du kein Passwort-Reset angefragt hast, kannst du diese E-Mail ignorieren.
      </p>
      `,
      `Passwort zurücksetzen für ${data.name}`,
    ),
  };
}
