import SearchBar from "@/components/SearchBar";
import Tab from "@/components/Tab";

export default function HomePage() {
  return (
    <section>
      {/* Hero Section */}
      <div className="text-center my-10">
        <h1 className="text-3xl">
          Discover <strong>49,000+</strong> free icons in <strong>253</strong>{" "}
          Collections
        </h1>
      </div>

      {/* Search Bar */}
      <SearchBar />
      <Tab />
    </section>
  );
}
