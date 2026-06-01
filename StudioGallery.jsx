/* StudioGallery — "A Space Built To Move You." interactive gallery + lightbox */

function StudioGallery({ lang }) {
  const images = [
    { url: "https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/1d011d00-e9e8-4d0f-7cd3-35886e138100/public",
      title: { en: "Main Arena & Stages", pt: "Arena Principal e Palcos", es: "Arena Principal y Escenarios" },
      desc: { en: "Our flagship Newark layout featuring 24 premium elastic bungees aligned to high-definition lighting grids.",
        pt: "Nossa arena em Newark com 24 camas elásticas de alta performance alinhadas a LEDs de alta intensidade.",
        es: "Nuestra arena insignia en Newark con 24 elásticos alineados a sistemas de luces de alta definición." } },
    { url: "assets/more-than-workout.webp",
      title: { en: "Rebound Cardio Deck", pt: "Pista de Cardio Rebound", es: "Pista de Cardio Rebound" },
      desc: { en: "A dark, immersive athletic club equipped with glowing neon linear grids to focus your movement.",
        pt: "Um clube esportivo escuro e imersivo com guias de neon lineares que ajudam a focar nos movimentos.",
        es: "Un club deportivo oscuro e inmersivo con guías de neón lineales para enfocar tus saltos." } },
    { url: "assets/class-fit-cardio.webp",
      title: { en: "High-Energy Live Performance", pt: "Treino em Alta Voltagem", es: "Rendimiento en Vivo de Alta Energía" },
      desc: { en: "Low-impact, extremely fast-paced exercises led by certified trainers on elevated central stages.",
        pt: "Exercícios pliométricos de baixíssimo impacto comandados por instrutores em palcos elevados.",
        es: "Ejercicios rápidos de bajo impacto guiados por entrenadores en escenarios elevados centralizados." } },
    { url: "assets/class-dance-beat.webp",
      title: { en: "Sound & Deep Bass Integration", pt: "Batidas e Graves Envolventes", es: "Sonido y Graves Envolventes" },
      desc: { en: "Dual 18-inch concert subwoofers synchronized to trigger pure endorphins while you bounce.",
        pt: "Subwoofers potentes de 18 polegadas que ajudam a sintonizar a frequência cardíaca com a batida.",
        es: "Subwoofers dobles de 18 pulgadas sincronizados para disparar endorfinas en cada rebote." } },
  ];

  const t = {
    en: { tag: "Our Studio", t1: "A Space Built", t2: "To Move You.",
      sub: "More than a gym. A high-energy studio designed for performance, connection, and unstoppable results.",
      specL: "Newark Space Overview", specR: "24 Rebound Spots",
      specD: "Your exclusive jumping placement faces high-contrast mirror setups and elevated staging tailored for unmatched trainer line of sight.",
      live: "Interactive Showcase", hint: "Click photos to expand in 4K quality", view: "View", of: "of",
      feats: [["compass", "Modern Design", "Sleek, open space built for high-energy workouts."],
        ["zap", "Energy Everywhere", "Lights, music and atmosphere that keep you moving."],
        ["users", "Made for Connection", "A space where motivation and community come together."],
        ["shield-check", "Clean & Professional", "Safe, top-quality equipment you can trust."]],
      slogan: ["Walk in.", "Feel it.", "Become part of it."] },
    pt: { tag: "O Nosso Estúdio", t1: "Um Espaço Criado", t2: "Para Mover Você.",
      sub: "Mais que uma academia. Um estúdio de alta energia projetado para performance, conexão e resultados extraordinários.",
      specL: "Visão do Studio em Newark", specR: "24 Spots de Rebound",
      specD: "Seu spot tem espelhos frontais, barras de segurança e amortecimento individual para proteger suas articulações.",
      live: "Galeria Interativa", hint: "Clique para ver em tela cheia", view: "Vista", of: "de",
      feats: [["compass", "Design Moderno", "Um espaço amplo, escuro e sofisticado construído para treinos intensos."],
        ["zap", "Energia Vibrante", "Luzes, música e clima que te mantêm em movimento."],
        ["users", "Conexão Real", "Uma comunidade unida que estimula sua performance sem julgamentos."],
        ["shield-check", "Extrema Qualidade", "Equipamento profissional e camas elásticas certificadas de alta durabilidade."]],
      slogan: ["Entre.", "Sinta a vibe.", "Faça parte disso."] },
    es: { tag: "Nuestro Estudio", t1: "Un Espacio Creado", t2: "Para Moverte.",
      sub: "Más que un gimnasio. Un estudio de alta energía diseñado para el rendimiento, la conexión y resultados imparables.",
      specL: "Vista del Studio en Newark", specR: "24 Spots de Rebound",
      specD: "Tu zona exclusiva cuenta con espejos frontales de estudio, barra opcional y un sistema de elásticos especializado para proteger tus rodillas.",
      live: "Galería Interactiva", hint: "Haz clic para expandir en resolución 4K", view: "Vista", of: "de",
      feats: [["compass", "Diseño Moderno", "Espacio elegante y abierto construido para entrenamientos vibrantes."],
        ["zap", "Energía Adrenal", "Luces, audio y una atmósfera premium que te mantienen saltando."],
        ["users", "Hecho para Conectar", "Un lugar donde la motivación colectiva y la comunidad se fusionan."],
        ["shield-check", "Seguro y Profesional", "Equipos de calidad profesional garantizada en los que puedes confiar."]],
      slogan: ["Entra.", "Siéntelo.", "Sé parte del club."] },
  }[lang];

  const [idx, setIdx] = React.useState(0);
  const [light, setLight] = React.useState(false);
  React.useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, []);
  const next = (e) => { if (e) e.stopPropagation(); setIdx((p) => (p + 1) % images.length); };
  const prev = (e) => { if (e) e.stopPropagation(); setIdx((p) => (p - 1 + images.length) % images.length); };
  const cur = images[idx];

  return (
    <section id="ourstudio" style={{ position: "relative", padding: "100px 0", background: "var(--deep-black)",
      borderTop: "1px solid rgba(255,255,255,0.04)", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "20%", width: 450, height: 450, borderRadius: "50%",
        background: "rgba(168,255,0,0.025)", filter: "blur(150px)" }}></div>
      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 56, alignItems: "center", marginBottom: 72 }} className="gallery-grid">
          {/* LEFT */}
          <div>
            <p className="eyebrow" style={{ marginBottom: 16 }}>/// {t.tag} ———</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: "clamp(2.2rem,4.2vw,3.4rem)",
              lineHeight: 0.95, textTransform: "uppercase", transform: "skewX(-6deg)" }}>
              {t.t1}<br /><span style={{ color: "var(--energy-green)", display: "block", marginTop: 8 }}>{t.t2}</span></h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--fg3)", marginTop: 22, maxWidth: 420 }}>{t.sub}</p>
            <svg viewBox="0 0 400 40" style={{ width: 220, height: 30, marginTop: 22, color: "rgba(168,255,0,0.4)" }} fill="none">
              <path d="M 0,20 L 175,20 L 180,15 L 187,26 L 193,5 L 202,34 L 207,18 L 212,23 L 216,20 L 400,20"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div style={{ position: "relative", maxWidth: 420, marginTop: 26 }}>
              <div className="cham-border" style={{ background: "rgba(255,255,255,0.06)",
                clipPath: "polygon(14px 0%,100% 0%,100% calc(100% - 14px),calc(100% - 14px) 100%,0% 100%,0% 14px)" }}></div>
              <div style={{ position: "absolute", inset: 1, background: "var(--deep-black)",
                clipPath: "polygon(14px 0%,100% 0%,100% calc(100% - 14px),calc(100% - 14px) 100%,0% 100%,0% 14px)" }}></div>
              <div style={{ position: "relative", zIndex: 2, padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-mono)",
                  fontSize: 10, letterSpacing: "0.14em", color: "var(--fg3)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 10 }}>
                  <span>{t.specL.toUpperCase()}</span>
                  <span style={{ color: "var(--energy-green)", fontWeight: 700 }}>{t.specR.toUpperCase()}</span>
                </div>
                <p style={{ fontSize: 12, color: "var(--fg2)", lineHeight: 1.6, marginTop: 12 }}>{t.specD}</p>
              </div>
            </div>
          </div>

          {/* RIGHT — gallery */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-mono)",
              fontSize: 11, color: "var(--fg3)", padding: "0 2px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 7, color: "rgba(168,255,0,0.8)", fontWeight: 600 }}>
                <span className="pdot"></span>{t.live.toUpperCase()}</span>
              <span style={{ fontSize: 10, letterSpacing: "0.06em", color: "rgba(255,255,255,0.3)" }} className="gallery-hint">{t.hint.toUpperCase()}</span>
            </div>

            <div onClick={() => setLight(true)} title={t.hint}
              style={{ position: "relative", width: "100%", aspectRatio: "16/9", cursor: "pointer" }} className="gallery-feature">
              <div className="cham-border" style={{ background: "rgba(255,255,255,0.10)",
                clipPath: "polygon(20px 0%,100% 0%,100% calc(100% - 20px),calc(100% - 20px) 100%,0% 100%,0% 20px)" }}></div>
              <div style={{ position: "absolute", inset: 1, overflow: "hidden", background: "#000",
                clipPath: "polygon(20px 0%,100% 0%,100% calc(100% - 20px),calc(100% - 20px) 100%,0% 100%,0% 20px)" }}>
                <img src={cur.url} alt="" referrerPolicy="no-referrer"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.85),transparent 55%)" }}></div>
                <div style={{ position: "absolute", left: 24, right: 24, bottom: 20, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
                  <div>
                    <span style={{ fontFamily: "var(--font-mono)", fontWeight: 800, fontSize: 9, letterSpacing: "0.16em",
                      color: "var(--energy-green)", textTransform: "uppercase", display: "block", marginBottom: 4 }}>{t.view} {idx + 1} {t.of} {images.length}</span>
                    <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 21,
                      textTransform: "uppercase", lineHeight: 1, letterSpacing: "0.01em" }}>{cur.title[lang]}</h4>
                    <p style={{ fontSize: 12, color: "var(--fg2)", lineHeight: 1.4, marginTop: 6, maxWidth: 420 }} className="gallery-desc">{cur.desc[lang]}</p>
                  </div>
                  <span style={{ width: 40, height: 40, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "50%", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}>
                    <Icon name="maximize-2" size={17} /></span>
                </div>
              </div>
              <div className="gallery-arrows" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "auto" }}>
                  <IconButton name="chevron-left" onClick={prev} ariaLabel="Previous" /></div>
                <div style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "auto" }}>
                  <IconButton name="chevron-right" onClick={next} ariaLabel="Next" /></div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
              {images.map((img, i) => (
                <button key={i} onClick={() => setIdx(i)} style={{ position: "relative", aspectRatio: "16/9", border: 0,
                  padding: 0, borderRadius: 8, overflow: "hidden", cursor: "pointer", background: "#000" }}>
                  <img src={img.url} alt="" referrerPolicy="no-referrer" style={{ width: "100%", height: "100%", objectFit: "cover",
                    filter: idx === i ? "brightness(1)" : "brightness(0.5)", transform: idx === i ? "scale(1.05)" : "none", transition: "all .2s" }} />
                  <span style={{ position: "absolute", inset: 0, borderRadius: 8, pointerEvents: "none",
                    border: idx === i ? "1px solid var(--energy-green)" : "1px solid rgba(255,255,255,0.1)",
                    boxShadow: idx === i ? "0 0 8px rgba(168,255,0,0.3)" : "none" }}></span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4 features */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 32,
          padding: "44px 0", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }} className="gallery-feats">
          {t.feats.map(([ic, ti, de], i) => (
            <div key={i} className="feat-col" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ color: "var(--energy-green)" }}><Icon name={ic} size={26} strokeWidth={1.7} /></span>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#fff" }}>{ti}</h4>
              <p style={{ fontSize: 13, color: "var(--fg3)", lineHeight: 1.5, maxWidth: 260 }}>{de}</p>
            </div>
          ))}
        </div>

        {/* slogan */}
        <div style={{ marginTop: 56, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 18, fontFamily: "var(--font-display)",
            fontWeight: 800, fontStyle: "italic", fontSize: "clamp(1rem,2vw,1.25rem)", letterSpacing: "0.22em", textTransform: "uppercase" }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 26 }}>[</span>
            <span style={{ color: "var(--fg2)" }}>{t.slogan[0]} <span style={{ color: "var(--energy-green)" }}>{t.slogan[1]}</span> {t.slogan[2]}</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 26 }}>]</span>
          </div>
        </div>
      </div>

      {/* lightbox */}
      {light && (
        <div onClick={() => setLight(false)} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ position: "absolute", top: 22, right: 22 }}><IconButton name="x" onClick={() => setLight(false)} ariaLabel="Close" /></div>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: 1100, width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
              <img src={cur.url} alt="" referrerPolicy="no-referrer" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }}><IconButton name="chevron-left" onClick={prev} ariaLabel="Previous" /></div>
              <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)" }}><IconButton name="chevron-right" onClick={next} ariaLabel="Next" /></div>
            </div>
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontWeight: 800, fontSize: 10, letterSpacing: "0.16em",
                color: "var(--energy-green)", textTransform: "uppercase" }}>{t.view} {idx + 1} {t.of} {images.length}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 24,
                textTransform: "uppercase", margin: "8px 0 6px" }}>{cur.title[lang]}</h3>
              <p style={{ fontSize: 14, color: "var(--fg3)", lineHeight: 1.5 }}>{cur.desc[lang]}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

window.StudioGallery = StudioGallery;
