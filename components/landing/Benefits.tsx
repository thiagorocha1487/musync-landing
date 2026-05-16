const BENEFITS: [string, string][] = [
  ["Você para de montar planilha", "tudo é gerado automaticamente."],
  ["Seus músicos recebem todas as datas do ano", "de uma só vez."],
  ["Lembretes de pagamento vão automáticos", "sem você lembrar de mandar."],
  ["O repertório chega nos músicos certo", "na hora certa, por ocasião."],
  ["Você sabe exatamente o que vai receber", "esse mês e o ano inteiro."],
  ["Sua avaliação no Google cresce automaticamente", "após cada evento."],
  ["Nota fiscal emitida com um clique", "sem sair do sistema."],
  ["Tudo de cada cliente em uma pasta", "organizada."],
];

export default function Benefits() {
  return (
    <section className="benefits section-pad">
      <div className="wrap">
        <div className="sh">
          <span className="eyebrow"><span className="dot" />O que muda</span>
          <h2>O que muda na sua rotina.</h2>
        </div>
        <div className="benefits-grid">
          {BENEFITS.map(([em, rest], i) => (
            <div key={i} className="benefit">
              <span className="check">✓</span>
              <p>
                <span className="em">{em}</span> — {rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
