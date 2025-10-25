"use client";
import { SearchIcon } from "lucide-react";
import Branding from "./Branding";
import NavBar from "./NavBar";
import { useSearch } from "@/app/context/SearchContext";

export default function Header() {
  const { searchActive, searchQuery, setSearchQuery } = useSearch();

  return (
    <header className="container mx-auto flex items-center justify-between gap-2 px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-52 py-6">
      <Branding />
      {searchActive && (
        <div className="flex items-center pl-3 grow-2 d-none">
          <div className="shrink-0 text-base select-none sm:text-sm/6">
            <SearchIcon />
          </div>
          <input
            id="searchIcons"
            name="searchIcons"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search icons..."
            className="block font-semibold min-w-0 grow py-5 pr-3 text-3xl pl-2 focus:outline-none sm:text-sm/6"
          />
        </div>
      )}
      <NavBar />
    </header>
  );
}
