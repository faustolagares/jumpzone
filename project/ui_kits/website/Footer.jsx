/* Footer — complete 4-column studio footer (recreation of Footer.tsx) */

function Footer({ lang, onNav }) {
  const year = new Date().getFullYear();
  const f = {
    en: { q1: "We don't just jump.", q2: "We level up.",
      intro: "Experience Newark's new fitness experience with high-energy rebound workouts, music, and community.",
      locTitle: "Newark Headquarters", locNote: "Adjacent to Mulberry Commons",
      opsTitle: "Studio Operations", weekdays: "Mon – Fri:", saturday: "Saturday:", sunday: "Sunday:", live: "Live Holiday Timings",
      club: "The Club Zone", links: [["Home", "top"], ["Our Style", "ourstudio"], ["How It Works", "how"], ["Benefits", "benefits"], ["Schedule", "schedule"], ["Pricing", "pricing"]],
      copy: "All metric and choreography simulations reserved.", tagline: "Designed for movement, engineered for concerts.", made: "Made by" },
    pt: { q1: "Nós não apenas pulamos.", q2: "Nós subimos de nível.",
      intro: "Viva uma nova experiência fitness em Newark com treinos rebound, música e comunidade.",
      locTitle: "Sede em Newark", locNote: "Ao lado do Mulberry Commons",
      opsTitle: "Operação do Estúdio", weekdays: "Seg – Sex:", saturday: "Sábado:", sunday: "Domingo:", live: "Horários Especiais ao Vivo",
      club: "Zona do Clube", links: [["Início", "top"], ["Conceito", "ourstudio"], ["Como Funciona", "how"], ["Benefícios", "benefits"], ["Horários", "schedule"], ["Planos", "pricing"]],
      copy: "Todos os direitos reservados.", tagline: "Criado para movimento, feito para o show.", made: "Feito pela" },
    es: { q1: "No solo saltamos.", q2: "Subimos de nivel.",
      intro: "Vive una nueva experiencia fitness en Newark con entrenamientos rebound, música y comunidad.",
      locTitle: "Sede en Newark", locNote: "Junto a Mulberry Commons",
      opsTitle: "Operación del Estudio", weekdays: "Lun – Vie:", saturday: "Sábado:", sunday: "Domingo:", live: "Horarios Especiales en Vivo",
      club: "Zona del Club", links: [["Inicio", "top"], ["Concepto", "ourstudio"], ["Cómo Funciona", "how"], ["Beneficios", "benefits"], ["Horarios", "schedule"], ["Tarifas", "pricing"]],
      copy: "Todos los derechos reservados.", tagline: "Diseñado para moverte, hecho para el show.", made: "Hecho por" },
  }[lang];

  const colTitle = { fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, letterSpacing: "0.2em",
    textTransform: "uppercase", color: "#fff", borderLeft: "2px solid var(--energy-green)", paddingLeft: 12, marginBottom: 22 };

  return (
    <footer id="footer" style={{ position: "relative", background: "#030303", borderTop: "1px solid rgba(255,255,255,0.04)",
      paddingTop: 88, paddingBottom: 56, color: "var(--fg2)", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 0, right: "25%", width: 450, height: 450, borderRadius: "50%",
        background: "rgba(168,255,0,0.02)", filter: "blur(140px)", pointerEvents: "none" }}></div>
      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "4fr 3fr 3fr 2fr", gap: 48, paddingBottom: 56,
          borderBottom: "1px solid rgba(255,255,255,0.05)" }} className="foot-grid">

          {/* Brand */}
          <div>
            <img src="../../assets/logo-jumpzone.png" alt="Jump Zone Studio"
              onClick={() => onNav("top")} style={{ height: 56, cursor: "pointer", marginBottom: 20 }} />
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, letterSpacing: "0.06em",
              textTransform: "uppercase", lineHeight: 1.15, color: "#fff", marginBottom: 16 }}>
              &ldquo;{f.q1}<span style={{ color: "var(--energy-green)", display: "block" }}>{f.q2}&rdquo;</span></p>
            <p style={{ fontSize: 13, color: "var(--fg2)", lineHeight: 1.6, maxWidth: 340, marginBottom: 22 }}>{f.intro}</p>
            <div style={{ display: "flex", gap: 10 }}>
              {[["instagram", "Instagram"], ["tiktok", "TikTok"], ["facebook", "Facebook"], ["youtube", "YouTube"]].map(([s, l]) => (
                <SocialButton key={s} slug={s} ariaLabel={l} />
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h5 style={colTitle}>{f.locTitle}</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, fontSize: 13 }}>
              <li style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "var(--energy-green)", flexShrink: 0, marginTop: 1 }}><Icon name="map-pin" size={18} /></span>
                <span style={{ lineHeight: 1.5 }}>122 Mulberry St, Newark, NJ 07102
                  <span style={{ display: "block", color: "var(--fg3)", fontSize: 11, marginTop: 4 }}>{f.locNote}</span></span>
              </li>
              <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ color: "var(--energy-green)", flexShrink: 0 }}><Icon name="phone" size={16} /></span>
                <span>+1 (973) 555-JUMP</span>
              </li>
              <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ color: "var(--energy-green)", flexShrink: 0 }}><Icon name="mail" size={16} /></span>
                <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--fg2)", textDecoration: "none" }}>rebels@jumpzonestudio.com</a>
              </li>
            </ul>
          </div>

          {/* Operations */}
          <div>
            <h5 style={colTitle}>{f.opsTitle}</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontFamily: "var(--font-mono)", fontSize: 12 }}>
              {[[f.weekdays, "06:00 AM – 09:30 PM"], [f.saturday, "07:00 AM – 05:00 PM"], [f.sunday, "08:00 AM – 02:00 PM"]].map(([d, h], i) => (
                <li key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none", paddingBottom: 8 }}>
                  <span style={{ color: "var(--fg2)" }}>{d}</span><span style={{ color: "#fff", fontWeight: 700 }}>{h}</span>
                </li>
              ))}
              <li style={{ paddingTop: 6 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 10px",
                  background: "rgba(168,255,0,0.05)", border: "1px solid rgba(168,255,0,0.10)", borderRadius: 3 }}>
                  <span className="pdot"></span>
                  <span style={{ fontSize: 10, color: "var(--energy-green)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>{f.live}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h5 style={colTitle}>{f.club}</h5>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {f.links.map(([label, id]) => (
                <button key={label} onClick={() => onNav(id)} style={{ background: "none", border: 0, cursor: "pointer",
                  textAlign: "left", fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 12, textTransform: "uppercase",
                  letterSpacing: "0.04em", color: "var(--fg2)", transition: "color .15s", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--energy-green)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg2)")}>{label}</button>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div style={{ paddingTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center",
          gap: 16, fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", color: "var(--fg3)" }}>
          <div style={{ lineHeight: 1.7 }}>
            <p>© {year} Jump Zone Fitness LLC. {f.copy}</p>
            <p style={{ letterSpacing: "0.16em" }}>{f.tagline}</p>
          </div>
          <a href="https://www.nexlink.ai" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 6, letterSpacing: "0.16em", fontWeight: 700,
              color: "var(--fg3)", textDecoration: "none" }}>
            <span>{f.made}</span><span style={{ color: "var(--energy-green)" }}>NexLink</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
