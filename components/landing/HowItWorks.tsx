const STEPS = [
  {
    n: "PASSO 01",
    t: "Cliente cadastrado",
    d: "O próprio cliente preenche pelo link que você envia — ou você cadastra em segundos.",
  },
  {
    n: "PASSO 02",
    t: "Contrato gerado na hora",
    d: "Template com seu papel timbrado, variáveis preenchidas, pronto para assinatura digital.",
  },
  {
    n: "PASSO 03",
    t: "Evento ativado automaticamente",
    d: "Contrato assinado + entrada confirmada = financeiro, equipe, ações e pasta do cliente criados sem você levantar um dedo.",
    featured: true,
  },
  {
    n: "PASSO 04",
    t: "Financeiro programado",
    d: "Todas as parcelas e lembretes automáticos para o cliente. Sem planilha, sem 'depois eu mando'.",
  },
  {
    n: "PASSO 05",
    t: "Equipe escalada e avisada",
    d: "Selecione os músicos, clique uma vez. Todos recebem as datas via WhatsApp com portal exclusivo.",
  },
  {
    n: "PASSO 06",
    t: "Avaliação no Google",
    d: "3 dias após o evento, o sistema pede avaliação e direciona 4 e 5 estrelas ao Google Meu Negócio.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad" id="como">
      <div className="wrap">
        <div className="sh">
          <span className="eyebrow"><span className="dot" />Como funciona</span>
          <h2>Um cadastro. O sistema faz o resto.</h2>
          <p>
            Você fecha o evento. A partir daí, o MUSYNC encadeia 6 etapas sozinho —
            todas conectadas, todas no tempo certo.
          </p>
        </div>
        <div className="how-steps">
          {STEPS.map((s, i) => (
            <div key={i} className={`how-card${s.featured ? " featured" : ""}`}>
              <div className="num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
