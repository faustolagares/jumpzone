/* Navbar — fixed, shrinks + goes solid on scroll */

function Navbar({ lang, setLang, onBook, onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const root = document.querySelector(".kit-scroll") || window;
    const onScroll = () => {
      const y = root === window ? window.scrollY : root.scrollTop;
      setScrolled(y > 20);
    };
    root.addEventListener("scroll", onScroll);
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { label: { en: "Classes", pt: "Aulas", es: "Clases" }, id: "how" },
    { label: { en: "Schedule", pt: "Horários", es: "Horarios" }, id: "schedule" },
    { label: { en: "Pricing", pt: "Preços", es: "Precios" }, id: "pricing" },
    { label: { en: "The Studio", pt: "O Estúdio", es: "El Estudio" }, id: "ourstudio" },
    { label: { en: "Contact", pt: "Contato", es: "Contacto" }, id: "footer" },
  ];
  const book = { en: "BOOK NOW", pt: "AGENDAR JUMP", es: "RESERVAR JUMP" }[lang];

  return (
    <nav style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all .3s", background: scrolled ? "#000" : "transparent",
      borderBottom: scrolled ? "1px solid #000" : "1px solid transparent",
      padding: scrolled ? "6px 0" : "14px 0" }}>
      <div className="shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        height: scrolled ? 48 : 64, transition: "height .3s" }}>
        <img src="../../assets/logo-jumpzone.png" alt="Jump Zone Studio"
          onClick={() => onNav("top")}
          style={{ height: scrolled ? 52 : 76, width: "auto", cursor: "pointer", transition: "height .3s",
            filter: "drop-shadow(0 0 14px rgba(168,255,0,0.18))" }} />

        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {items.map((it) => (
            <button key={it.id} onClick={() => onNav(it.id)}
              style={{ background: "none", border: 0, cursor: "pointer", fontFamily: "var(--font-sans)",
                fontWeight: 900, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em",
                color: "var(--fg2)", transition: "color .15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg2)")}>
              {it.label[lang]}
            </button>
          ))}
        </div>

        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LangToggle value={lang} onChange={setLang} />
          <HeaderButton onClick={onBook}>{book}</HeaderButton>
        </div>

        <div className="nav-mobile" style={{ display: "none", alignItems: "center", gap: 12 }}>
          <LangToggle value={lang} onChange={setLang} />
          <IconButton name={open ? "x" : "menu"} onClick={() => setOpen(!open)} ariaLabel="Menu" />
        </div>
      </div>

      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 60, background: "var(--deep-black)",
          display: "flex", flexDirection: "column" }}>
          <div className="shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px" }}>
            <img src="../../assets/logo-jumpzone.png" alt="" style={{ height: 48 }} />
            <IconButton name="x" onClick={() => setOpen(false)} ariaLabel="Close" />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
            {items.map((it) => (
              <button key={it.id} onClick={() => { setOpen(false); onNav(it.id); }}
                style={{ background: "none", border: 0, cursor: "pointer", fontFamily: "var(--font-display)",
                  fontWeight: 800, fontStyle: "italic", fontSize: 44, textTransform: "uppercase",
                  letterSpacing: "-0.01em", color: "#fff", padding: "10px 0" }}>
                {it.label[lang]}
              </button>
            ))}
          </div>
          <div style={{ padding: "24px", paddingBottom: 40 }}>
            <JumpButton variant="primary" icon="arrow-right" full onClick={() => { setOpen(false); onBook(); }}>{book}</JumpButton>
          </div>
        </div>
      )}
    </nav>
  );
}

window.Navbar = Navbar;
