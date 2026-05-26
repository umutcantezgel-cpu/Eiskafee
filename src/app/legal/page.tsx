import React from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { Shield, Lock, Eye, FileText, Server, Database, Cookie, Scale, Mail, AlertTriangle } from "lucide-react";

function LegalIcon({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: 28, height: 28, borderRadius: '50%', background: '#CC624C',
      color: '#fefefe', display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      {children}
    </div>
  );
}

function SectionHeading({ icon, number, title }: { icon: React.ReactNode; number: string; title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
      <LegalIcon>{icon}</LegalIcon>
      <h3 style={{
        fontFamily: 'var(--font-calistoga), serif',
        fontSize: '1.15rem',
        color: '#2d1f19',
        margin: 0,
      }}>
        {number}. {title}
      </h3>
    </div>
  );
}

export default function LegalPage() {
  const sectionStyle: React.CSSProperties = {
    marginBottom: 40,
    fontFamily: 'var(--font-nunito), sans-serif',
    color: '#5c3d35',
    fontSize: '0.95rem',
    lineHeight: 1.75,
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fefefe' }}>
      {/* Header */}
      <div style={{
        background: '#eedfcc', paddingTop: 110, paddingLeft: 24, paddingRight: 24, paddingBottom: 48,
        textAlign: 'center',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-calistoga), serif',
          fontSize: 'clamp(2rem, 5vw, 2.8rem)',
          color: '#2d1f19', marginBottom: 8,
        }}>Rechtliches</h1>
        <p style={{
          fontFamily: 'var(--font-nunito), sans-serif',
          color: '#5c3d35',
        }}>Impressum, Datenschutz & AGB</p>

        {/* Quick nav pills */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 20, flexWrap: 'wrap' }}>
          {[
            ['#impressum', 'Impressum'],
            ['#datenschutz', 'Datenschutz'],
            ['#cookies', 'Cookies'],
            ['#agb', 'AGB'],
          ].map(([href, label]) => (
            <a key={href} href={href} style={{
              background: '#f5efe8', color: '#CC624C', padding: '8px 18px', borderRadius: 50,
              fontFamily: 'var(--font-nunito), sans-serif', fontWeight: 800,
              fontSize: '0.82rem', textDecoration: 'none',
              transition: 'background 0.2s',
            }}>
              {label}
            </a>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '64px 24px' }}>
        <FadeUp>
          {/* ══════════════════════════════════════════════════════════════
              IMPRESSUM
          ══════════════════════════════════════════════════════════════ */}
          <section id="impressum" style={{ marginBottom: 80, scrollMarginTop: 100 }}>
            <h2 style={{
              fontFamily: 'var(--font-calistoga), serif', fontSize: '1.8rem',
              color: '#2d1f19', marginBottom: 32, borderBottom: '2px solid #eedfcc', paddingBottom: 16,
            }}>Impressum</h2>

            <div style={sectionStyle}>
              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontWeight: 800, color: '#2d1f19', marginBottom: 4 }}>Anbieter</h3>
                <p>Hey Fede! Dessertbar & Café<br/>Inhaberin: Federica Rossi<br/>Langgasse 68<br/>35576 Wetzlar<br/>Deutschland</p>
              </div>

              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontWeight: 800, color: '#2d1f19', marginBottom: 4 }}>Kontakt</h3>
                <p>
                  Telefon: 06441 7890426<br/>
                  WhatsApp: 0176 25026991<br/>
                  E-Mail: <span style={{ fontWeight: 700, color: '#CC624C' }}>hallo@hey-fede.de</span>
                </p>
              </div>

              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontWeight: 800, color: '#2d1f19', marginBottom: 4 }}>Umsatzsteuer-ID</h3>
                <p>Gemäß § 27a Umsatzsteuergesetz:<br/>
                  <span style={{
                    display: 'inline-block', background: '#eedfcc', padding: '2px 8px',
                    borderRadius: 6, fontFamily: 'monospace', fontSize: '0.88rem', marginTop: 4,
                  }}>DE 312 456 789</span>
                </p>
              </div>

              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontWeight: 800, color: '#2d1f19', marginBottom: 4 }}>Aufsichtsbehörde</h3>
                <p>Lebensmittelüberwachung Lahn-Dill-Kreis<br/>Karl-Kellner-Ring 51, 35576 Wetzlar</p>
              </div>

              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontWeight: 800, color: '#2d1f19', marginBottom: 4 }}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
                <p>Federica Rossi<br/>Langgasse 68<br/>35576 Wetzlar</p>
              </div>

              <div style={{
                background: '#eedfcc', padding: 20, borderRadius: 16, marginTop: 32,
                fontSize: '0.88rem',
              }}>
                <strong style={{ color: '#2d1f19' }}>EU-Streitschlichtung:</strong> Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: '#CC624C', fontWeight: 700 }}>
                  ec.europa.eu/consumers/odr
                </a>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              DATENSCHUTZ
          ══════════════════════════════════════════════════════════════ */}
          <section id="datenschutz" style={{ marginBottom: 80, scrollMarginTop: 100 }}>
            <h2 style={{
              fontFamily: 'var(--font-calistoga), serif', fontSize: '1.8rem',
              color: '#2d1f19', marginBottom: 32, borderBottom: '2px solid #eedfcc', paddingBottom: 16,
            }}>Datenschutzerklärung</h2>

            {/* 1. Verantwortlicher */}
            <div style={sectionStyle}>
              <SectionHeading icon={<Shield size={14} />} number="1" title="Verantwortlicher" />
              <p>
                Federica Rossi, Inhaberin von Hey Fede! Dessertbar & Café<br/>
                Langgasse 68, 35576 Wetzlar<br/>
                E-Mail: <span style={{ fontWeight: 700, color: '#CC624C' }}>datenschutz@hey-fede.de</span>
              </p>
            </div>

            {/* 2. Erhobene Daten */}
            <div style={sectionStyle}>
              <SectionHeading icon={<Database size={14} />} number="2" title="Erhobene Daten" />
              <p style={{ marginBottom: 12 }}>Für die Nutzung unserer Website und den Vorbestellservice erfassen wir folgende personenbezogene Daten:</p>
              <ul style={{ paddingLeft: 20, listStyleType: 'disc' }}>
                <li>Name & Handynummer (für Rückfragen zur Abholung)</li>
                <li>E-Mail-Adresse (für Bestellbestätigung & Kontoanmeldung)</li>
                <li>Bestelldaten (zur Zubereitung deiner Bestellung)</li>
                <li>Technische Daten: IP-Adresse, Browser-Typ, Gerät, Betriebssystem (automatisch durch Server-Logs)</li>
                <li>Nutzungsdaten: Aufgerufene Seiten, Verweildauer (nur bei erteiltem Consent für Statistik-Cookies)</li>
              </ul>
            </div>

            {/* 3. Rechtsgrundlagen */}
            <div style={sectionStyle}>
              <SectionHeading icon={<Scale size={14} />} number="3" title="Rechtsgrundlagen" />
              <p>Die Verarbeitung deiner Daten erfolgt auf Grundlage folgender Rechtsgrundlagen der DSGVO:</p>
              <div style={{ background: '#eedfcc', borderRadius: 14, padding: 16, marginTop: 12, fontSize: '0.88rem' }}>
                <ul style={{ paddingLeft: 16, listStyleType: 'none', margin: 0 }}>
                  <li style={{ marginBottom: 8 }}><strong>Art. 6 Abs. 1 lit. a</strong> — Einwilligung: Für optionale Cookies (Statistik, Marketing)</li>
                  <li style={{ marginBottom: 8 }}><strong>Art. 6 Abs. 1 lit. b</strong> — Vertragserfüllung: Für die Abwicklung deiner Bestellung</li>
                  <li><strong>Art. 6 Abs. 1 lit. f</strong> — Berechtigtes Interesse: Für technisch notwendige Verarbeitungen (z.B. Server-Logs, Website-Sicherheit)</li>
                </ul>
              </div>
            </div>

            {/* 4. Empfänger */}
            <div style={sectionStyle}>
              <SectionHeading icon={<Eye size={14} />} number="4" title="Empfänger & Auftragsverarbeiter" />
              <p>Wir setzen folgende Drittanbieter ein, die im Rahmen der Auftragsverarbeitung Zugang zu personenbezogenen Daten haben können:</p>
              <table style={{
                width: '100%', borderCollapse: 'collapse', marginTop: 12, fontSize: '0.85rem',
              }}>
                <thead>
                  <tr style={{ background: '#eedfcc', textAlign: 'left' }}>
                    <th style={{ padding: '10px 12px', fontWeight: 800, color: '#2d1f19' }}>Dienst</th>
                    <th style={{ padding: '10px 12px', fontWeight: 800, color: '#2d1f19' }}>Anbieter</th>
                    <th style={{ padding: '10px 12px', fontWeight: 800, color: '#2d1f19' }}>Zweck</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Firebase Auth', 'Google Ireland Ltd', 'Nutzer-Authentifizierung'],
                    ['Firebase Firestore', 'Google Ireland Ltd', 'Speicherung von Bestellungen'],
                    ['Vercel', 'Vercel Inc., USA', 'Website-Hosting & CDN'],
                  ].map(([dienst, anbieter, zweck], i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #eedfcc' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 700 }}>{dienst}</td>
                      <td style={{ padding: '10px 12px' }}>{anbieter}</td>
                      <td style={{ padding: '10px 12px' }}>{zweck}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 5. Drittlandtransfer */}
            <div style={sectionStyle}>
              <SectionHeading icon={<Server size={14} />} number="5" title="Drittlandtransfer (USA)" />
              <p>
                Einige der eingesetzten Dienste (Google, Vercel) haben ihren Sitz in den USA. Die Datenübermittlung erfolgt auf Grundlage des
                EU-US Data Privacy Framework (Angemessenheitsbeschluss der EU-Kommission gemäß Art. 45 DSGVO)
                sowie ergänzend auf Basis von EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
              </p>
            </div>

            {/* 6. Speicherdauer */}
            <div style={sectionStyle}>
              <SectionHeading icon={<FileText size={14} />} number="6" title="Speicherdauer" />
              <ul style={{ paddingLeft: 20, listStyleType: 'disc' }}>
                <li><strong>Bestelldaten:</strong> 90 Tage nach Abholung (automatische Löschung)</li>
                <li><strong>Kontodata:</strong> Bis zur Löschung deines Kontos durch dich</li>
                <li><strong>Server-Logs:</strong> Maximal 30 Tage</li>
                <li><strong>Kontaktanfragen:</strong> 6 Monate nach Abschluss der Bearbeitung</li>
                <li><strong>Steuerrelevante Daten:</strong> 10 Jahre (gesetzliche Aufbewahrungspflicht)</li>
              </ul>
            </div>

            {/* 7. Betroffenenrechte */}
            <div style={sectionStyle}>
              <SectionHeading icon={<Lock size={14} />} number="7" title="Deine Rechte (Betroffenenrechte)" />
              <p style={{ marginBottom: 12 }}>Nach der DSGVO stehen dir folgende Rechte zu:</p>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 10, marginTop: 8,
              }}>
                {[
                  ['Auskunft', 'Art. 15 DSGVO'],
                  ['Berichtigung', 'Art. 16 DSGVO'],
                  ['Löschung', 'Art. 17 DSGVO'],
                  ['Einschränkung', 'Art. 18 DSGVO'],
                  ['Datenübertragbarkeit', 'Art. 20 DSGVO'],
                  ['Widerspruch', 'Art. 21 DSGVO'],
                ].map(([right, article]) => (
                  <div key={right} style={{
                    background: '#eedfcc', borderRadius: 12, padding: '12px 16px',
                  }}>
                    <div style={{ fontWeight: 800, color: '#2d1f19', fontSize: '0.85rem' }}>{right}</div>
                    <div style={{ fontSize: '0.75rem', color: '#9a7060', marginTop: 2 }}>{article}</div>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 16 }}>
                Zur Ausübung deiner Rechte kontaktiere uns unter{' '}
                <span style={{ fontWeight: 700, color: '#CC624C' }}>datenschutz@hey-fede.de</span>.
              </p>
            </div>

            {/* 8. Cookies */}
            <div id="cookies" style={{ ...sectionStyle, scrollMarginTop: 100 }}>
              <SectionHeading icon={<Cookie size={14} />} number="8" title="Cookies & Tracking" />
              <p style={{ marginBottom: 16 }}>
                Unsere Website verwendet Cookies. Die Rechtsgrundlage für technisch notwendige Cookies ist Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse). Für alle anderen Cookies holen wir deine Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO, § 25 TDDDG).
                Du kannst deine Einstellungen jederzeit über den 🍪-Button unten links ändern.
              </p>
              <table style={{
                width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem',
              }}>
                <thead>
                  <tr style={{ background: '#eedfcc', textAlign: 'left' }}>
                    <th style={{ padding: '10px 12px', fontWeight: 800, color: '#2d1f19' }}>Cookie</th>
                    <th style={{ padding: '10px 12px', fontWeight: 800, color: '#2d1f19' }}>Anbieter</th>
                    <th style={{ padding: '10px 12px', fontWeight: 800, color: '#2d1f19' }}>Zweck</th>
                    <th style={{ padding: '10px 12px', fontWeight: 800, color: '#2d1f19' }}>Laufzeit</th>
                    <th style={{ padding: '10px 12px', fontWeight: 800, color: '#2d1f19' }}>Kategorie</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['cc_cookie', 'Hey Fede!', 'Cookie-Einstellungen', '6 Monate', 'Notwendig'],
                    ['__session', 'Firebase', 'Login-Session', 'Sitzung', 'Notwendig'],
                    ['splash_shown', 'Hey Fede!', 'Splash nur 1× zeigen', 'Sitzung', 'Notwendig'],
                    ['hf_ach_*', 'Hey Fede!', 'Achievement-Fortschritt', 'Dauerhaft', 'Funktional'],
                  ].map(([name, provider, purpose, duration, category], i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #eedfcc' }}>
                      <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontWeight: 600 }}>{name}</td>
                      <td style={{ padding: '8px 12px' }}>{provider}</td>
                      <td style={{ padding: '8px 12px' }}>{purpose}</td>
                      <td style={{ padding: '8px 12px' }}>{duration}</td>
                      <td style={{ padding: '8px 12px' }}>
                        <span style={{
                          background: category === 'Notwendig' ? '#CC624C' : '#E4C0A8',
                          color: category === 'Notwendig' ? '#fefefe' : '#2d1f19',
                          padding: '2px 10px', borderRadius: 50, fontSize: '0.75rem', fontWeight: 800,
                        }}>{category}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 9. Hosting */}
            <div style={sectionStyle}>
              <SectionHeading icon={<Server size={14} />} number="9" title="Hosting & CDN" />
              <p>
                Unsere Website wird bei <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet.
                Beim Aufruf unserer Website werden automatisch technische Daten (IP-Adresse, Browser, Zeitpunkt des Zugriffs)
                durch den Server erhoben. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                Vercel ist unter dem EU-US Data Privacy Framework zertifiziert.
              </p>
            </div>

            {/* 10. Firebase */}
            <div style={sectionStyle}>
              <SectionHeading icon={<Database size={14} />} number="10" title="Firebase (Google)" />
              <p>
                Für die Nutzer-Authentifizierung und Datenspeicherung nutzen wir Firebase-Dienste von Google Ireland Limited
                (Gordon House, Barrow Street, Dublin 4, Irland). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
                (Vertragserfüllung) und wird durch einen Auftragsverarbeitungsvertrag (AVV) abgesichert.
                Datentransfer in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework.
              </p>
            </div>

            {/* 11. Kontaktformular */}
            <div style={sectionStyle}>
              <SectionHeading icon={<Mail size={14} />} number="11" title="Kontaktformular" />
              <p>
                Wenn du uns über das Kontaktformular auf unserer Website kontaktierst, werden die angegebenen Daten
                (Name, E-Mail, Nachricht) zur Bearbeitung deiner Anfrage verarbeitet. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                Die Daten werden nach Abschluss der Bearbeitung und Ablauf steuerrechtlicher Aufbewahrungsfristen gelöscht.
              </p>
            </div>

            {/* 12. Beschwerderecht */}
            <div style={sectionStyle}>
              <SectionHeading icon={<AlertTriangle size={14} />} number="12" title="Beschwerderecht bei der Aufsichtsbehörde" />
              <p>
                Wenn du der Auffassung bist, dass die Verarbeitung deiner Daten gegen die DSGVO verstößt,
                hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
              </p>
              <div style={{
                background: '#eedfcc', borderRadius: 14, padding: 16, marginTop: 12, fontSize: '0.88rem',
              }}>
                <strong style={{ color: '#2d1f19' }}>Zuständige Aufsichtsbehörde:</strong><br/>
                Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)<br/>
                Postfach 3163, 65021 Wiesbaden<br/>
                <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer" style={{ color: '#CC624C', fontWeight: 700 }}>
                  datenschutz.hessen.de
                </a>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              AGB
          ══════════════════════════════════════════════════════════════ */}
          <section id="agb" style={{ scrollMarginTop: 100 }}>
            <h2 style={{
              fontFamily: 'var(--font-calistoga), serif', fontSize: '1.8rem',
              color: '#2d1f19', marginBottom: 32, borderBottom: '2px solid #eedfcc', paddingBottom: 16,
            }}>AGB</h2>

            <div style={{
              background: '#E4C0A8', padding: 20, borderRadius: 16, marginBottom: 40,
              fontFamily: 'var(--font-nunito), sans-serif', fontSize: '0.88rem', color: '#5c3d35',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-calistoga), serif', color: '#2d1f19',
                fontSize: '1rem', marginBottom: 12,
              }}>Das Wichtigste in Kürze</h3>
              <ul style={{ paddingLeft: 0, listStyleType: 'none', margin: 0 }}>
                <li>▸ Vorbestellung ist kostenlos & unverbindlich</li>
                <li>▸ Zahlung erfolgt vor Ort im Laden</li>
                <li>▸ Stornierung bis 30 Min vor Abholung möglich</li>
                <li>▸ Nicht abgeholte Bestellungen werden nach 30 Min Verzug aufgelöst</li>
              </ul>
            </div>

            <div style={{ fontFamily: 'var(--font-nunito), sans-serif', color: '#5c3d35', fontSize: '0.95rem', lineHeight: 1.75 }}>
              {[
                { n: '§ 1', t: 'Geltungsbereich', c: 'Diese AGB gelten für alle Vorbestellungen über die Hey Fede! Online-Plattform.' },
                { n: '§ 2', t: 'Vertragsschluss', c: 'Der Vertrag kommt mit Bestätigung deiner Bestellung per SMS oder E-Mail zustande. Bis dahin gilt die Bestellung als unverbindliche Anfrage.' },
                { n: '§ 3', t: 'Preise & Bezahlung', c: 'Alle Preise inkl. gesetzl. MwSt. (7% für Speisen zum Mitnehmen, 19% Verzehr vor Ort). Bezahlt wird ausschließlich vor Ort — bar, mit EC- oder Kreditkarte.' },
                { n: '§ 4', t: 'Abholung & Stornierung', c: 'Stornierung kostenlos bis 30 Min vor Abholzeit über die App, telefonisch oder per WhatsApp. Bei Nichtabholung kann die Bestellung anderweitig vergeben werden.' },
                { n: '§ 5', t: 'Haftung', c: 'Hey Fede! haftet nur bei Vorsatz und grober Fahrlässigkeit. Für leichte Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten.' },
              ].map(s => (
                <div key={s.n} style={{ borderBottom: '1px solid #eedfcc', paddingBottom: 24, marginBottom: 24 }}>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
                    <span style={{ fontFamily: 'var(--font-calistoga), serif', color: '#CC624C' }}>{s.n}</span>
                    <span style={{ fontFamily: 'var(--font-calistoga), serif', color: '#2d1f19' }}>{s.t}</span>
                  </div>
                  <p style={{ margin: 0 }}>{s.c}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Last updated */}
          <div style={{
            marginTop: 48, padding: '16px 20px', background: '#eedfcc', borderRadius: 14,
            fontFamily: 'var(--font-nunito), sans-serif', fontSize: '0.78rem', color: '#9a7060',
            textAlign: 'center',
          }}>
            Stand: Mai 2026 · Diese Seite dient der Information und ersetzt keine Rechtsberatung.
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
