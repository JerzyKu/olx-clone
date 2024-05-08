import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="p-4 grow">{children}</main>
      <Footer />
    </div>
  );
}
