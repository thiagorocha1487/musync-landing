import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Footer from "@/components/landing/Footer";
import { getLegalDocument, type LegalDocType } from "@/lib/legal";

interface LegalPageProps {
  docType: LegalDocType;
}

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
}

export default async function LegalPage({ docType }: LegalPageProps) {
  const doc = await getLegalDocument(docType);

  return (
    <>
      <header className="legal-header">
        <div className="wrap legal-header-inner">
          <a href="/" className="logo">
            <img src="/favicon.svg" alt="" width={26} height={26} className="logo-img" />
            MUSYNC
          </a>
          <a href="/" className="legal-back">← Voltar ao site</a>
        </div>
      </header>
      <main className="legal">
        <div className="wrap legal-wrap">
          <p className="legal-meta">
            Versão {doc.version} · vigente desde {formatDate(doc.effective_from ?? doc.published_at)}
            {" · "}ref. <code title={doc.content_sha256}>{doc.content_sha256.slice(0, 8)}</code>
          </p>
          <article className="legal-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.content_md}</ReactMarkdown>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
