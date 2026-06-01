/* HowItWorks — "One Jump. Endless Energy." 5 class-style cards + stats banner */

function HowItWorks({ lang, onFind }) {
  const t = {
    en: { eye: "/// How It Works ///", t1: "One Jump.", t2: " Endless Energy.",
      s1: "Every class is a 50-minute, full-body workout on the trampoline.", s2: "Different styles. Same energy. Real results.",
      cta: "Find Your Class", stats: [["50 Minutes", "Of Pure Energy"], ["All Levels", "Welcome"], ["Real People", "Real Community"], ["Low Impact", "High Results"]] },
    pt: { eye: "/// Como Funciona ///", t1: "Um Salto.", t2: " Energia Infinita.",
      s1: "Cada aula é um treino de corpo inteiro de 50 minutos no trampolim.", s2: "Diferentes estilos. Mesma energia. Resultados reais.",
      cta: "Encontre Sua Aula", stats: [["50 Minutos", "De Pura Energia"], ["Todos os Níveis", "Bem-vindos"], ["Pessoas Reais", "Comunidade Real"], ["Baixo Impacto", "Resultados Reais"]] },
    es: { eye: "/// Cómo Funciona ///", t1: "Un Salto.", t2: " Energía Sin Fin.",
      s1: "Cada clase es un entrenamiento de cuerpo completo de 50 minutos en el trampolín.", s2: "Diferentes estilos. Misma energía. Resultados reales.",
      cta: "Busca Tu Clase", stats: [["50 Minutos", "De Pura Energía"], ["Todos los Niveles", "Bienvenidos"], ["Gente Real", "Comunidad Real"], ["Bajo Impacto", "Grandes Resultados"]] },
  }[lang];

  const cards = [
    { id: "fit", title: "Jump Fit", img: "class-fit-cardio.webp", badge: "Cardio", icon: "activity",
      desc: { en: "High-energy cardio that burns calories and gets your heart pumping.", pt: "Cardio de alta energia que acelera o coração e queima calorias.", es: "Cardio de alta energía que quema calorías y acelera tu corazón." } },
    { id: "hiit", title: "Jump HIIT", img: "class-hiit-power.webp", badge: "HIIT", icon: "flame",
      desc: { en: "Short bursts. Big impact. HIIT-style intervals for maximum burn.", pt: "Rajadas curtas. Grande impacto. Intervalos HIIT para queima máxima.", es: "Ráfagas cortas. Gran impacto. Intervalos HIIT para máxima quema." } },
    { id: "strong", title: "Jump Strong", img: "class-strong-tone.webp", badge: "Strength", icon: "dumbbell",
      desc: { en: "Build strength and tone with low-impact moves that deliver.", pt: "Construa força e tonifique com movimentos de baixo impacto.", es: "Desarrolla fuerza y tonifica con movimientos de bajo impacto." } },
    { id: "dance", title: "Jump Dance", img: "class-dance-beat.webp", badge: "Dance", icon: "music",
      desc: { en: "Dance to the beat with fun, feel-good moves that boost your mood.", pt: "Dance no ritmo com movimentos divertidos que elevam seu humor.", es: "Baila al ritmo con movimientos divertidos que mejoran tu ánimo." } },
    { id: "core", title: "Jump Core", img: "class-core-balance.webp", badge: "Core", icon: "target",
      desc: { en: "Focus on core, balance and stability for a stronger you.", pt: "Foque no core, equilíbrio e estabilidade para um corpo mais forte.", es: "Enfócate en core, equilibrio y estabilidad para tu yo más fuerte." } },
  ];

  return (
    <section id="how" style={{ position: "relative", padding: "100px 0", background: "var(--deep-black)",
      borderTop: "1px solid rgba(255,255,255,0.04)", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "25%", width: 300, height: 300, borderRadius: "50%",
        background: "rgba(168,255,0,0.05)", filter: "blur(120px)" }}></div>
      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 56px" }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>{t.eye}</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: "clamp(2.4rem,5.5vw,4.4rem)",
            lineHeight: 0.95, textTransform: "uppercase", transform: "skewX(-6deg)" }}>
            {t.t1}<span style={{ color: "var(--energy-green)" }}>{t.t2}</span></h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", marginTop: 16 }}>
            {t.s1} <span style={{ color: "var(--fg3)" }}>{t.s2}</span></p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20, marginBottom: 40 }}>
          {cards.map((c) => (
            <article key={c.id} style={{ position: "relative", minHeight: 400 }} className="style-card">
              <div className="cham-border" style={{ background: "rgba(255,255,255,0.10)",
                clipPath: "polygon(14px 0%,100% 0%,100% calc(100% - 14px),calc(100% - 14px) 100%,0% 100%,0% 14px)" }}></div>
              <div style={{ position: "absolute", inset: 1, background: "#0A0A0A", display: "flex", flexDirection: "column",
                overflow: "hidden", clipPath: "polygon(14px 0%,100% 0%,100% calc(100% - 14px),calc(100% - 14px) 100%,0% 100%,0% 14px)" }}>
                <div style={{ height: 210, position: "relative", overflow: "hidden" }}>
                  <img src={`assets/${c.img}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,#0A0A0A,transparent 55%,rgba(0,0,0,0.3))" }}></div>
                </div>
                <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ color: "var(--energy-green)" }}><Icon name={c.icon} size={18} /></span>
                      <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 21,
                        textTransform: "uppercase", letterSpacing: "0.02em", transform: "skewX(-3deg)", whiteSpace: "nowrap" }}>{c.title}</h4>
                    </div>
                    <div style={{ width: 40, height: 1.5, background: "rgba(168,255,0,0.5)", borderRadius: 9999, margin: "8px 0 10px" }}></div>
                    <p style={{ fontSize: 12, color: "var(--fg2)", lineHeight: 1.5, maxWidth: 210 }}>{c.desc[lang]}</p>
                  </div>
                  <span style={{ marginTop: 16, display: "inline-block", padding: "5px 12px", background: "rgba(168,255,0,0.10)",
                    fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 10, letterSpacing: "0.2em", color: "var(--energy-green)",
                    textTransform: "uppercase", clipPath: "var(--clip-micro)" }}>{c.badge}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ position: "relative", padding: 4 }}>
          <div className="cham-border" style={{ background: "rgba(255,255,255,0.12)",
            clipPath: "polygon(14px 0%,100% 0%,100% calc(100% - 14px),calc(100% - 14px) 100%,0% 100%,0% 14px)" }}></div>
          <div style={{ position: "absolute", inset: 1, background: "var(--page-black)",
            clipPath: "polygon(14px 0%,100% 0%,100% calc(100% - 14px),calc(100% - 14px) 100%,0% 100%,0% 14px)" }}></div>
          <div style={{ position: "relative", zIndex: 2, display: "flex", flexWrap: "wrap", alignItems: "center",
            justifyContent: "space-between", gap: 20, padding: "22px 26px" }} className="stats-row">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 24, flex: "1 1 560px" }}>
              {[["timer", t.stats[0]], ["bar-chart-3", t.stats[1]], ["users", t.stats[2]], ["activity", t.stats[3]]].map(([ic, s], i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)", paddingLeft: i === 0 ? 0 : 16 }}>
                  <span style={{ color: "var(--energy-green)", flexShrink: 0 }}><Icon name={ic} size={22} /></span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 16, letterSpacing: "0.02em", whiteSpace: "nowrap" }}>{s[0]}</div>
                    <div style={{ fontSize: 10, color: "var(--fg2)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s[1]}</div>
                  </div>
                </div>
              ))}
            </div>
            <JumpButton variant="primary" icon="arrow-right" onClick={onFind}>{t.cta}</JumpButton>
          </div>
        </div>
      </div>
    </section>
  );
}

window.HowItWorks = HowItWorks;
