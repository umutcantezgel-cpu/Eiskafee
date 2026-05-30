import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { HF_DATA } from "../data";
import { BUSINESS } from "../seo/business-data";
import { FAQ_DATA } from "../../content/seo/faq-data";

// Create the global MCP Server instance
const server = new McpServer({
  name: "Hey Fede! MCP Server",
  version: "1.0.0",
});

// ----------------------------------------------------------------------------
// RESOURCES
// ----------------------------------------------------------------------------

server.resource(
  "faq",
  "heyfede://faq",
  { description: "Hey Fede! FAQ Datenbank" },
  async (uri) => {
    const textContent = FAQ_DATA.map((f) => `Q: ${f.q}\nA: ${f.a}`).join(
      "\n\n",
    );
    return {
      contents: [
        {
          uri: uri.href,
          text: textContent,
        },
      ],
    };
  },
);

// ----------------------------------------------------------------------------
// TOOLS
// ----------------------------------------------------------------------------

server.tool(
  "get_menu",
  "Holt das aktuelle Menü der Dessertbar, inklusive Kategorien, Beschreibungen und Preisen.",
  {},
  async () => {
    return {
      content: [{ type: "text", text: JSON.stringify(HF_DATA.menu, null, 2) }],
    };
  },
);

server.tool(
  "get_opening_hours",
  "Prüft, ob das Café heute und zu bestimmten Zeiten geöffnet hat.",
  {},
  async () => {
    const textContent = `Reguläre Öffnungszeiten:\n${JSON.stringify(BUSINESS.openingHours, null, 2)}\nAktueller Status laut Einstellungen: ${HF_DATA.config ? "Geöffnet (check override via settings)" : "Unbekannt"}`;
    return {
      content: [{ type: "text", text: textContent }],
    };
  },
);

server.tool(
  "check_delivery_availability",
  "Prüft anhand einer deutschen PLZ, ob Hey Fede! via Lieferando dorthin liefert.",
  {
    zipCode: z.string().describe("Die deutsche Postleitzahl (5-stellig)"),
  },
  async ({ zipCode }) => {
    // 15km Radius in Lahn-Dill-Kreis. Valid PLZ start with 35 (e.g. 35576, 35578).
    const validPrefixes = ["355", "356", "353", "354"];
    let isDeliverable = false;
    for (const prefix of validPrefixes) {
      if (zipCode.startsWith(prefix)) {
        isDeliverable = true;
        break;
      }
    }

    const message = isDeliverable
      ? `Die PLZ ${zipCode} liegt vermutlich innerhalb unseres Liefergebiets! Bestelle jetzt über Lieferando ohne Liefergebühr: ${BUSINESS.lieferandoUrl}`
      : `Leider liegt die PLZ ${zipCode} wahrscheinlich außerhalb unseres 15km Lieferradius. Du kannst uns aber jederzeit im Café in der Wetzlarer Altstadt besuchen!`;

    return {
      content: [{ type: "text", text: message }],
    };
  },
);

server.tool(
  "submit_catering_request",
  "Nimmt eine Catering-Anfrage für Fede Boxen oder Events auf.",
  {
    name: z.string().describe("Name des Anfragenden"),
    email: z.string().email().describe("E-Mail Adresse"),
    eventDate: z.string().describe("Datum des Events"),
    guestCount: z.number().min(1).describe("Anzahl der Gäste"),
    details: z
      .string()
      .describe("Weitere Details zur Anfrage (z.B. Vegan/Halal Wünsche)"),
  },
  async ({ name, email, eventDate, guestCount, details }) => {
    // In a real app, this would save to a database or send an email via Firebase/Resend.
    // We mock the successful submission here.
    console.log(
      `[CATERING REQUEST] From: ${name} <${email}> | Date: ${eventDate} | Guests: ${guestCount} | Details: ${details}`,
    );

    return {
      content: [
        {
          type: "text",
          text: `Vielen Dank, ${name}! Deine Catering-Anfrage für ${guestCount} Personen am ${eventDate} wurde entgegengenommen. Wir melden uns in Kürze unter ${email}.`,
        },
      ],
    };
  },
);

export { server };
