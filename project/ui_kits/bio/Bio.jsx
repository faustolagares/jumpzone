/* Jump Zone Studio — /bio mobile link page (cosmetic recreation of BioPage.tsx) */

function BIcon({ name, size = 18, strokeWidth = 2.2, color }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = ref.current; if (!h || !window.lucide) return;
    h.innerHTML = ""; const i = document.createElement("i"); i.setAttribute("data-lucide", name); h.appendChild(i);
    try { window.lucide.createIcons({ attrs: { width: size, height: size, "stroke-width": strokeWidth } }); } catch (e) {}
  });
  return <span ref={ref} style={{ display: "inline-flex", color, lineHeight: 0 }} />;
}

function LinkButton({ variant, icon, label, delay }) {
  return (
    <button className={`bio-link ${variant}`} style={{ animationDelay: `${delay}ms` }}>
      {variant === "secondary" && <><span className="brd"></span><span className="fil"></span></>}
      <span className="inr"><BIcon name={icon} size={17} /><span className="lab">{label}</span></span>
    </button>
  );
}

function Social({ slug, label, delay }) {
  return (
    <button className="bio-social" aria-label={label} style={{ animationDelay: `${delay}ms` }}>
      <span className="brd"></span><span className="fil"></span>
      <img src={`https://cdn.simpleicons.org/${slug}/CCCCCC`} alt="" width="18" height="18" style={{ position: "relative", zIndex: 2 }} />
    </button>
  );
}

function Bio() {
  const [lang, setLang] = React.useState("en");
  const C = {
    en: { sub: "A new fitness experience in Newark, NJ.", foot: "Move. Connect. Level up.",
      links: [["primary", "calendar-days", "Book Your Jump"], ["secondary", "clock", "View Schedule"],
        ["secondary", "users", "Memberships"], ["secondary", "globe", "Website"],
        ["secondary", "message-circle", "WhatsApp"], ["secondary", "phone", "Call Now"],
        ["secondary", "map-pin", "Get Directions"]] },
    pt: { sub: "Uma nova experiência fitness em Newark, NJ.", foot: "Mexa-se. Conecte. Suba de nível.",
      links: [["primary", "calendar-days", "Garantir Meu Acesso"], ["secondary", "clock", "Ver Horários"],
        ["secondary", "users", "Planos"], ["secondary", "globe", "Site"],
        ["secondary", "message-circle", "WhatsApp"], ["secondary", "phone", "Ligar Agora"],
        ["secondary", "map-pin", "Como Chegar"]] },
    es: { sub: "Una nueva experiencia fitness en Newark, NJ.", foot: "Muévete. Conecta. Sube de nivel.",
      links: [["primary", "calendar-days", "Reservar Mi Acceso"], ["secondary", "clock", "Ver Horarios"],
        ["secondary", "users", "Membresías"], ["secondary", "globe", "Website"],
        ["secondary", "message-circle", "WhatsApp"], ["secondary", "phone", "Llamar Ahora"],
        ["secondary", "map-pin", "Cómo Llegar"]] },
  }[lang];
  const langs = [["en", "EN"], ["pt", "PT"], ["es", "ES"]];

  return (
    <div className="bio-frame">
      <section className="bio-cover">
        <div className="bio-cover-glow"></div>
        <div className="bio-lang">
          <span className="gl"><BIcon name="globe" size={14} /></span>
          {langs.map(([c, l]) => (
            <button key={c} className={lang === c ? "on" : ""} onClick={() => setLang(c)}>{l}</button>
          ))}
        </div>
      </section>

      <section className="bio-body">
        <img className="bio-logo" src="../../assets/logo-jumpzone.png" alt="Jump Zone Studio" />
        <p className="bio-sub">{C.sub}</p>
        <div className="bio-socials">
          {[["instagram", "Instagram"], ["tiktok", "TikTok"], ["facebook", "Facebook"], ["youtube", "YouTube"]].map(([s, l], i) => (
            <Social key={s} slug={s} label={l} delay={190 + i * 40} />
          ))}
        </div>
        <div className="bio-links">
          {C.links.map((lk, i) => (
            <LinkButton key={lk[2]} variant={lk[0]} icon={lk[1]} label={lk[2]} delay={280 + i * 55} />
          ))}
        </div>
        <p className="bio-foot">{C.foot}</p>
        <a className="bio-made" href="https://www.nexlink.ai" target="_blank" rel="noopener noreferrer">
          Made by <span>NexLink</span></a>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Bio />);
