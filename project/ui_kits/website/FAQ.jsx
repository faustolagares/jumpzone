/* FAQ — accordion of the 4 brand Q&As */

function FAQ({ lang }) {
  const head = {
    en: { eye: "FAQ", t1: "Questions", t2: " Corner.", sub: "We are beginner-friendly, joint-friendly, and here to clear all doubts." },
    pt: { eye: "Dúvidas", t1: "Perguntas", t2: " Frequentes.", sub: "Ideal para iniciantes, gentil com as articulações e focado no seu progresso. Esclareça suas dúvidas." },
    es: { eye: "Preguntas", t1: "Preguntas", t2: " Frecuentes.", sub: "Apto para todos los niveles, suave con articulaciones, estamos aquí para aclarar tus dudas." },
  }[lang];

  const faqs = [
    { q: { en: "Is trampoline fitness suitable for beginners?", pt: "O fitness no trampolim é indicado para iniciantes?", es: "¿El fitness en trampolín es apto para principiantes?" },
      a: { en: "Absolutely! Rebound fitness is highly adjustable. You control the height of your bounce and the speed of your movements. Our 'Intro to Rebound Method' session is explicitly configured to introduce newcomers safely to the basics.",
        pt: "Com certeza! O Rebounding é fantástico porque é adaptável. Você controla a força com que empurra a lona e a velocidade dos passos. Nossa aula 'Intro Rebound Method' foi desenvolvida exatamente para ensinar o passo a passo com total segurança.",
        es: "¡Totalmente! El rebound es muy ajustable. Tú controlas la altura de tu rebote y la velocidad del movimiento. Nuestra clase 'Introducción al Rebound' está diseñada exactamente para enseñar lo básico sin ninguna presión." } },
    { q: { en: "How are trampolines safer for joints than running?", pt: "Por que o trampolim é mais seguro para as articulações do que a corrida?", es: "¿Por qué los trampolines son más seguros para las articulaciones que correr?" },
      a: { en: "Standard running exerts hard impact shocks directly to your ankles, knees, and lumbar spine. The premium bungee-cord suspensions on our individualized trampolines absorb over 80% of gravitational impact while returning energy, protecting joints while boosting lymph flow.",
        pt: "A corrida comum descarrega todo o impacto na coluna, joelhos e tornozelos. As cordas elásticas de alta elasticidade dos nossos trampolins profissionais absorvem mais de 80% do choque gravitacional, devolvendo a energia na subida. Você treina pesado sem machucar os joelhos!",
        es: "Correr en asfalto ejerce impactos duros sobre tobillos, rodillas y columna. Las suspensiones de cuerdas elásticas premium de nuestros trampolines absorben más del 80% del impacto por gravedad, protegiendo tus articulaciones y estimulando el sistema linfático." } },
    { q: { en: "What should I wear to my first session?", pt: "O que devo usar na minha primeira aula?", es: "¿Qué debo usar para mi primera sesión?" },
      a: { en: "Wear athletic sports clothes that allow free posture extensions. Clean studio sneakers or cross-training shoes with solid grip are mandatory for safety. Don't forget a water bottle — it gets very high energy!",
        pt: "Use roupas esportivas confortáveis e respiráveis para movimento livre. Tênis de treino bem limpos e de boa aderência são obrigatórios para a segurança na lona. Traga sua garrafa de água — o treino é intenso e suado!",
        es: "Usa ropa deportiva cómoda que permita flexibilidad de movimiento. Tenis deportivos limpios con buen agarre son obligatorios por seguridad. No olvides tu botella de agua, ¡la energía sube muy rápido!" } },
    { q: { en: "Where is Jump Zone Studio located in Newark?", pt: "Onde a Jump Zone fica localizada em Newark?", es: "¿Dónde se encuentra Jump Zone en Newark?" },
      a: { en: "We are located in the heart of Newark, New Jersey's boutique district near Mulberry Commons. Our studio features premium dark aesthetic interiors, energetic high-fidelity audio mapping, and spacious private amenities.",
        pt: "Estamos localizados no coração da região central de Newark, New Jersey, próximo ao Mulberry Commons. Nosso estúdio possui design club-style escuro premium, som de alta fidelidade e infraestrutura de alta linha.",
        es: "Estamos ubicados en el corazón del distrito boutique de Newark, Nueva Jersey, cerca de Mulberry Commons. Nuestro estudio tiene interiores oscuros prémium, audio de alta definición y amplias comodidades privadas." } },
  ];

  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" style={{ position: "relative", padding: "100px 0", background: "var(--page-black)",
      borderTop: "1px solid rgba(255,255,255,0.04)", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 500, height: 500,
        borderRadius: "50%", background: "rgba(168,255,0,0.025)", filter: "blur(140px)" }}></div>
      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>/// {head.eye} ///</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: "clamp(2.4rem,5.5vw,4.4rem)",
            lineHeight: 0.95, textTransform: "uppercase", transform: "skewX(-6deg)" }}>
            {head.t1}<span style={{ color: "var(--energy-green)" }}>{head.t2}</span></h2>
          <p style={{ fontSize: 15, color: "var(--fg2)", marginTop: 14, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>{head.sub}</p>
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ position: "relative" }}>
                <div className="cham-border" style={{ background: isOpen ? "var(--energy-green)" : "rgba(255,255,255,0.10)",
                  clipPath: "polygon(14px 0%,100% 0%,100% calc(100% - 14px),calc(100% - 14px) 100%,0% 100%,0% 14px)",
                  boxShadow: isOpen ? "0 0 25px rgba(168,255,0,0.08)" : "none", transition: "background .2s" }}></div>
                <div style={{ position: "absolute", inset: 1, background: isOpen ? "#08080a" : "var(--deep-black)",
                  clipPath: "polygon(14px 0%,100% 0%,100% calc(100% - 14px),calc(100% - 14px) 100%,0% 100%,0% 14px)" }}></div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: "100%", background: "none", border: 0,
                    cursor: "pointer", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, textAlign: "left" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ color: isOpen ? "var(--energy-green)" : "var(--fg2)", flexShrink: 0 }}><Icon name="help-circle" size={16} /></span>
                      <span style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 15, textTransform: "uppercase",
                        letterSpacing: "0.02em", color: isOpen ? "var(--energy-green)" : "#fff" }}>{f.q[lang]}</span>
                    </span>
                    <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center",
                      justifyContent: "center", border: isOpen ? "1px solid var(--energy-green)" : "1px solid rgba(255,255,255,0.1)",
                      background: isOpen ? "rgba(168,255,0,0.1)" : "transparent", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .3s" }}>
                      <Icon name="chevron-down" size={15} color={isOpen ? "var(--energy-green)" : "var(--fg3)"} /></span>
                  </button>
                  <div style={{ maxHeight: isOpen ? 320 : 0, overflow: "hidden", transition: "max-height .3s var(--ease-out-strong)" }}>
                    <div style={{ padding: "2px 24px 24px 54px", fontSize: 14, color: "var(--fg2)", lineHeight: 1.6,
                      borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 16 }}>{f.a[lang]}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
