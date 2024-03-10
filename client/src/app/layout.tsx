import type { Metadata } from "next";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { BaseLayout } from "@/shared/ui";
import '@styles/globals.scss';


export const metadata: Metadata = {
  title: "E-commerce Forniture",
  description: "E-commerce Forniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseLayout
      header={<Header />}
      footer={<Footer />}
    >
      {children}
    </BaseLayout>
  );
}
