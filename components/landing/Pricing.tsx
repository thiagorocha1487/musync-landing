const ESSENCIAL_FEATS = [
  "Cadastro + geração automática de contrato",
  "Templates com papel timbrado e assinatura digital",
  "Evento ativado automaticamente após assinatura",
  "17 ações automáticas de WhatsApp + personalizáveis",
  "Agenda com envio em massa e portal do colaborador",
  "Financeiro: receitas, despesas, DRE e relatórios CSV",
  "Repertório com lista personalizada",
  "Avaliações vinculadas ao Google Meu Negócio",
];

const PRO_FEATS: [string, boolean][] = [
  ["Tudo do Essencial", true],
  ["Sem limite de eventos", true],
  ["2 números de WhatsApp (clientes + músicos)", true],
  ["Até 2 funcionários com acesso restrito por módulo", true],
  ["Emissão de NFS-e integrada (1 clique)", true],
  ["2 contas bancárias", true],
  ["Acesso antecipado a novos módulos", true],
];

export default function Pricing() {
  return (
    <section className="pricing section-pad" id="planos">
      <div className="wrap">
        <div className="sh center">
          <span className="eyebrow"><span className="dot" />Oferta de lançamento</span>
          <h2>Oferta de lançamento.</h2>
          <p>
            Primeiras 30 empresas têm preço de lançamento. Após as vagas encherem,
            os valores voltam ao original.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <div className="price-notice">
            <span className="live-dot" />
            <span>
              Restam <strong style={{ color: "white" }}>11 vagas</strong> com preço de lançamento
            </span>
          </div>
        </div>

        <div className="price-grid">
          {/* Essencial */}
          <div className="price-card">
            <div className="price-name">Essencial</div>
            <div className="price-amount">
              <div className="price-old">De R$ 247/mês</div>
              <div className="price-new">
                <span className="currency">R$</span>147<span className="currency">/mês</span>
              </div>
              <div className="price-period">Pagamento mensal, cancele quando quiser</div>
            </div>
            <ul className="price-feats">
              {ESSENCIAL_FEATS.map((f, i) => (
                <li key={i} className="price-feat">
                  <span className="check-mini">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="price-limit">1 número de WhatsApp · até 10 eventos/mês</div>
            <a href="https://app.musync.com.br/registro?plano=essencial" className="btn btn-ghost btn-block">Começar com o Essencial →</a>
          </div>

          {/* Profissional */}
          <div className="price-card popular">
            <span className="popular-badge">Mais popular</span>
            <div className="price-name">Profissional</div>
            <div className="price-amount">
              <div className="price-old">De R$ 347/mês</div>
              <div className="price-new">
                <span className="currency">R$</span>247<span className="currency">/mês</span>
              </div>
              <div className="price-period">Pagamento mensal, cancele quando quiser</div>
            </div>
            <ul className="price-feats">
              {PRO_FEATS.map(([f, em], i) => (
                <li key={i} className="price-feat">
                  <span className="check-mini">✓</span>
                  <span className={em ? "em-line" : ""}>{f}</span>
                </li>
              ))}
            </ul>
            <div className="price-limit">Eventos ilimitados · 2 números de WhatsApp</div>
            <a href="https://app.musync.com.br/registro?plano=profissional" className="btn btn-primary btn-block">Começar com o Profissional →</a>
          </div>
        </div>

        <div className="price-foot">
          14 dias grátis em qualquer plano{" "}
          <span className="sep" style={{ color: "var(--line-2)" }}>·</span>{" "}
          Sem cartão{" "}
          <span className="sep" style={{ color: "var(--line-2)" }}>·</span>{" "}
          Cancele quando quiser
        </div>
      </div>
    </section>
  );
}
