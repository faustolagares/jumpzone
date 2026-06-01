/* ScheduleSection — weekly grid with hover-to-book cells. Darker background. */

function ScheduleSection({ lang, onBook }) {
  const t = {
    en: { eye: "Schedule", t1: "Find Your", t2: "Time to Jump.",
      sub: "Classes all week long. Morning, midday and evening options to fit your routine.",
      feats: [["calendar-days", "7 Days a Week", "Classes every day to fit your lifestyle."],
        ["clock", "Flexible Times", "Morning, midday and evening options."],
        ["users", "All Levels Welcome", "Beginner to advanced. You belong here."]],
      cta: "View Full Schedule", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], timeDay: "Time / Day",
      hint: "Spots available! Click to secure your trampoline.", book: "Click class to book",
      bTitle: "50 Minute Classes", bSub: "Each class is 50 minutes of high-energy, low-impact exercise.",
      note1: "Schedules change.", note2: "Check the full schedule for the latest updates." },
    pt: { eye: "Horários", t1: "Encontre Seu", t2: "Tempo de Pular.",
      sub: "Aulas a semana toda. Opções de manhã, meio-dia e noite para a sua rotina.",
      feats: [["calendar-days", "7 Dias por Semana", "Aulas todo dia para o seu estilo de vida."],
        ["clock", "Horários Flexíveis", "Opções de manhã, meio-dia e noite."],
        ["users", "Todos os Níveis", "Do iniciante ao avançado. Seu lugar é aqui."]],
      cta: "Ver Horário Completo", days: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"], timeDay: "Hora / Dia",
      hint: "Vagas disponíveis! Clique para garantir seu trampolim.", book: "Clique na aula para agendar",
      bTitle: "Aulas de 50 Minutos", bSub: "Cada aula tem 50 minutos de treino intenso e baixo impacto.",
      note1: "Os horários mudam.", note2: "Confira o horário completo para as atualizações." },
    es: { eye: "Horarios", t1: "Encuentra Tu", t2: "Hora de Saltar.",
      sub: "Clases toda la semana. Opciones de mañana, mediodía y noche para tu rutina.",
      feats: [["calendar-days", "7 Días a la Semana", "Clases cada día para tu estilo de vida."],
        ["clock", "Horarios Flexibles", "Opciones de mañana, mediodía y noche."],
        ["users", "Todos los Niveles", "De principiante a avanzado. Este es tu lugar."]],
      cta: "Ver Horario Completo", days: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"], timeDay: "Hora / Día",
      hint: "¡Lugares disponibles! Haz clic para asegurar tu trampolín.", book: "Haz clic en la clase para reservar",
      bTitle: "Clases de 50 Minutos", bSub: "Cada clase es de 50 minutos de ejercicio intenso y bajo impacto.",
      note1: "Los horarios cambian.", note2: "Consulta el horario completo para las últimas novedades." },
  }[lang];

  // rows: [time, [mon..sun]] — null = empty
  const F = "Jump Fit", T = "Jump Tone", C = "Jump Core", H = "Jump HIIT", D = "Jump Dance", S = "Strong Jump";
  const rows = [
    ["6:30 AM", [F, null, F, null, F, null, null]],
    ["9:30 AM", [null, T, null, T, null, F, null]],
    ["12:00 PM", [C, null, C, null, C, null, null]],
    ["5:30 PM", [H, H, H, H, H, null, null]],
    ["6:30 PM", [D, null, D, null, D, null, null]],
    ["7:30 PM", [null, S, null, S, null, S, null]],
  ];

  const [hover, setHover] = React.useState(null);

  const Cell = ({ cls, rk, ck }) => {
    if (!cls) return <div style={{ ...cellBase, color: "var(--fg3)", textAlign: "center" }}>—</div>;
    const key = rk + "-" + ck;
    const on = hover === key;
    return (
      <div onMouseEnter={() => setHover(key)} onMouseLeave={() => setHover(null)} onClick={() => onBook({ name: cls })}
        title={`${t.book}: ${cls.toUpperCase()}`}
        style={{ ...cellBase, cursor: "pointer", textAlign: "center", transition: "background .15s",
          background: on ? "rgba(168,255,0,0.10)" : "transparent",
          boxShadow: on ? "inset 0 0 0 1px var(--energy-green)" : "none" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 15,
          letterSpacing: "0.02em", textTransform: "uppercase", color: on ? "#fff" : "var(--energy-green)" }}>{cls}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase",
          color: "var(--energy-green)", marginTop: 4, maxHeight: on ? 24 : 0, opacity: on ? 1 : 0,
          overflow: "hidden", transition: "all .18s" }}>{t.book}</div>
      </div>
    );
  };

  return (
    <section id="schedule" style={{ position: "relative", padding: "100px 0", background: "#000",
      borderTop: "1px solid rgba(255,255,255,0.04)", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "40%", left: "8%", width: 320, height: 320, borderRadius: "50%",
        background: "rgba(168,255,0,0.035)", filter: "blur(150px)" }}></div>
      <div className="shell" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 48, alignItems: "start" }} className="sched-grid">
          {/* LEFT */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <p className="eyebrow">/// {t.eye} ///</p>
              <span style={{ flex: 1, height: 1, background: "linear-gradient(to right,rgba(168,255,0,0.4),transparent)" }}></span>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: "clamp(2.2rem,4.5vw,3.6rem)",
              lineHeight: 0.92, textTransform: "uppercase", transform: "skewX(-5deg)", marginBottom: 20 }}>
              {t.t1}<br /><span style={{ color: "var(--energy-green)" }}>{t.t2}</span></h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", maxWidth: 380, marginBottom: 28 }}>{t.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 32, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24 }}>
              {t.feats.map(([ic, ti, de], i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--energy-green)", flexShrink: 0, marginTop: 2 }}><Icon name={ic} size={18} /></span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 16,
                      textTransform: "uppercase", letterSpacing: "0.03em" }}>{ti}</div>
                    <div style={{ fontSize: 12.5, color: "var(--fg2)", marginTop: 3 }}>{de}</div>
                  </div>
                </div>
              ))}
            </div>
            <JumpButton variant="primary" icon="arrow-right" onClick={() => onBook()}>{t.cta}</JumpButton>
          </div>

          {/* RIGHT — schedule grid */}
          <div>
            <div style={{ position: "relative" }}>
              <div className="cham-border" style={{ background: "rgba(255,255,255,0.10)" }}></div>
              <div className="cham-fill" style={{ background: "#070707" }}></div>
              <div style={{ position: "relative", zIndex: 2, overflowX: "auto" }}>
                <div style={{ minWidth: 720 }}>
                  {/* header */}
                  <div style={{ display: "grid", gridTemplateColumns: "1.1fr repeat(7,1fr)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ ...headCell, color: "var(--fg3)" }}>{t.timeDay}</div>
                    {t.days.map((d) => (
                      <div key={d} style={{ ...headCell, color: "var(--fg2)", textAlign: "center" }}>{d}</div>
                    ))}
                  </div>
                  {/* rows */}
                  {rows.map(([time, cells], ri) => (
                    <div key={time} style={{ display: "grid", gridTemplateColumns: "1.1fr repeat(7,1fr)",
                      borderBottom: ri === rows.length - 1 ? "none" : "1px solid rgba(255,255,255,0.05)" }}>
                      <div style={{ ...cellBase, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg2)",
                        letterSpacing: "0.04em", display: "flex", alignItems: "center" }}>{time}</div>
                      {cells.map((cls, ci) => (
                        <div key={ci} style={{ borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
                          <Cell cls={cls} rk={ri} ck={ci} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8, marginTop: 16,
              fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--energy-green)" }}>
              <Icon name="flame" size={15} /> {t.hint}
            </div>
          </div>
        </div>

        {/* bottom banner */}
        <div style={{ position: "relative", marginTop: 40 }}>
          <div className="cham-border" style={{ background: "rgba(255,255,255,0.10)" }}></div>
          <div className="cham-fill" style={{ background: "#070707" }}></div>
          <div style={{ position: "relative", zIndex: 2, display: "flex", flexWrap: "wrap", alignItems: "center",
            gap: 24, padding: "22px 28px" }} className="sched-banner">
            <div style={{ display: "flex", alignItems: "center", gap: 16, flex: "1 1 360px" }}>
              <span style={{ color: "var(--energy-green)", flexShrink: 0 }}><Icon name="clock" size={26} /></span>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 18,
                  textTransform: "uppercase", letterSpacing: "0.03em" }}>{t.bTitle}</div>
                <div style={{ fontSize: 13, color: "var(--fg2)", marginTop: 3 }}>{t.bSub}</div>
              </div>
            </div>
            <span style={{ width: 1, height: 36, background: "rgba(255,255,255,0.10)" }} className="ban-div"></span>
            <div style={{ display: "flex", alignItems: "center", gap: 14, flex: "1 1 300px", justifyContent: "flex-end" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 15,
                textTransform: "uppercase", letterSpacing: "0.02em", textAlign: "right", lineHeight: 1.2 }}>
                {t.note1} <span style={{ color: "var(--energy-green)" }}>{t.note2}</span></p>
              <span style={{ color: "var(--energy-green)", flexShrink: 0 }}><Icon name="calendar-days" size={26} /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const cellBase = { padding: "18px 10px" };
const headCell = { padding: "16px 12px", fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic",
  fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase" };

window.ScheduleSection = ScheduleSection;
