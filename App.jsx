/* App — composes the marketing site, owns language + checkout modal state */

function App() {
  const [lang, setLang] = React.useState("en");
  const [checkout, setCheckout] = React.useState(null); // null | {context}

  const nav = (id) => {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };

  const openBook = (context) => setCheckout({ context: context || null });

  return (
    <React.Fragment>
      <Navbar lang={lang} setLang={setLang} onBook={() => openBook()} onNav={nav} />
      <Hero lang={lang} onBook={() => openBook()} onClasses={() => nav("how")} />
      <HowItWorks lang={lang} onFind={() => nav("schedule")} />
      <Benefits lang={lang} onJoin={() => nav("schedule")} />
      <ScheduleSection lang={lang} onBook={(c) => openBook(c)} />
      <StudioGallery lang={lang} />
      <Membership lang={lang} onSelect={(p) => openBook(p)} />
      <FAQ lang={lang} />
      <CTASection lang={lang} onCta={() => openBook()} />
      <Footer lang={lang} onNav={nav} />
      {checkout && <CheckoutModal lang={lang} context={checkout.context} onClose={() => setCheckout(null)} />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
