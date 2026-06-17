"use client";

import React from "react";
import { LegalPageLayout, AccordionSection } from "@/components/legal/LegalUI";
import { AlertTriangle, Info, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS } from "@/lib/seo/business-data";

export default function WiderrufPage() {
  return (
    <LegalPageLayout
      title="Widerrufsbelehrung"
      subtitle="Wichtige Hinweise zum Widerrufsrecht bei der Bestellung von Speisen und Getränken."
      lastUpdated="Juni 2026"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          background:
            "linear-gradient(135deg, rgba(204, 98, 76, 0.1) 0%, rgba(204, 98, 76, 0.05) 100%)",
          padding: 24,
          borderRadius: 20,
          marginBottom: 32,
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.9rem",
          color: "#5c3d35",
          border: "1px solid rgba(204, 98, 76, 0.3)",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-heading), serif",
            color: "#CC624C",
            fontSize: "1.2rem",
            margin: "0 0 14px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <AlertTriangle size={20} color="#CC624C" /> Ausschluss des
          Widerrufsrechts
        </h3>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          Da wir ausschließlich frisch zubereitete Speisen und Getränke anbieten
          (z. B. Bubble Waffles, Crêpes, Kaffee), die naturgemäß schnell
          verderben oder deren Verfallsdatum schnell überschritten würde,{" "}
          <strong>
            besteht gemäß § 312g Abs. 2 Nr. 2 BGB kein Widerrufsrecht
          </strong>{" "}
          für deine Bestellung.
        </p>
      </motion.div>

      <AccordionSection
        icon={<Info size={14} />}
        title="Warum gibt es bei Speisen kein Widerrufsrecht?"
        defaultOpen
      >
        <p>
          Das gesetzliche Widerrufsrecht dient im Online-Handel dazu, Ware nach
          Erhalt prüfen zu können. Bei frisch zubereiteten Lebensmitteln ist
          dies aus logistischen und hygienischen Gründen nicht möglich. Sobald
          wir mit der Zubereitung deiner Bestellung begonnen haben, können wir
          diese nicht mehr zurücknehmen oder anderweitig verkaufen.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<FileText size={14} />}
        title="Freiwillige Stornierungsmöglichkeit (Kulanz)"
      >
        <p>
          Auch wenn gesetzlich kein Widerrufsrecht besteht, möchten wir fair zu
          unseren Kunden sein. Daher räumen wir dir freiwillig eine{" "}
          <strong>
            Stornierungsmöglichkeit bis zu 30 Minuten vor der gewählten
            Abholzeit
          </strong>{" "}
          ein.
        </p>
        <p>
          Du kannst deine Bestellung innerhalb dieses Zeitfensters direkt in der
          Hey Fede! App stornieren, uns anrufen ({BUSINESS.phone}) oder uns eine
          WhatsApp schreiben. Da die Bezahlung ohnehin erst vor Ort im Laden
          erfolgt, entstehen dir durch eine rechtzeitige Stornierung keinerlei
          Kosten.
        </p>
      </AccordionSection>
    </LegalPageLayout>
  );
}
