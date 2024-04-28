"use client";

import React from "react";
import { Companion } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare } from "lucide-react";

interface CompanionFeedProps {
  data: (Companion & {
    _count: {
      messages: number;
    };
  })[];
}

const CompanionFeed = ({ data }: CompanionFeedProps) => {
  return (
    <div className="ml-[89px] mt-44 h-full p-8 z-0">
      <div className="size-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {data.map((item) => (
            <div key={item.id}>
              <Link href={`/chat/${item.id}`}>
                <div className="space-y-2">
                  <div className="w-full h-full">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={1280}
                      height={1480}
                      className="w-full h-80 rounded-xl object-cover object-center"
                    />
                  </div>
                  <h1 className="text-lg font-medium antialiased pt-4">
                    {item.name}
                  </h1>
                  <p className="text-sm font-normal text-muted-foreground antialiased line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-medium lowercase antialiased">
                      @{item.userName}
                    </span>
                    <div className="flex items-center space-x-1.5">
                      <MessageSquare className="size-4" />
                      <span>{item._count.messages}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {data.length === 0 && (
          <div>
            <p>No companions found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanionFeed;
