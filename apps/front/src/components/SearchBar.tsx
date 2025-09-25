import { ChevronDown, SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <div>
      <div className="mt-2">
        <div className="flex items-center bg-white rounded-md pl-3 outline-1 -outline-offset-1 shadow-2xl has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-gray-500">
          <div className="shrink-0 text-base select-none sm:text-sm/6">
            <SearchIcon />
          </div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Search...."
            className="block font-semibold min-w-0 grow py-5 pr-3 text-3xl pl-2 focus:outline-none sm:text-sm/6"
          />
          <div className="grid shrink-0 grid-cols-1 pr-2 focus-within:relative">
            <select
              id="currency"
              name="currency"
              aria-label="Currency"
              className="col-start-1 row-start-1 appearance-none rounded-md bg-gray-200 py-3 pr-1 pl-5 text-2xl focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400 sm:text-sm/6 font-semibold"
            >
              <option>Icons</option>
              <option>Collections</option>
            </select>
            <ChevronDown
              strokeWidth={3}
              absoluteStrokeWidth
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-green-400 sm:size-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
