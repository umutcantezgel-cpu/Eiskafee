import React from 'react';

export const metadata = {
  title: 'Impressum | Hey Fedee',
  description: 'Rechtliche Informationen und Impressum von Hey Fedee.',
};

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-[#f5efe8] pt-24 pb-20 px-5">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-[#eedfcc]">
        <h1 className="font-calistoga text-4xl text-[#2d1f19] mb-8">Impressum</h1>
        
        <div className="prose prose-stone max-w-none font-nunito text-[#2d1f19]">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>Hey Fedee GmbH</strong><br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>
          
          <h2>Vertreten durch</h2>
          <p>
            Max Mustermann<br />
            Geschäftsführer
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 456 789<br />
            E-Mail: hello@heyfedee.de
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE999999999
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
}
