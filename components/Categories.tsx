"use client";

import React from "react";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface CategoriesProps {
  data: Category[];
}

const Categories = ({ data }: CategoriesProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="bg-white ml-[92px] h-20 backdrop-blur-md fixed top-20 left-0  w-full  space-x-3 z-30 flex items-center justify-start overflow-hidden px-6">
      <Button
        onClick={() => onClick(undefined)}
        variant="outline"
        size="sm"
        className={cn(!categoryId && "bg-accent")}
      >
        Newest
      </Button>
      {data.map((item) => (
        <Button
          onClick={() => onClick(item.id)}
          key={item.id}
          variant="outline"
          size="sm"
          className={cn(item.id === categoryId && "bg-accent")}
        >
          {item.name}
        </Button>
      ))}
    </div>
    // <div className="w-full space-x-3 pb-12 pt-4">

    /* <Button
        onClick={() => onClick(undefined)}
        variant="outline"
        className={cn(!categoryId && "bg-accent")}
      >
        Newest
      </Button>
      {data.map((item) => (
        <Button
          onClick={() => onClick(item.id)}
          key={item.id}
          variant="outline"
          className={cn(item.id === categoryId && "bg-accent")}
        >
          {item.name}
        </Button>
      ))} */
    // </div>
  );
};

export default Categories;
