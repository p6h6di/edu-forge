import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gray-900">
      {children}
      <div
        className="absolute inset-0 z-0 m-auto h-[357px] max-w-xs blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </div>
  );
}
