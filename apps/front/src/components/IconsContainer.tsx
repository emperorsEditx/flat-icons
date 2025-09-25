import React from "react";
import { Card, CardContent } from "./ui/card";
import { Search } from "lucide-react";

export default function IconsContainer() {
  const icons = Array.from({ length: 200 }, (_, i) => (
    <Search key={i} strokeWidth={1} size={35} />
  ));

  return (
    <div className="flex flex-wrap gap-4 p-4 overflow-y-auto h-full justify-center">
      {icons.map((icon, index) => (
        <Card key={index} className="inline-block">
          <CardContent>{icon}</CardContent>
        </Card>
      ))}
    </div>
  );
}
