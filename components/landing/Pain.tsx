const PAIN_ITEMS = [
  "Fechou um evento e passou a tarde criando planilha de financeiro, planilha de agenda e fazendo contrato — tudo separado, tudo na mão.",
  "Precisou confirmar 8 músicos para um sábado e ficou 40 minutos no WhatsApp mandando mensagem um por um.",
  "Esqueceu de mandar o lembrete de pagamento e a parcela venceu sem o cliente nem saber.",
  "Enviou o repertório errado para os músicos porque estava gerenciando tudo ao mesmo tempo.",
  "Chegou na véspera do evento sem ter confirmado com toda a equipe e foi fazer isso às 23h.",
  "Olhou para o financeiro do mês e não sabia se estava no lucro ou no prejuízo.",
];

export default function Pain() {
  return (
    <section className="pain section-pad">
      <div className="wrap">
        <div className="sh">
          <span className="eyebrow"><span className="dot" />A dor</span>
          <h2>A rotina que você conhece bem demais.</h2>
        </div>
        <div className="pain-grid">
          {PAIN_ITEMS.map((text, i) => (
            <div key={i} className="pain-card">
              <span className="qmark">CENA {String(i + 1).padStart(2, "0")}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="pain-fechamento">
          Isso não é falta de organização.<br />
          É <span className="hl">falta de ferramenta certa</span> para o seu mercado.
        </div>
      </div>
    </section>
  );
}
