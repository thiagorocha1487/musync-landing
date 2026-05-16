"use client";

import { useEffect, useState } from "react";

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`mobile-cta-bar${visible ? " visible" : ""}`}>
      <div className="left">
        <div className="price-line">
          <span className="strike">R$ 247</span>R$ 147
          <span style={{ fontSize: "11px", fontWeight: 500, color: "#B5AAC8" }}>/mês</span>
        </div>
        <div className="sub">14 dias grátis · sem cartão</div>
      </div>
      <a href="#planos" className="btn">Testar grátis →</a>
    </div>
  );
}
