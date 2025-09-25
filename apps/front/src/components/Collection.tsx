import { Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import CollectionsCard from "./CollectionsCard";

export default function Collection() {
  // Example data for mapping
  const items = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col gap-4 py-5">
      <h2 className="text-3xl font-semibold">Business</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((item, idx) => (
          <CollectionsCard key={idx} />
        ))}
      </div>
    </div>
  );
}
