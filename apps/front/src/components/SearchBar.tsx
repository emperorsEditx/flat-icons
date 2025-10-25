"use client";
import { useSearch } from "@/app/context/SearchContext";
import { FormEvent, useState } from "react";

export default function SearchBar() {
  const { setSearchActive, searchQuery, setSearchQuery } = useSearch();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Icons");

  const handleSelect = (value: string) => {
    setSelected(value);
    setOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      setSearchActive(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-2">
        <div className="flex items-center bg-white rounded-md pl-7 pr-2.5 shadow-md">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.7332 22.1713L19.6397 18.0777C22.051 15.1133 22.7654 11.116 21.5297 7.50002C20.2943 3.88389 17.2829 1.15942 13.5622 0.290528C9.84104 -0.578361 5.93462 0.530997 3.22584 3.22589C0.530995 5.93516 -0.578353 9.8415 0.290522 13.5624C1.1594 17.2836 3.88375 20.295 7.4999 21.5301C11.116 22.7658 15.1132 22.0514 18.0774 19.64L22.1709 23.7336C22.4561 23.9779 22.8458 24.061 23.2059 23.9545C23.5663 23.848 23.848 23.5663 23.9545 23.2059C24.061 22.8457 23.9774 22.4565 23.7332 22.1713ZM4.78813 17.3354C3.12474 15.6729 2.18981 13.4174 2.18921 11.0656C2.18863 8.71356 3.12272 6.45776 4.7855 4.79435C6.44829 3.13123 8.70375 2.19681 11.0558 2.19681C13.4079 2.19681 15.6633 3.13123 17.3262 4.79435C18.9892 6.45776 19.923 8.71356 19.9224 11.0656C19.9222 13.4173 18.9872 15.6729 17.3235 17.3354C15.6681 19.0105 13.4111 19.9534 11.0559 19.9534C8.70068 19.9534 6.44357 19.0105 4.78813 17.3354Z"
              fill="#13415A"
            />
          </svg>
          <input
            id="search"
            name="search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search...."
            className="block font-medium min-w-0 grow py-7 text-2xl pl-5 focus:outline-none"
          />
          <div className="relative flex items-center gap-2 pr-4 bg-[#FBFBFB] rounded-r-md py-5 px-3 rounded-lg">
            <div className="text-gray-700 font-medium text-2xl">{selected}</div>

            <svg
              width="16"
              height="7"
              viewBox="0 0 16 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setOpen(!open)}
              className="cursor-pointer transition-transform"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <path d="M7.7 7L0 0L15.4 -2.69262e-06L7.7 7Z" fill="#2CB88B" />
            </svg>

            {open && (
              <div className="absolute top-full right-3 mt-2 w-32 bg-white shadow-lg rounded-md border border-gray-100 z-50">
                <div
                  onClick={() => handleSelect("Icons")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-medium text-lg"
                >
                  Icons
                </div>
                <div
                  onClick={() => handleSelect("Collections")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-medium text-lg"
                >
                  Collections
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
