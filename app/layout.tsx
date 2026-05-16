import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://musync.com.br"),
  title: "MUSYNC — Gestão para Empresas de Música ao Vivo",
  description:
    "O MUSYNC automatiza o administrativo da sua empresa de música para eventos — do contrato assinado ao repertório na mão dos músicos. Teste grátis por 14 dias, sem cartão.",
  keywords: [
    "gestão de banda",
    "software para músicos",
    "gestão de eventos musicais",
    "contrato digital músico",
    "automação whatsapp banda",
    "musync",
  ],
  openGraph: {
    title: "MUSYNC — Gestão para Empresas de Música ao Vivo",
    description:
      "Um cadastro. Tudo criado na hora. Contrato, financeiro, equipe e repertório — tudo automático.",
    url: "https://musync.com.br",
    siteName: "MUSYNC",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MUSYNC — Gestão para Empresas de Música ao Vivo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MUSYNC — Gestão para Empresas de Música ao Vivo",
    description: "Um cadastro. Tudo criado na hora.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
