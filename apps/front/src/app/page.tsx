"use client";
import { useSearch } from "@/app/context/SearchContext";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import Tab from "@/components/Tab";

export default function HomePage() {
  const { searchActive } = useSearch();
  return (
    <section>
      {!searchActive ? (
        <>
          <div className="text-center my-10">
            <h1 className="text-4xl">
              Discover <strong>49,000+</strong> free icons in{" "}
              <strong>253</strong> Collections
            </h1>
          </div>
          <SearchBar />
          <Tab />
        </>
      ) : (
        <SearchResults />
      )}
    </section>
  );
}
