/* Membership — three pricing tiers, middle one "most popular" with green glow */

function Membership({ lang, onSelect }) {
  const t = {
    en: { eye: "Memberships", pre: "Choose your plan.", hi: "Commit to you.", s1: "Simple memberships. Big results.",
      s2: "Find the plan that fits your lifestyle.", per: "/mo", popular: "Most Popular",
      gTitle: "No contracts, secure booking", gDesc: "Cancel or adjust your recurring tier anytime. Seamless online spot reservation for every workout.",
      limited: "Limited founders discount passes still active", secure: "Secure SSL", flex: "Flexible" },
    pt: { eye: "Planos", pre: "Escolha seu plano.", hi: "Compromisso com você.", s1: "Planos simples. Resultados gigantescos.",
      s2: "Encontre o plano ideal para seu estilo de vida.", per: "/mês", popular: "Mais Popular",
      gTitle: "Sem fidelidade, agendamento seguro", gDesc: "Cancele ou gerencie seu plano quando quiser. Reserve seu trampolim online para cada aula.",
      limited: "Descontos de fundador ativos por tempo limitado", secure: "SSL Seguro", flex: "Flexível" },
    es: { eye: "Membresías", pre: "Elige tu plan.", hi: "Comprométete contigo.", s1: "Membresías simples. Grandes resultados.",
      s2: "Encuentra el plan para tu estilo de vida.", per: "/mes", popular: "Más Popular",
      gTitle: "Sin contratos, reserva segura", gDesc: "Cancela o ajusta tu suscripción recurrente en cualquier momento. Reserva inmediata de tu trampolín.",
      limited: "Pases con descuento de fundador aún activos", secure: "SSL Seguro", flex: "Flexible" },
  }[lang];

  const plans = [
    { id: "starter", icon: "user", price: 79, name: "Starter", popular: false,
      sub: { en: "8 classes / month", pt: "8 aulas / mês", es: "8 clases / mes" },
      feats: { en: ["Access to all class types", "Flexible scheduling", "Jump Zone community"],
        pt: ["Acesso a todas as aulas", "Agendamento flexível", "Comunidade Jump Zone"],
        es: ["Acceso a todas las clases", "Horarios flexibles", "Comunidad Jump Zone"] } },
    { id: "unlimited", icon: "users", price: 129, name: "Unlimited", popular: true,
      sub: { en: "Unlimited classes", pt: "Aulas ilimitadas", es: "Clases ilimitadas" },
      feats: { en: ["Unlimited classes", "Priority booking", "Bring a friend (2×/mo)", "Jump Zone community"],
        pt: ["Aulas ilimitadas", "Agendamento prioritário", "Traga um amigo (2×/mês)", "Comunidade Jump Zone"],
        es: ["Clases ilimitadas", "Reserva prioritaria", "Trae un amigo (2×/mes)", "Comunidad Jump Zone"] } },
    { id: "elite", icon: "star", price: 159, name: "Elite", popular: false,
      sub: { en: "Unlimited + more", pt: "Unlimited + mais", es: "Unlimited + más" },
      feats: { en: ["Unlimited classes", "Priority booking", "Bring a friend (4×/mo)", "Merch discount (20%)", "Exclusive events"],
        pt: ["Aulas ilimitadas", "Agendamento prioritário", "Traga um amigo (4×/mês)", "Desconto em produtos (20%)", "Eventos exclusivos"],
        es: ["Clases ilimitadas", "Reserva prioritaria", "Trae un amigo (4×/mes)", "Descuento en ropa (20%)", "Eventos exclusivos"] } },
  ];
  const choose = (id) => ({ en: "Choose", pt: "Escolher", es: "Elegir" }[lang] + " " + id.toUpperCase());

  return (
    <section id="pricing" style={{ position: "relative", padding: "100px 0", background: "#000",
      borderTop: "1px solid rgba(255,255,255,0.04)", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "20%", width: 450, height: 450, borderRadius: "50%",
        background: "rgba(168,255,0,0.03)", filter: "blur(150px)" }}></div>
      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto 64px", textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>/// {t.eye}</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: "clamp(2.4rem,5.5vw,4.4rem)",
            lineHeight: 0.95, textTransform: "uppercase", transform: "skewX(-6deg)" }}>
            {t.pre} <span style={{ color: "var(--energy-green)" }}>{t.hi}</span></h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", marginTop: 24 }}>
            {t.s1}<br /><span style={{ color: "var(--fg3)" }}>{t.s2}</span></p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 28,
          maxWidth: 1100, margin: "0 auto 64px", alignItems: "center" }}>
          {plans.map((p) => (
            <div key={p.id} style={{ position: "relative", minHeight: p.popular ? 560 : 510,
              boxShadow: p.popular ? "0 0 50px rgba(168,255,0,0.12)" : "none" }} className="plan-card">
              <div className="cham-border" style={{ background: p.popular ? "var(--energy-green)" : "rgba(255,255,255,0.10)",
                clipPath: "polygon(20px 0%,100% 0%,100% calc(100% - 20px),calc(100% - 20px) 100%,0% 100%,0% 20px)" }}></div>
              <div style={{ position: "absolute", inset: 1, background: "var(--deep-black)", padding: "40px 34px",
                display: "flex", flexDirection: "column",
                clipPath: "polygon(20px 0%,100% 0%,100% calc(100% - 20px),calc(100% - 20px) 100%,0% 100%,0% 20px)" }}>
                {p.popular && (
                  <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }}>
                    <span style={{ background: "var(--energy-green)", color: "#000", fontFamily: "var(--font-sans)",
                      fontWeight: 900, fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase",
                      padding: "5px 16px", borderRadius: "0 0 6px 6px" }}>{t.popular}</span>
                  </div>
                )}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, paddingTop: 8 }}>
                  <span style={{ color: "var(--energy-green)" }}><Icon name={p.icon} size={28} strokeWidth={1.5} /></span>
                  <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 12, letterSpacing: "0.2em",
                    color: "var(--fg3)", textTransform: "uppercase" }}>{p.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 60,
                      lineHeight: 1, transform: "skewX(-6deg)" }}>${p.price}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 12,
                      color: "var(--energy-green)", textTransform: "uppercase" }}>{t.per}</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 14, letterSpacing: "0.06em",
                    textTransform: "uppercase" }}>{p.sub[lang]}</div>
                </div>
                <div style={{ width: 40, height: 1.5, background: "rgba(168,255,0,0.25)", borderRadius: 9999, margin: "20px auto" }}></div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, flex: 1, maxWidth: 240,
                  margin: "0 auto", width: "100%" }}>
                  {p.feats[lang].map((f, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ color: "var(--energy-green)", flexShrink: 0, marginTop: 1 }}><Icon name="check" size={15} strokeWidth={2.5} /></span>
                      <span style={{ fontSize: 13, color: "var(--fg2)", lineHeight: 1.3 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 24 }}>
                  <JumpButton variant={p.popular ? "primary" : "secondary"} icon="arrow-right" full onClick={() => onSelect(p)}>{choose(p.id)}</JumpButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ position: "relative", maxWidth: 960, margin: "0 auto" }}>
          <div className="cham-border" style={{ background: "rgba(255,255,255,0.06)" }}></div>
          <div className="cham-fill" style={{ background: "var(--deep-black)" }}></div>
          <div style={{ position: "relative", zIndex: 2, padding: 30, display: "flex", flexWrap: "wrap", gap: 24,
            alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ flex: "1 1 480px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontWeight: 900,
                fontSize: 10, letterSpacing: "0.14em", color: "var(--energy-green)", textTransform: "uppercase", marginBottom: 8 }}>
                <Icon name="alert-triangle" size={14} /> {t.limited}</span>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 22,
                textTransform: "uppercase", lineHeight: 1, marginBottom: 8 }}>{t.gTitle}</h4>
              <p style={{ fontSize: 13, color: "var(--fg3)", lineHeight: 1.5 }}>{t.gDesc}</p>
            </div>
            <div style={{ display: "flex", gap: 18, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg3)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 7 }}><span className="pdot"></span>{t.secure}</span>
              <span style={{ display: "flex", alignItems: "center", gap: 7 }}><span className="pdot"></span>{t.flex}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Membership = Membership;
