"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <nav className="bg-white h-20 backdrop-blur-md  flex  items-center justify-end  space-x-4 z-30 fixed top-0 left-0 w-full px-6">
      <SearchInput />
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
};

export default Navbar;
