/* Hero — full-bleed photo, protection gradients, display headline, feature bar */

function Hero({ lang, onBook, onClasses }) {
  const t = {
    en: { badge: "JUMP ZONE STUDIO", l1: "We don't just jump", l2: "we level up.",
      sub: "High-energy trampoline workouts.\nReal results. Strong community.\nUnforgettable experience.",
      book: "Book Your Jump", learn: "View Classes", loc: "Newark, NJ", locSub: "Boutique concert-style fitness temple" },
    pt: { badge: "JUMP ZONE STUDIO", l1: "Não é só pular", l2: "nós subimos de nível.",
      sub: "Treinos de trampolim com muita energia.\nResultados reais. Comunidade forte.\nUma experiência inesquecível.",
      book: "Garantir Meu Acesso", learn: "Ver Aulas", loc: "Newark, NJ", locSub: "Studio boutique estilo show" },
    es: { badge: "JUMP ZONE STUDIO", l1: "No solo saltamos", l2: "subimos de nivel.",
      sub: "Entrenamientos de trampolín llenos de energía.\nResultados reales. Comunidad fuerte.\nUna experiencia inolvidable.",
      book: "Reservar Mi Acceso", learn: "Ver Clases", loc: "Newark, NJ", locSub: "Studio boutique con vibra de concierto" },
  }[lang];

  const feats = {
    en: [["zap", "High Energy", "Cardio, strength & music-driven workouts."],
      ["users", "Strong Community", "Real people. Real support. Real connections."],
      ["flame", "Burn Calories", "Jump higher. Burn more. Feel unstoppable."],
      ["bar-chart-3", "All Levels", "Beginner to advanced. You belong here."]],
    pt: [["zap", "Alta Energia", "Cardio, força e treinos guiados por música."],
      ["users", "Comunidade Forte", "Pessoas reais. Apoio real. Conexões reais."],
      ["flame", "Queima Calorias", "Pule mais alto. Queime mais. Sinta-se invencível."],
      ["bar-chart-3", "Todos os Níveis", "Do iniciante ao avançado. Seu lugar é aqui."]],
    es: [["zap", "Alta Energía", "Cardio, fuerza y entrenamientos con música."],
      ["users", "Comunidad Fuerte", "Personas reales. Apoyo real. Conexiones reales."],
      ["flame", "Quema Calorías", "Salta más alto. Quema más. Siéntete imparable."],
      ["bar-chart-3", "Todos los Niveles", "De principiante a avanzado. Este es tu lugar."]],
  }[lang];

  return (
    <section id="top" style={{ position: "relative", minHeight: "100vh", paddingTop: 120, paddingBottom: 64,
      display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden",
      backgroundImage: `linear-gradient(to right,#050505 0%,#050505 28%,rgba(5,5,5,0.45) 50%,rgba(5,5,5,0.05) 68%,rgba(5,5,5,0.85) 90%,#050505 100%), url("https://imagedelivery.net/O1Es2ZMHV0HF7g71pX5Prg/1d011d00-e9e8-4d0f-7cd3-35886e138100/public")`,
      backgroundSize: "cover", backgroundPosition: "45% center" }}>
      <div style={{ position: "absolute", top: "22%", left: "30%", width: 560, height: 560, borderRadius: "50%",
        background: "rgba(168,255,0,0.04)", filter: "blur(140px)", pointerEvents: "none" }}></div>
      <div style={{ position: "absolute", inset: 0, opacity: 0.025, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle,#A8FF00 1px,transparent 1px)", backgroundSize: "24px 24px" }}></div>

      <div className="shell" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div style={{ maxWidth: 820, display: "flex", flexDirection: "column", gap: 26 }}>
          <span className="rise" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 20,
            letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--energy-green)" }}>{t.badge}</span>
          <h1 className="rise" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic",
            fontSize: "clamp(3.4rem,8vw,7.5rem)", lineHeight: 0.85, letterSpacing: "-0.01em",
            textTransform: "uppercase", transform: "skewX(-3deg)", animationDelay: ".05s" }}>
            {t.l1}<br /><span style={{ color: "var(--energy-green)" }}>{t.l2}</span>
          </h1>
          <div className="rise" style={{ width: 190, height: 3, borderRadius: 9999,
            background: "linear-gradient(to right,var(--energy-green),transparent)", animationDelay: ".1s" }}></div>
          <p className="rise" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 17, lineHeight: 1.6,
            color: "rgba(255,255,255,0.7)", maxWidth: 520, whiteSpace: "pre-line", animationDelay: ".15s" }}>{t.sub}</p>
          <div className="rise" style={{ display: "flex", gap: 16, flexWrap: "wrap", animationDelay: ".2s" }}>
            <JumpButton variant="primary" icon="arrow-right" onClick={onBook}>{t.book}</JumpButton>
            <JumpButton variant="secondary" icon="arrow-right" onClick={onClasses}>{t.learn}</JumpButton>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: 24, marginTop: 80 }} className="hero-bar">
          <div style={{ position: "relative" }}>
            <div className="cham-border" style={{ background: "rgba(255,255,255,0.10)" }}></div>
            <div className="cham-fill" style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(10px)" }}></div>
            <div style={{ position: "relative", zIndex: 2, padding: 28, display: "grid",
              gridTemplateColumns: "repeat(4,1fr)", gap: 28 }} className="feat-grid">
              {feats.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start",
                  borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)", paddingLeft: i === 0 ? 0 : 18 }}>
                  <span style={{ color: "var(--energy-green)", flexShrink: 0 }}><Icon name={f[0]} size={26} strokeWidth={1.8} /></span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, lineHeight: 1.05,
                      letterSpacing: "0.04em", textTransform: "uppercase" }}>{f[1]}</div>
                    <div style={{ fontSize: 11, color: "var(--fg2)", marginTop: 5, lineHeight: 1.4 }}>{f[2]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }} className="loc-card">
            <div className="cham-border" style={{ background: "rgba(255,255,255,0.10)" }}></div>
            <div className="cham-fill" style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(10px)" }}></div>
            <div style={{ position: "relative", zIndex: 2, padding: 28, display: "flex", gap: 14, alignItems: "center", height: "100%" }}>
              <span style={{ color: "var(--energy-green)" }}><Icon name="map-pin" size={26} /></span>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 20,
                  letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--energy-green)" }}>{t.loc}</div>
                <div style={{ fontSize: 11, color: "var(--fg2)", marginTop: 4, lineHeight: 1.4 }}>{t.locSub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
