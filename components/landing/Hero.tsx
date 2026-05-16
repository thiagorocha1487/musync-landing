export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="wrap hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pill">NOVO</span>
            <span>Gestão para empresas de música</span>
          </div>
          <h1>
            Um cadastro. <span className="accent">Tudo criado</span> na hora.
          </h1>
          <p className="hero-sub">
            O MUSYNC automatiza o administrativo da sua empresa de música para eventos —
            do contrato assinado ao repertório na mão dos músicos — para você focar no
            que realmente importa: vender e tocar.
          </p>
          <div className="hero-cta">
            <div className="hero-cta-row">
              <a href="#planos" className="btn btn-primary btn-lg">
                Quero conhecer o MUSYNC <span className="btn-arrow">→</span>
              </a>
            </div>
            <div className="micro">
              Teste grátis <span className="sep">·</span> Sem cartão de crédito
            </div>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-item">
              <div className="n">17</div>
              <div className="l">ações automáticas<br />de WhatsApp</div>
            </div>
            <div className="hero-trust-item">
              <div className="n">100%</div>
              <div className="l">criado dentro<br />do mercado</div>
            </div>
            <div className="hero-trust-item">
              <div className="n">14 dias</div>
              <div className="l">grátis,<br />sem cartão</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-mock">
            <div className="mock-chrome">
              <span className="d" /><span className="d" /><span className="d" />
              <span className="url">app.musync.com.br / evento #2841</span>
            </div>
            <div className="mock-body">
              <div className="mock-h">
                <div>
                  <h4>Casamento · Letícia &amp; Rafael</h4>
                  <p>Sáb 21 jun · 18h00 · Espaço Villa</p>
                </div>
                <span className="mock-badge">Contrato assinado</span>
              </div>
              <div className="mock-step active">
                <span className="check">✓</span>
                <span className="label">Cliente cadastrado</span>
                <span className="meta">Auto</span>
              </div>
              <div className="mock-step active">
                <span className="check">✓</span>
                <span className="label">Contrato gerado</span>
                <span className="meta">12s atrás</span>
                <div className="bar" />
              </div>
              <div className="mock-step active">
                <span className="check">✓</span>
                <span className="label">Financeiro programado</span>
                <span className="meta">3 parcelas</span>
              </div>
              <div className="mock-step pending">
                <span className="check">4</span>
                <span className="label">Escalando equipe…</span>
                <span className="meta">8 músicos</span>
              </div>
              <div className="mock-step pending">
                <span className="check">5</span>
                <span className="label">Avaliação automática</span>
                <span className="meta">D+3</span>
              </div>
            </div>
          </div>
          <div className="float-card top-right">
            <div className="ic">✓</div>
            <div>
              <div className="t">8 músicos confirmaram</div>
              <div className="s">em 6 minutos · via WhatsApp</div>
            </div>
          </div>
          <div className="float-card bottom-left">
            <div className="ic">★</div>
            <div>
              <div className="t">
                <span style={{ color: "rgb(31,28,11)" }}>Nova avaliação</span>{" "}
                <span style={{ color: "rgb(219,196,30)" }}>★★★★★</span>
              </div>
              <div className="s">Direcionada ao Google Meu Negócio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
