import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Política de Privacidade — MUSYNC",
  description: "Como o MUSYNC trata dados pessoais, conforme a LGPD.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return <LegalPage docType="privacy_policy" />;
}
