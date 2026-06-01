/* Benefits — "More Than a Workout. Real Benefits." 6 icon benefits + CTA banner */

function Benefits({ lang, onJoin }) {
  const t = {
    en: { eye: "Benefits", t1: "More Than a Workout.", t2: " Real Benefits.", sub: "Move better. Feel stronger. Live brighter.",
      bTitle: "One Jump. Countless Benefits.", bSub: "Join a class and feel the difference for yourself.", cta: "Join Jump Zone",
      items: [["flame", "Burn Calories", "High-energy workouts that burn more calories in less time."],
        ["heart", "Improve Cardio", "Boost your heart health and endurance with every jump."],
        ["zap", "Tone & Strengthen", "Build lean muscle and improve overall strength with low-impact moves."],
        ["compass", "Better Balance", "Enhance coordination, balance, and body awareness."],
        ["smile", "Boost Mood", "Release stress, increase energy, and leave feeling amazing."],
        ["users", "Strong Community", "Real people. Real support. A community that lifts you up."]] },
    pt: { eye: "Benefícios", t1: "Mais Que Um Treino.", t2: " Benefícios Reais.", sub: "Mova-se melhor. Sinta-se mais forte. Viva com mais energia.",
      bTitle: "Um Salto. Inúmeros Benefícios.", bSub: "Participe de uma aula e sinta a diferença você mesmo.", cta: "Entrar na Zona",
      items: [["flame", "Queima Calorias", "Treinos de alta energia que queimam mais calorias em menos tempo."],
        ["heart", "Melhora o Cardio", "Melhore a saúde do coração e a resistência a cada salto."],
        ["zap", "Tonifica e Fortalece", "Construa músculos magros e ganhe força com movimentos de baixo impacto."],
        ["compass", "Mais Equilíbrio", "Aprimore coordenação, equilíbrio e consciência corporal."],
        ["smile", "Eleva o Humor", "Libere o estresse, aumente a energia e saia se sentindo incrível."],
        ["users", "Comunidade Forte", "Pessoas reais. Apoio real. Uma comunidade que te levanta."]] },
    es: { eye: "Beneficios", t1: "Más Que Un Entrenamiento.", t2: " Beneficios Reales.", sub: "Muévete mejor. Siéntete más fuerte. Vive con más energía.",
      bTitle: "Un Salto. Innumerables Beneficios.", bSub: "Únete a una clase y siente la diferencia por ti mismo.", cta: "Únete a la Zona",
      items: [["flame", "Quema Calorías", "Entrenamientos de alta energía que queman más calorías en menos tiempo."],
        ["heart", "Mejora el Cardio", "Mejora tu salud cardiovascular y resistencia con cada salto."],
        ["zap", "Tonifica y Fortalece", "Construye músculo magro y gana fuerza con movimientos de bajo impacto."],
        ["compass", "Mejor Equilibrio", "Mejora la coordinación, el equilibrio y la conciencia corporal."],
        ["smile", "Sube el Ánimo", "Libera el estrés, aumenta la energía y sal sintiéndote increíble."],
        ["users", "Comunidad Fuerte", "Gente real. Apoyo real. Una comunidad que te impulsa."]] },
  }[lang];

  return (
    <section id="benefits" style={{ position: "relative", padding: "100px 0", background: "var(--deep-black)",
      borderTop: "1px solid rgba(255,255,255,0.04)", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 0, right: "20%", width: 360, height: 360, borderRadius: "50%",
        background: "rgba(168,255,0,0.04)", filter: "blur(140px)" }}></div>
      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", maxWidth: 1080, margin: "0 auto 56px" }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>/// {t.eye} ///</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: "clamp(2.4rem,5.5vw,4.4rem)",
            lineHeight: 0.95, textTransform: "uppercase", transform: "skewX(-6deg)" }}>
            {t.t1}<span style={{ color: "var(--energy-green)" }}>{t.t2}</span></h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginTop: 24 }}>{t.sub}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 36, marginBottom: 48 }} className="benefits-grid">
          {t.items.map((it, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14 }}>
              <span style={{ color: "var(--energy-green)", filter: "drop-shadow(0 0 8px rgba(168,255,0,0.35))" }}>
                <Icon name={it[0]} size={40} strokeWidth={1.6} /></span>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 18,
                textTransform: "uppercase", letterSpacing: "0.03em", transform: "skewX(-3deg)" }}>{it[1]}</h4>
              <div style={{ width: 28, height: 2, background: "var(--energy-green)", borderRadius: 9999, opacity: 0.6 }}></div>
              <p style={{ fontSize: 13, color: "var(--fg2)", lineHeight: 1.5, maxWidth: 200 }}>{it[2]}</p>
            </div>
          ))}
        </div>

        <div style={{ position: "relative" }}>
          <div className="cham-border" style={{ background: "rgba(255,255,255,0.12)" }}></div>
          <div className="cham-fill" style={{ background: "var(--page-black)" }}></div>
          <div style={{ position: "relative", zIndex: 2, display: "flex", flexWrap: "wrap", alignItems: "center",
            justifyContent: "space-between", gap: 22, padding: "22px 28px" }} className="benefits-banner">
            <div style={{ display: "flex", alignItems: "center", gap: 18, flex: "1 1 420px" }}>
              <span style={{ width: 44, height: 44, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(168,255,0,0.10)", color: "var(--energy-green)", clipPath: "var(--clip-micro)" }}>
                <Icon name="zap" size={22} /></span>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 22,
                  textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1 }}>{t.bTitle}</h4>
                <p style={{ fontSize: 13, color: "var(--fg2)" }}>{t.bSub}</p>
              </div>
            </div>
            <JumpButton variant="primary" icon="arrow-right" onClick={onJoin}>{t.cta}</JumpButton>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Benefits = Benefits;
