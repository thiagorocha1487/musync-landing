const ACTION_GROUPS = [
  {
    h: "Para o cliente",
    tag: "5 ações",
    items: [
      "Boas-vindas após fechamento do contrato",
      "Lembrete 1 dia antes do vencimento da parcela",
      "Aviso de pagamento atrasado (2 e 5 dias)",
      "Confirmação de informações do evento",
      "Lembrete para enviar o repertório",
    ],
  },
  {
    h: "Para a equipe",
    tag: "5 ações",
    items: [
      "Envio de datas em massa com 1 clique",
      "Repertório separado por ocasião (cerimônia, recepção, festa)",
      "Confirmação final antes do evento",
      "Mensagem de aniversário automática",
      "Registro de recusa com histórico completo",
    ],
  },
  {
    h: "Personalizável",
    tag: "ilimitado",
    items: [
      "Crie novas ações para qualquer necessidade",
      "Edite texto, horário e destinatário",
      "Ação exclusiva para cerimonialistas",
      "Variáveis dinâmicas no corpo da mensagem",
      "Pré-visualização antes do disparo",
    ],
  },
];

export default function Actions() {
  return (
    <section className="actions section-pad" id="acoes">
      <div className="wrap">
        <div className="sh">
          <span className="eyebrow"><span className="dot" />Automação</span>
          <h2 style={{ fontSize: "48px" }}>
            17 ações prontas, já configuradas e funcionando no primeiro dia.
          </h2>
          <p>
            Lembretes, confirmações, repertório, avaliação — tudo disparado
            automaticamente no momento certo, para o destinatário certo.
          </p>
        </div>
        <div className="actions-cols">
          {ACTION_GROUPS.map((g, i) => (
            <div key={i} className="action-col">
              <h4>
                {g.h}
                <span className="tag">{g.tag}</span>
              </h4>
              <ul>
                {g.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
