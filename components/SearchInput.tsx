"use client";

import React, { ChangeEventHandler, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/use-debounce";
import qs from "query-string";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [value, setValue] = useState(name || "");
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: debouncedValue,
      categoryId,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router, categoryId]);

  return (
    <div className="relative">
      <Search className="absolute left-4 top-3 size-4 text-muted-foreground" />
      <Input
        value={value}
        onChange={onChange}
        placeholder="Search"
        className="bg-accent pl-10 ring-offset-0  focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default SearchInput;
