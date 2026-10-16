import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Termos de Uso — MUSYNC",
  description: "Termos de Uso do MUSYNC para a empresa assinante.",
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return <LegalPage docType="terms_of_service" />;
}
