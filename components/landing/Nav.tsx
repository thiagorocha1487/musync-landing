"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("drawer-open", open);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="#" className="logo" onClick={close}>
            <span className="logo-mark" />
            MUSYNC
          </a>
          <div className="nav-links">
            <a href="#como">Como funciona</a>
            <a href="#acoes">Ações</a>
            <a href="#planos">Planos</a>
            <a href="#faq">FAQ</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a href="#planos" className="nav-cta" onClick={close}>
              <span className="nav-cta-text">Teste grátis </span>
              <span className="nav-cta-mobile">Testar </span>
              <span>→</span>
            </a>
            <button
              className={`nav-burger${open ? " open" : ""}`}
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`nav-drawer${open ? " open" : ""}`} aria-hidden={!open}>
        <a href="#como" onClick={close}>Como funciona</a>
        <a href="#acoes" onClick={close}>Ações automáticas</a>
        <a href="#planos" onClick={close}>Planos &amp; preço</a>
        <a href="#faq" onClick={close}>Perguntas frequentes</a>
        <a href="#planos" className="drawer-cta" onClick={close}>
          Testar grátis por 14 dias →
        </a>
      </div>
    </>
  );
}
