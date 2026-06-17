import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set in environment variables");
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export const EMAIL_CONFIG = {
  from: process.env.EMAIL_FROM || "Hey Fede! <hallo@hey-fede.de>",
  replyTo: process.env.EMAIL_REPLY_TO || "heyfederica@hotmail.com",
} as const;
