import { Resend } from "resend";

let _resend: Resend | null = null;

/** Lazy-initialized Resend client — prevents build-time crashes when RESEND_API_KEY is not yet available */
export function getResend(): Resend {
  if (!_resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set in environment variables");
    }
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

/** @deprecated Use getResend() instead — kept for backward compatibility */
export const resend = new Proxy({} as Resend, {
  get(_, prop) {
    return (getResend() as any)[prop];
  },
});

export const EMAIL_CONFIG = {
  from: process.env.EMAIL_FROM || "Hey Fede! <hallo@hey-fede.de>",
  replyTo: process.env.EMAIL_REPLY_TO || "heyfederica@hotmail.com",
} as const;
