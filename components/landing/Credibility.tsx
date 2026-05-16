export default function Credibility() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="sh">
          <span className="eyebrow"><span className="dot" />De dentro do mercado</span>
          <h2>O MUSYNC nasceu de dentro do mercado.</h2>
        </div>
        <div className="cred-grid">
          <div className="cred-story">
            <p className="cred-quote">
              Não foi desenvolvido por uma empresa de software que nunca gerenciou um evento.
              Foi criado por um empresário do setor de música para eventos — que gerenciava tudo
              ao mesmo tempo e vivia exatamente as mesmas frustrações que você. Cada funcionalidade
              existe porque resolveu um problema real. Testado na prática, em evento real, antes de chegar até você.
            </p>
            <div className="cred-attr">
              <div className="cred-avatar">M</div>
              <div>
                <div className="n">Fundador MUSYNC</div>
                <div className="r">Empresário do setor de música para eventos</div>
              </div>
            </div>
          </div>
          <div className="cred-side">
            <div className="testi-card">
              <div className="ph-stars">★ ★ ★ ★ ★</div>
              <p className="testi-quote">
                Antes do MUSYNC eu fechava o sábado e o domingo já era dedicado a planilha.
                Hoje, contrato assinado pelo cliente, o sistema cria o evento, financeiro e equipe
                sozinho. Recuperei meus fins de semana.
              </p>
              <div className="testi-attr">
                <div className="testi-avatar" style={{ background: "#7C3BED" }}>RA</div>
                <div>
                  <div className="n">Rafael Andrade</div>
                  <div className="r">Empresário</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="ph-stars">★ ★ ★ ★ ★</div>
              <p className="testi-quote">
                Antes eu ficava 40 minutos no WhatsApp confirmando músico por músico. Agora envio
                uma vez e o portal cuida do resto — inclusive das recusas com histórico. Mudou minha operação.
              </p>
              <div className="testi-attr">
                <div className="testi-avatar" style={{ background: "#110B1F" }}>JM</div>
                <div>
                  <div className="n">Juliana Mendes</div>
                  <div className="r">Empresária</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
