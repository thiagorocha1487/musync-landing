import { useState } from "react";
import {
  ArrowRight, Check, X, ChevronDown,
  CalendarCheck, PenLine, Music, MessageCircle,
  Wallet, Bot, Star, Receipt, BarChart2, PieChart,
  Table2, FileText, CheckCircle2, Users, CreditCard,
  Sparkles, Share2, Globe, AlertCircle,
} from "lucide-react";

const APP_URL = "https://app.musync.com.br/login";

const GRADIENT = "linear-gradient(135deg, #7C3AED 0%, #b28cff 100%)";

const pains = [
  { icon: Table2,       title: "Planilhas Infinitas", desc: "Dados descentralizados que geram erros de agendamento e confusão financeira." },
  { icon: AlertCircle,  title: "Caos no WhatsApp",    desc: "Acordos perdidos em conversas intermináveis e falta de histórico oficial." },
  { icon: FileText,     title: "Burocracia Lenta",    desc: "Impressão, assinatura manual e digitalização de contratos roubam sua agilidade." },
];

const features = [
  { icon: CalendarCheck, title: "Gestão de Eventos",       desc: "Controle total de datas, horários e detalhes técnicos de cada show." },
  { icon: PenLine,       title: "Contratos Digitais",      desc: "Assinatura eletrônica vinculada e segura em segundos." },
  { icon: Music,         title: "Portal Repertório",       desc: "Músicos acessam setlists, letras e guias em um só lugar." },
  { icon: MessageCircle, title: "Confirmação WhatsApp",    desc: "Confirmação automática de presença dos músicos via bot." },
  { icon: Wallet,        title: "Financeiro Integrado",    desc: "Cálculo de cachês, despesas e lucros com relatórios reais." },
  { icon: Bot,           title: "Automação WPP",           desc: "Disparo automático de informativos e briefings para bandas." },
  { icon: Star,          title: "Avaliações/NPS",          desc: "Saiba o que seus clientes acharam após cada apresentação." },
  { icon: Receipt,       title: "Nota Fiscal Eletrônica",  desc: "Geração e controle de NFS-e simplificado." },
];

const automations = [
  { icon: FileText,      title: "Contrato gerado em segundos",               desc: "Preenchimento automático com dados do cliente e artista." },
  { icon: MessageCircle, title: "WhatsApp automático para clientes",         desc: "Envio de briefing, confirmação e lembretes pré-evento." },
  { icon: Users,         title: "Confirmação da equipe no automático",       desc: "Bot solicita OK dos músicos e técnicos via WhatsApp." },
  { icon: CreditCard,    title: "Cobranças que se gerenciam sozinhas",       desc: "Alertas de parcelas pendentes enviadas diretamente ao pagador." },
  { icon: Receipt,       title: "Nota fiscal emitida com um clique",         desc: "Integração com prefeituras para emissão rápida de NFS-e." },
  { icon: Sparkles,      title: "Avaliações no Google no piloto automático", desc: "Solicitação de review enviada após o término do evento." },
];

const steps = [
  { n: "1", title: "Cadastre",  desc: "Importe seus músicos, bandas e contratos padrão em minutos." },
  { n: "2", title: "Configure", desc: "Defina fluxos de trabalho e automações de comunicação." },
  { n: "3", title: "Opere",     desc: "Gerencie eventos e escale seu negócio com dados precisos." },
];

const essentialItems = [
  { ok: true,  text: "Gestão de eventos (10/mês)" },
  { ok: true,  text: "Contratos digitais" },
  { ok: true,  text: "Portal do Repertório" },
  { ok: true,  text: "Confirmação via WhatsApp" },
  { ok: true,  text: "Financeiro (parcelas)" },
  { ok: true,  text: "WhatsApp automatizado" },
  { ok: true,  text: "Avaliações e NPS" },
  { ok: false, text: "Emissão de NFS-e" },
  { ok: false, text: "Contas bancárias ilimitadas" },
];

const proItems = [
  { text: "Eventos Ilimitados" },
  { text: "Contratos Ilimitados" },
  { text: "Automação WhatsApp Bot" },
  { text: "Emissão de NFS-e Inclusa" },
  { text: "Relatórios Financeiros Pro" },
  { text: "Multi-contas Bancárias" },
];

