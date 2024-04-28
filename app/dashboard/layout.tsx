import Categories from "@/components/Categories";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { checkSubscription } from "@/lib/subscription";
import { prisma } from "@/prisma/client";
import React from "react";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await prisma.category.findMany();
  const isPro = await checkSubscription();

  return (
    // fixed flex min-h-screen w-full overflow-hidden
    <div className="overflow-hidden">
      <Sidebar isPro={isPro} />
      <Navbar />
      <Categories data={categories} />
      {children}
    </div>
  );
}
