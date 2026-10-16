// Documentos jurídicos vigentes — fonte única: view `current_legal_documents`
// do Supabase do app. É a MESMA view que a tela de aceite (/reaceite) usa, então
// o texto publicado aqui é byte a byte o que o usuário aceita (conferível pelo hash).

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://igsppmphwrrndqxrzrsp.supabase.co";
// Chave anon (pública por definição — a mesma que vai no bundle do app).
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnc3BwbXBod3JybmRxeHJ6cnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMzkzMzAsImV4cCI6MjA3OTkxNTMzMH0.7W5sMkGDo6tQ5BEEtzOFCs54KB8MlgQjNBF6cEGeI84";

// Revalida a cada 5 min: uma v2 publicada aparece aqui em até 5 min.
export const LEGAL_REVALIDATE_SECONDS = 300;

export type LegalDocType =
  | "terms_of_service"
  | "terms_of_service_employee"
  | "privacy_policy";

export interface LegalDocument {
  doc_type: LegalDocType;
  version: string;
  content_md: string;
  content_sha256: string;
  effective_from: string | null;
  published_at: string;
}

// Lança em caso de erro: no ISR o Next mantém a última versão boa em vez de
// publicar uma página vazia; no build, falha o deploy (o anterior segue no ar).
export async function getLegalDocument(docType: LegalDocType): Promise<LegalDocument> {
  const url =
    `${SUPABASE_URL}/rest/v1/current_legal_documents` +
    `?select=doc_type,version,content_md,content_sha256,effective_from,published_at` +
    `&doc_type=eq.${docType}`;

  const res = await fetch(url, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
    next: { revalidate: LEGAL_REVALIDATE_SECONDS },
  });
  if (!res.ok) {
    throw new Error(`Falha ao buscar ${docType}: HTTP ${res.status}`);
  }
  const rows = (await res.json()) as LegalDocument[];
  if (rows.length !== 1) {
    throw new Error(`Documento ${docType} não encontrado (${rows.length} linhas)`);
  }
  return rows[0];
}
