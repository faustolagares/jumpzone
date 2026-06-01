/* CheckoutModal — booking flow: pick a trampoline spot → form → success ticket.
   Drawer slides up; chamfered panel; trampoline seat map. */

function CheckoutModal({ lang, context, onClose }) {
  const t = {
    en: { title: "Secure your zone trampoline", sub: "Choose your rebound spot. The layout faces the main stage.",
      name: "Your Full Name", email: "Email Address", phone: "Phone Number", pick: "Select your trampoline:",
      booked: "Booked", yours: "Your Spot", ready: "Ready", confirm: "Confirm Reservation", cancel: "Cancel",
      sTitle: "You are locked in!", sText: "Your reservation is confirmed. A digital ticket has been issued to your email and phone.",
      ticket: "Trampoline Ticket #", close: "Close Ticket" },
    pt: { title: "Garanta seu trampolim", sub: "Escolha seu trampolim de frente para o palco.",
      name: "Nome Completo", email: "E-mail", phone: "Celular", pick: "Selecione seu trampolim:",
      booked: "Reservado", yours: "Seu Lugar", ready: "Livre", confirm: "Confirmar Reserva", cancel: "Cancelar",
      sTitle: "Sua reserva está confirmada!", sText: "Sua reserva foi confirmada. Enviaremos seu ingresso por e-mail e SMS.",
      ticket: "Ingresso Trampolim #", close: "Fechar Ingresso" },
    es: { title: "Asegura tu trampolín", sub: "Elige tu posición de rebote. La sala mira al escenario principal.",
      name: "Tu Nombre Completo", email: "Correo", phone: "Teléfono", pick: "Selecciona tu trampolín:",
      booked: "Ocupado", yours: "Tu Spot", ready: "Libre", confirm: "Confirmar Reserva", cancel: "Cancelar",
      sTitle: "¡Estás dentro!", sText: "Tu reserva fue confirmada. Enviaremos tu ticket por correo y SMS.",
      ticket: "Ticket Trampolín #", close: "Cerrar Ticket" },
  }[lang];

  const occupied = [2, 5, 8, 11, 14, 19];
  const [spot, setSpot] = React.useState(null);
  const [done, setDone] = React.useState(false);
  const [ticket] = React.useState(() => "JZ-" + Math.floor(1000 + Math.random() * 9000));

  const field = (ph) => (
    <div style={{ position: "relative" }}>
      <span style={{ position: "absolute", inset: 0, clipPath: "var(--clip-apex)", background: "rgba(255,255,255,0.10)" }}></span>
      <span style={{ position: "absolute", inset: 1, clipPath: "var(--clip-apex)", background: "#0E0E0E" }}></span>
      <input placeholder={ph} style={{ position: "relative", zIndex: 2, width: "100%", background: "transparent",
        border: 0, outline: 0, padding: "13px 16px", color: "#fff", fontFamily: "var(--font-sans)", fontSize: 14 }} />
    </div>
  );

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.72)",
      backdropFilter: "blur(6px)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} className="sheet-in" style={{ position: "relative", width: "100%",
        maxWidth: 560, maxHeight: "92vh", overflowY: "auto" }}>
        <div className="cham-border" style={{ background: "rgba(168,255,0,0.4)" }}></div>
        <div className="cham-fill" style={{ background: "var(--deep-black)" }}></div>
        <div style={{ position: "relative", zIndex: 2, padding: 30 }}>
          {!done ? (
            <React.Fragment>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 6 }}>
                <div>
                  <p className="eyebrow" style={{ fontSize: 11, marginBottom: 8 }}>/// Booking</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 28,
                    textTransform: "uppercase", lineHeight: 0.95 }}>{t.title}</h3>
                </div>
                <IconButton name="x" onClick={onClose} ariaLabel="Close" />
              </div>
              {context && context.name && (
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--energy-green)", marginBottom: 8 }}>
                  {context.name[lang] || context.name.en || context.name}{context.price ? ` · $${context.price}` : ""}</div>
              )}
              <p style={{ fontSize: 13, color: "var(--fg3)", marginBottom: 22, lineHeight: 1.5 }}>{t.sub}</p>

              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                color: "var(--fg2)", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <Icon name="map-pin" size={13} color="var(--energy-green)" /> {t.pick}</div>
              <div style={{ background: "linear-gradient(180deg,rgba(168,255,0,0.06),transparent)", border: "1px solid rgba(255,255,255,0.06)",
                padding: 18, marginBottom: 14 }}>
                <div style={{ textAlign: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic",
                  fontSize: 14, letterSpacing: "0.3em", color: "var(--energy-green)", textTransform: "uppercase", marginBottom: 16 }}>◤ Stage ◢</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 8 }}>
                  {Array.from({ length: 21 }).map((_, i) => {
                    const isOcc = occupied.includes(i);
                    const isSel = spot === i;
                    return (
                      <button key={i} disabled={isOcc} onClick={() => setSpot(i)}
                        style={{ aspectRatio: "1", borderRadius: "50%", cursor: isOcc ? "not-allowed" : "pointer",
                          border: isSel ? "2px solid #000" : "1px solid rgba(255,255,255,0.12)",
                          background: isOcc ? "rgba(255,255,255,0.05)" : isSel ? "var(--energy-green)" : "rgba(168,255,0,0.12)",
                          boxShadow: isSel ? "var(--shadow-glow-sm)" : "none", transition: "all .15s",
                          opacity: isOcc ? 0.35 : 1 }} aria-label={`Spot ${i + 1}`}></button>
                    );
                  })}
                </div>
                <div style={{ display: "flex", gap: 18, justifyContent: "center", marginTop: 16, fontFamily: "var(--font-mono)",
                  fontSize: 10, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--fg3)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}><i style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(168,255,0,0.12)", display: "inline-block" }}></i>{t.ready}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}><i style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--energy-green)", display: "inline-block" }}></i>{t.yours}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}><i style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "inline-block" }}></i>{t.booked}</span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 22 }}>
                {field(t.name)}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>{field(t.email)}{field(t.phone)}</div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <JumpButton variant="primary" icon="check" full onClick={() => setDone(true)}>{t.confirm}</JumpButton>
              </div>
            </React.Fragment>
          ) : (
            <div style={{ textAlign: "center", padding: "20px 10px" }}>
              <div style={{ width: 64, height: 64, margin: "0 auto 22px", borderRadius: "50%", background: "var(--energy-green)",
                display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-glow-md)" }}>
                <Icon name="check" size={32} strokeWidth={3} color="#0A0A0A" /></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 32,
                textTransform: "uppercase", marginBottom: 12 }}>{t.sTitle}</h3>
              <p style={{ fontSize: 14, color: "var(--fg2)", lineHeight: 1.6, maxWidth: 380, margin: "0 auto 26px" }}>{t.sText}</p>
              <div style={{ position: "relative", maxWidth: 320, margin: "0 auto 26px" }}>
                <div className="cham-border" style={{ background: "rgba(255,255,255,0.10)" }}></div>
                <div className="cham-fill" style={{ background: "#0E0E0E" }}></div>
                <div style={{ position: "relative", zIndex: 2, padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fg3)" }}>{t.ticket}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 24, color: "var(--energy-green)" }}>{ticket}</span>
                </div>
              </div>
              <JumpButton variant="secondary" icon="arrow-right" onClick={onClose}>{t.close}</JumpButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

window.CheckoutModal = CheckoutModal;
