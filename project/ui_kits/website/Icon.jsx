/* Lucide icon bridge for React (Babel).
   Renders a stable <span> and mounts the real Lucide SVG inside it via the
   CDN's createIcons(). Re-clears + re-creates on each render so React never
   fights Lucide over the swapped node. Lucide is the brand's only icon set. */

function Icon({ name, size = 20, strokeWidth = 2, color, className = "", style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    host.appendChild(i);
    try {
      window.lucide.createIcons({
        attrs: { width: size, height: size, "stroke-width": strokeWidth },
      });
    } catch (e) {}
  });
  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color, lineHeight: 0, ...style }}
    />
  );
}

window.Icon = Icon;
