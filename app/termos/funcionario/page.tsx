import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Termos de Uso para Funcionários — MUSYNC",
  description: "Termos de Uso do MUSYNC para funcionários e colaboradores com login.",
  alternates: { canonical: "/termos/funcionario" },
};

export default function TermosFuncionarioPage() {
  return <LegalPage docType="terms_of_service_employee" />;
}
