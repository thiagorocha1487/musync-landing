"use client";

import { useState } from "react";

const FAQ_DATA: [string, string][] = [
  [
    "Como funciona o contrato automático?",
    "Você sobe seu template em Word com as variáveis do sistema. Na hora de gerar, seleciona o modelo e a forma de pagamento e clica. O contrato sai preenchido, com seu papel timbrado, pronto para assinar digitalmente.",
  ],
  [
    "Os músicos precisam baixar algum aplicativo?",
    "Não. Eles recebem um link pelo WhatsApp e acessam o portal pelo navegador do celular — sem criar conta ou instalar nada.",
  ],
  [
    "Posso personalizar as mensagens automáticas?",
    "Sim, todas. Texto, horário de envio, destinatário — você controla tudo.",
  ],
  [
    "E se o músico recusar uma data?",
    "Ele recusa pelo portal e o sistema registra com histórico. Você substitui por outro colaborador na agenda.",
  ],
  [
    "Como funciona o módulo financeiro?",
    "Dashboard visual com previsão de receitas, despesas, fluxo de caixa anual, emissão de nota fiscal com um clique e exportação de DRE e relatórios em CSV.",
  ],
  [
    "Posso ter funcionário acessando o sistema?",
    "Sim, no Plano Profissional você adiciona até 2 funcionários com acesso restrito por módulo, com senha própria.",
  ],
  [
    "Quais formas de pagamento?",
    "Cartão de crédito, Pix à vista ou boleto. O plano anual tem desconto de 2 meses.",
  ],
  [
    "E se eu não gostar?",
    "14 dias grátis sem cartão. Depois, 7 dias de garantia após a primeira cobrança. Devolução total, sem perguntas.",
  ],
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq section-pad" id="faq">
      <div className="wrap">
        <div className="sh">
          <span className="eyebrow"><span className="dot" />Dúvidas</span>
          <h2>Perguntas frequentes.</h2>
        </div>
        <div className="faq-grid">
          {FAQ_DATA.map(([q, a], i) => (
            <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                <span>{q}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-a" aria-hidden={openIndex !== i}>
                <div className="faq-a-inner">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
