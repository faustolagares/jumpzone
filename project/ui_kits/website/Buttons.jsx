/* Jump Zone Studio — button components (cosmetic recreations of Buttons.tsx) */

function JumpButton({ children, variant = "primary", icon = "chevron-right", showIcon = true, showSlashes = true, full = false, onClick, style }) {
  const cls = `jbtn jbtn-${variant}${full ? " full" : ""}`;
  return (
    <button className={cls} onClick={onClick} style={style}>
      {variant === "secondary" && <><span className="brd"></span><span className="fil"></span></>}
      <span className="inr">
        {showSlashes && <span className="slash">//</span>}
        <span className="lbl">{children}</span>
        {showIcon && <span className="ic"><Icon name={icon} size={16} strokeWidth={variant === "primary" ? 3 : 2.5} /></span>}
      </span>
    </button>
  );
}

function HeaderButton({ children, onClick }) {
  return <button className="hbtn" onClick={onClick}>{children}</button>;
}

function IconButton({ name, variant = "dark", onClick, size = 18, ariaLabel }) {
  if (variant === "green") {
    return (
      <button className="icbtn" onClick={onClick} aria-label={ariaLabel}
        style={{ clipPath: "var(--clip-micro)", background: "var(--energy-green)" }}>
        <span className="ic" style={{ color: "#0A0A0A" }}><Icon name={name} size={size} /></span>
      </button>
    );
  }
  return (
    <button className="icbtn" onClick={onClick} aria-label={ariaLabel}>
      <span className="brd"></span><span className="fil"></span>
      <span className="ic"><Icon name={name} size={size} /></span>
    </button>
  );
}

function SocialButton({ slug, ariaLabel, onClick }) {
  return (
    <button className="icbtn" onClick={onClick} aria-label={ariaLabel}>
      <span className="brd"></span><span className="fil"></span>
      <span className="ic" style={{ zIndex: 2 }}>
        <img src={`https://cdn.simpleicons.org/${slug}/888888`} alt="" width="17" height="17"
          style={{ display: "block", transition: "filter .15s" }} />
      </span>
    </button>
  );
}

function LangToggle({ value, onChange }) {const langs = [["en", "EN"], ["pt", "PT"], ["es", "ES"]];
  return (
    <div className="lang">
      <span className="gl"><Icon name="globe" size={14} /></span>
      {langs.map(([code, label]) => (
        <button key={code} className={value === code ? "on" : ""} onClick={() => onChange(code)}>{label}</button>
      ))}
    </div>
  );
}

Object.assign(window, { JumpButton, HeaderButton, IconButton, SocialButton, LangToggle });
