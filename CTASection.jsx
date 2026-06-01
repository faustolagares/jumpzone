/* CTASection — full energy-green card above the footer. Dark "light-primary" button. */

function LightPrimaryButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="lpbtn">
      <span className="inr">
        <span className="slash">//</span>
        <span className="lbl">{children}</span>
        <span className="ic"><Icon name="arrow-right" size={16} strokeWidth={2.5} /></span>
      </span>
    </button>
  );
}

function CTASection({ lang, onCta }) {
  const t = {
    en: { tag: "Crush Your Limits", t1: "Ready to Join the", t2: "Jump Zone Studio?",
      sub: "Stop waiting to experience Newark's most addictive choreographic workout. Lock in your individual rebounder space today and feel the difference from the very first beat.",
      cta: "Secure My Space" },
    pt: { tag: "Supere Seus Limites", t1: "Pronto Para Entrar Pra", t2: "Jump Zone Studio?",
      sub: "Não espere mais para sentir a energia do treino coreografado mais viciante de Newark. Garanta seu trampolim individual hoje mesmo e sinta a energia desde o primeiro beat.",
      cta: "Garantir Meu Acesso" },
    es: { tag: "Supera Tus Límites", t1: "¿Listo Para La", t2: "Jump Zone?",
      sub: "No esperes más para sentir la energía del entrenamiento coreografiado más adictivo de Newark. Reserva tu trampolín individual hoy y siente la diferencia desde el primer pulso.",
      cta: "Reservar Mi Lugar" },
  }[lang];

  return (
    <section id="cta" style={{ position: "relative", padding: "84px 0", background: "var(--page-black)",
      borderTop: "1px solid rgba(255,255,255,0.04)", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "25%", transform: "translateY(-50%)", width: 350, height: 350,
        borderRadius: "50%", background: "rgba(168,255,0,0.05)", filter: "blur(120px)" }}></div>
      <div style={{ position: "absolute", top: "50%", right: "25%", transform: "translateY(-50%)", width: 350, height: 350,
        borderRadius: "50%", background: "rgba(168,255,0,0.03)", filter: "blur(120px)" }}></div>

      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ position: "relative", maxWidth: 1400, margin: "0 auto", padding: 1, background: "rgba(255,255,255,0.10)",
          clipPath: "polygon(30px 0%,100% 0%,100% calc(100% - 30px),calc(100% - 30px) 100%,0% 100%,0% 30px)" }}>
          <div style={{ position: "relative", background: "var(--energy-green)", color: "#000", overflow: "hidden",
            padding: "92px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
            clipPath: "polygon(30px 0%,100% 0%,100% calc(100% - 30px),calc(100% - 30px) 100%,0% 100%,0% 30px)" }}>
            {/* diagonal stripe texture */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none",
              backgroundImage: "linear-gradient(45deg,rgba(0,0,0,0.15) 25%,transparent 25%,transparent 50%,rgba(0,0,0,0.15) 50%,rgba(0,0,0,0.15) 75%,transparent 75%,transparent)",
              backgroundSize: "40px 40px" }}></div>
            {/* glow orbs */}
            <div style={{ position: "absolute", top: -96, left: -80, width: 400, height: 400, borderRadius: "50%",
              background: "rgba(255,255,255,0.2)", filter: "blur(80px)", pointerEvents: "none" }}></div>
            <div style={{ position: "absolute", bottom: -96, right: -80, width: 400, height: 400, borderRadius: "50%",
              background: "rgba(0,0,0,0.1)", filter: "blur(80px)", pointerEvents: "none" }}></div>

            <div style={{ position: "relative", zIndex: 2, maxWidth: 900, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.25em", fontWeight: 800,
                color: "rgba(0,0,0,0.75)", textTransform: "uppercase" }}>/// {t.tag} ///</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: "clamp(2rem,4vw,3.4rem)",
                lineHeight: 1, letterSpacing: "0.01em", textTransform: "uppercase", transform: "skewX(-6deg)", color: "#000", width: "100%" }}>
                {t.t1}<span style={{ display: "block" }}>{t.t2}</span></h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(0,0,0,0.85)", fontWeight: 600, maxWidth: 620 }}>{t.sub}</p>
              <div style={{ paddingTop: 8, width: "100%", maxWidth: 300 }}>
                <LightPrimaryButton onClick={onCta}>{t.cta}</LightPrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.CTASection = CTASection;