const faqs = [
  { q: "Os músicos precisam baixar um aplicativo?",   a: "Não! Os músicos acessam tudo via link seguro pelo navegador ou recebem notificações diretamente no WhatsApp." },
  { q: "O contrato digital tem validade jurídica?",   a: "Sim, nossos contratos seguem a ICP-Brasil e possuem validade jurídica plena em todo território nacional." },
  { q: "Posso integrar com meu sistema de cobrança?", a: "O MUSYNC já possui faturamento próprio, mas também oferecemos API para integração com os principais gateways de pagamento." },
  { q: "Como funciona o teste grátis?",               a: "Você tem acesso total a todas as funcionalidades do plano Profissional por 14 dias sem compromisso." },
  { q: "Oferecem suporte para implementação?",        a: "Com certeza! Temos uma equipe de Onboarding dedicada a ajudar você a configurar seus primeiros eventos." },
];

const stats = [
  { value: "110+", label: "eventos gerenciados" },
  { value: "55+",  label: "membros da equipe cadastrados" },
  { value: "54",   label: "contratos assinados" },
];

const footerLinks = ["Termos de Uso", "Privacidade", "Suporte", "Blog"];

function ImgPlaceholder() {
  return (
    <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-[#f0f0f5] to-[#e8e8f0] flex items-center justify-center border border-slate-200">
      <span className="text-slate-400 text-sm font-medium">Screenshot em breve</span>
    </div>
  );
}

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const goToApp = () => { window.location.href = APP_URL; };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#2d2f2f]">

      {/* ── HEADER ── */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/30">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 h-16">
          <img src="/logo-roxa.png" alt="MUSYNC" className="h-6 w-auto" />

          <div className="hidden md:flex items-center gap-8">
            {[
              ["Soluções",        "solucoes"],
              ["Funcionalidades", "funcionalidades"],
              ["Preços",          "precos"],
              ["FAQ",             "faq"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-zinc-600 font-medium hover:text-primary transition-colors text-sm"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={goToApp}
              className="hidden md:block text-zinc-600 font-bold hover:text-primary transition-colors text-sm"
            >
              Entrar
            </button>
            <button
              onClick={goToApp}
              className="text-white font-bold text-sm px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-transform"
              style={{ background: GRADIENT }}
            >
              Começar Agora
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-24">

        {/* ── HERO ── */}
        <section className="relative px-6 pt-12 pb-8 md:pt-16 md:pb-16 overflow-hidden">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 font-display">
                Do contrato ao último acorde —{" "}
                <span className="text-primary">tudo em um só lugar.</span>
              </h1>
              <p className="text-base text-[#5a5c5c] mb-8 max-w-lg leading-relaxed">
                Automatize sua produtora de eventos musicais. Gestão de contratos, agenda de músicos e pagamentos em uma plataforma maestral.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={goToApp}
                  className="text-white font-bold text-sm px-5 py-2.5 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                  style={{ background: GRADIENT }}
                >
                  Começar agora
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scrollTo("funcionalidades")}
                  className="border-2 border-primary text-primary font-bold text-sm px-5 py-2.5 rounded-full hover:bg-primary/5 transition-all flex items-center justify-center"
                >
                  Ver Demonstração
                </button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200/20 md:scale-110 w-full max-w-2xl">
                <div className="bg-zinc-100 px-4 py-2 border-b border-gray-200/20 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mx-auto bg-white rounded-md px-3 py-1 text-[10px] text-zinc-400 border border-gray-200 w-1/2 text-center truncate">
                    app.musync.com.br/dashboard
                  </div>
                </div>
                <div className="p-1 bg-white">
                  <ImgPlaceholder />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </section>

        {/* ── BADGES ── */}
        <section className="border-y border-primary/20 bg-[#f6f6f6] py-6 mb-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16">
              {["Contratos automáticos", "WhatsApp integrado", "Repertório online"].map((badge) => (
                <div key={badge} className="border border-primary px-6 py-2 rounded-full">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PAIN ── */}
        <section className="py-16 bg-[#F0F1F1]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4 font-display">
              Você ainda gerencia sua empresa assim?
            </h2>
            <p className="text-[#5a5c5c] mb-12 text-lg max-w-2xl mx-auto">
              Planilhas perdidas, caos no WhatsApp e contratos que demoram dias para serem assinados drenam seu tempo e lucro.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {pains.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white p-5 rounded-[2rem] text-left border-b-4 border-[#b41340] shadow-sm">
                  <Icon className="text-[#b41340] h-7 w-7 mb-3" />
                  <h3 className="text-base font-bold mb-2">{title}</h3>
                  <p className="text-[#5a5c5c] text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINANCIAL ── */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Controle Total</span>
                <h2 className="text-3xl font-black mb-6 tracking-tight font-display">
                  Financeiro Inteligente e KPIs em Tempo Real
                </h2>
                <p className="text-[#5a5c5c] text-lg leading-relaxed mb-8">
                  Visualize a saúde financeira da sua produtora com painéis detalhados. Controle receitas, despesas e lucratividade por evento sem precisar de planilhas complexas.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <BarChart2 className="text-primary h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Análise Gráfica</p>
                      <p className="text-sm text-[#5a5c5c]">Fluxo de caixa projetado.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PieChart className="text-primary h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Categorização</p>
                      <p className="text-sm text-[#5a5c5c]">Despesas por setor.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200/20">
                <ImgPlaceholder />
              </div>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section className="py-8 bg-primary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap justify-around items-center gap-8 text-white">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black mb-1">{value}</div>
                  <div className="text-sm font-medium uppercase tracking-widest opacity-80">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUTION OVERVIEW ── */}
        <section className="py-16 overflow-hidden" id="solucoes">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <ImgPlaceholder />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">A Evolução Digital</span>
              <h2 className="text-3xl font-black tracking-tight mb-6 leading-tight font-display">
                O MUSYNC é o Maestro da sua Operação.
              </h2>
              <p className="text-[#5a5c5c] text-lg leading-relaxed mb-8">
                Não somos apenas um software; somos a central de inteligência da sua produtora. Consolidamos todas as etapas do evento em uma jornada fluida, permitindo que você foque no que importa: a música e o crescimento do seu negócio.
              </p>
              <ul className="space-y-4">
                {[
                  "Interface intuitiva para donos e artistas",
                  "Redução de 70% no tempo administrativo",
                  "Segurança jurídica total com assinatura digital",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FEATURES GRID ── */}
        <section className="py-16 bg-[#F0F1F1]" id="funcionalidades">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4 tracking-tight font-display">Tudo o que sua produtora precisa</h2>
              <p className="text-[#5a5c5c] max-w-2xl mx-auto">Funcionalidades pensadas exclusivamente para o mercado da música.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(124,58,237,0.12)] transition-all hover:-translate-y-2"
                >
                  <Icon className="text-primary h-7 w-7 mb-3" />
                  <h4 className="font-bold text-base mb-2">{title}</h4>
                  <p className="text-sm text-[#5a5c5c] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AUTOMATION ── */}
        <section className="py-16 bg-zinc-900 text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#a67aff] font-bold tracking-widest uppercase text-sm mb-4 block">Automação Completa</span>
              <h2 className="text-3xl font-black tracking-tight mb-4 font-display">
                Enquanto você descansa, o MUSYNC trabalha por você
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                O MUSYNC trabalha nos bastidores para que nada passe despercebido.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {automations.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-zinc-800/50 p-5 rounded-[2rem] border border-white/10 hover:border-primary/50 transition-colors"
                >
                  <Icon className="text-[#a67aff] h-7 w-7 mb-3" />
                  <h4 className="font-bold text-base mb-2">{title}</h4>
                  <p className="text-zinc-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4 tracking-tight font-display">Três passos para a harmonia total</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-12 relative">
              <div className="hidden md:block absolute top-7 left-1/4 right-1/4 h-0.5 bg-[#b28cff]/30 -z-10" />
              {steps.map(({ n, title, desc }) => (
                <div key={n} className="flex-1 text-center group">
                  <div className="w-14 h-14 bg-[#b28cff]/20 text-[#2e006c] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {n}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{title}</h4>
                  <p className="text-[#5a5c5c]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-16 bg-[#F0F1F1]" id="precos">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4 tracking-tight font-display">O investimento ideal para sua escala</h2>
              <p className="text-[#5a5c5c]">14 dias grátis. Não pedimos cartão de crédito.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">

              {/* Essencial */}
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-200/60 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 font-display">Essencial</h3>
                <p className="text-[#5a5c5c] mb-6 text-sm">Ideal para produtoras iniciantes.</p>
                <div className="mb-8">
                  <span className="text-4xl font-black">R$147</span>
                  <span className="text-[#5a5c5c]">/mês</span>
                </div>
                <ul className="space-y-3 mb-10 flex-grow text-sm">
                  {essentialItems.map(({ ok, text }) => (
                    <li key={text} className={`flex items-center gap-3 ${!ok ? "opacity-50" : ""}`}>
                      {ok
                        ? <Check className="text-primary h-5 w-5 flex-shrink-0" />
                        : <X className="h-5 w-5 flex-shrink-0 text-[#5a5c5c]" />
                      }
                      {text}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={goToApp}
                  className="w-full py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors mt-auto"
                >
                  Começar no Essencial
                </button>
              </div>

              {/* Profissional */}
              <div className="bg-white p-10 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(124,58,237,0.12)] border-2 border-primary relative md:scale-105 flex flex-col">
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{ background: GRADIENT }}
                >
                  Mais Popular
                </div>
                <h3 className="text-2xl font-bold mb-2 font-display">Profissional</h3>
                <p className="text-[#5a5c5c] mb-6 text-sm">Escalabilidade total para sua empresa.</p>
                <div className="mb-8">
                  <span className="text-4xl font-black">R$247</span>
                  <span className="text-[#5a5c5c]">/mês</span>
                </div>
                <ul className="space-y-3 mb-10 flex-grow text-sm">
                  {proItems.map(({ text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <Check className="text-primary h-5 w-5 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={goToApp}
                  className="w-full py-4 rounded-full text-white font-bold shadow-lg shadow-primary/25 hover:opacity-90 transition-all mt-auto"
                  style={{ background: GRADIENT }}
                >
                  Começar no Profissional
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16" id="faq">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-black mb-10 text-center tracking-tight font-display">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {faqs.map(({ q, a }, i) => (
                <div key={q} className="border-b border-gray-200/60 pb-6">
                  <button
                    className="w-full text-left text-lg font-bold flex justify-between items-center gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {q}
                    <ChevronDown
                      className={`text-primary h-5 w-5 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="text-[#5a5c5c] mt-3">{a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-16 bg-[#f6f6f6] px-6">
          <div
            className="max-w-5xl mx-auto rounded-[2rem] p-8 text-center text-white overflow-hidden relative shadow-[0_20px_40px_-10px_rgba(124,58,237,0.12)]"
            style={{ background: GRADIENT }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-4 tracking-tight font-display">
                Comece hoje e transforme sua empresa
              </h2>
              <p className="text-base mb-6 opacity-90 max-w-2xl mx-auto">
                Junte-se às produtoras que já profissionalizaram sua gestão com o MUSYNC.
              </p>
              <button
                onClick={goToApp}
                className="bg-white text-primary px-7 py-3.5 rounded-full font-extrabold text-base hover:bg-[#f6f6f6] transition-colors hover:scale-105 active:scale-95 shadow-xl"
              >
                Começar Teste Grátis Agora
              </button>
              <p className="mt-6 text-sm opacity-70">Sem fidelidade. Cancele quando quiser.</p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44.7,-76.4C58.3,-69.2,70.1,-58.4,78.2,-45.1C86.3,-31.8,90.7,-15.9,89.5,-0.7C88.3,14.5,81.5,29,72.4,41.9C63.3,54.8,51.9,66.1,38.3,73.4C24.7,80.7,8.9,84,-6.5,80.2C-21.9,76.5,-36.8,65.7,-49.2,54.1C-61.6,42.5,-71.4,30.1,-76.6,15.8C-81.8,1.5,-82.3,-14.7,-76.4,-28.9C-70.5,-43.1,-58.2,-55.3,-44.2,-62.3C-30.2,-69.3,-15.1,-71.1,0.2,-71.5C15.5,-71.9,31.1,-70.9,44.7,-76.4Z"
                  fill="white"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-zinc-100 w-full py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo-roxa.png" alt="MUSYNC" className="h-6 w-auto mb-6" />
            <p className="text-zinc-500 text-sm max-w-xs text-center md:text-left leading-relaxed">
              © 2025 MUSYNC. O Maestro Digital da sua Gestão de Eventos.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-zinc-500 hover:text-primary transition-colors text-sm underline decoration-primary/30 underline-offset-4"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
              <Share2 className="h-4 w-4" />
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
              <Globe className="h-4 w-4" />
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
