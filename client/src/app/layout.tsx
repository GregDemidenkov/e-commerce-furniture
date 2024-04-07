import type { Metadata } from "next";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { BaseLayout } from "@/shared/ui";
import { StoreProvider } from "./store/StoreProvider";
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
    <StoreProvider>
      <BaseLayout
        header={<Header />}
        footer={<Footer />}
      >
        {children}
      </BaseLayout>
    </StoreProvider>
  );
}
