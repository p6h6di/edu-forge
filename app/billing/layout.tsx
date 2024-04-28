import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { checkSubscription } from "@/lib/subscription";
import React from "react";

export default async function BillingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isPro = await checkSubscription();
  return (
    <div className="fixed flex min-h-screen w-full overflow-hidden">
      <Sidebar isPro={isPro} />
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
