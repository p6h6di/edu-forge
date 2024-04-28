"use client";

import React from "react";
import { Icons } from "../Icons";
import Link from "next/link";
import Creator from "./Creator";
import { useSession } from "@clerk/nextjs";
import { Shell } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const { session } = useSession();
  return (
    <div className=" bg-gray-900">
      <nav className="container flex h-20 items-center justify-between">
        <Shell className="size-10 text-white/70" />
        {!session ? (
          <Link
            href="/sign-up"
            className="rounded-lg bg-gradient-to-r from-indigo-400 to-blue-500 px-6 py-3 text-base font-medium text-white"
          >
            <span className="flex items-center">
              Get started
              <Icons.arrow_right className="ml-3 size-6 text-white" />
            </span>
          </Link>
        ) : (
          <Link
            href="/dashboard"
            className="rounded-lg bg-gradient-to-r from-indigo-400 to-blue-500 px-6 py-3 text-base font-medium text-white"
          >
            <span className="flex items-center">
              Dashboard
              <Icons.arrow_right className="ml-3 size-6 text-white" />
            </span>
          </Link>
        )}
      </nav>

      <header>
        <div className="container py-16">
          <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="flex flex-col">
              <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
                Making learning personal, one chatbot at a time.
              </h1>
              <p className="mb-6 max-w-lg text-sm text-white/70 sm:text-xl md:mb-10 lg:mb-12">
                Experience the power of AI in education! Our chatbot harnesses
                the latest technology to provide students with personalized
                support and resources.
              </p>

              <div className="flex items-center">
                {!session ? (
                  <Link
                    href="/sign-up"
                    className="z-50 rounded-lg bg-gradient-to-r from-indigo-400 to-blue-500 px-6 py-3 text-base font-medium text-white"
                  >
                    <span className="flex items-center">
                      Get started
                      <Icons.arrow_right className="ml-3 size-6 text-white" />
                    </span>
                  </Link>
                ) : (
                  <Link
                    href="/dashboard"
                    className="z-50 rounded-lg bg-gradient-to-r from-indigo-400 to-blue-500 px-6 py-3 text-base font-medium text-white"
                  >
                    <span className="flex items-center">
                      Dashboard
                      <Icons.arrow_right className="ml-3 size-6 text-white" />
                    </span>
                  </Link>
                )}
              </div>
            </div>
            <Image
              src="/hero.png"
              alt="hero"
              width={600}
              height={600}
              className="inline-block size-full max-w-screen-sm"
            />
          </div>
        </div>
        <p className="py-6 text-center font-semibold text-white">
          Created by ❤️ Dev Verma
        </p>
      </header>

      <div
        className="absolute inset-0 z-0 m-auto h-[357px] max-w-xs blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </div>
  );
};

export default Hero;
