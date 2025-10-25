"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Collection from "./Collection";
import IconsContainerSearch from "./IconsContainerSearch";
import Paginator from "./Paginator";
import TopCategories from "./TopCategories";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

export default function SearchResults() {
  const [activeTab, setActiveTab] = useState("outline");

  return (
    <>
      {/* Wrap span + tabs in a flex container */}
      <div className="relative flex items-center justify-center mb-2">
        <span className="absolute left-0 text-base font-medium text-gray-700">
          Add 64 icons
        </span>

        <Tabs defaultValue="outline" className="" onValueChange={setActiveTab}>
          <TabsList className="flex justify-center gap-4 w-auto">
            <TabsTrigger
              value="outline"
              className="flex items-center gap-2 -mb-5 px-4 text-lg shadow-none rounded-none 
                data-[state=active]:shadow-none data-[state=active]:border-b-2 
                data-[state=active]:border-b-green-600"
              style={{
                maxWidth: "fit-content",
                padding: "15px 35px",
              }}
            >
              Outline
            </TabsTrigger>

            <TabsTrigger
              value="fill"
              className="flex items-center gap-2 -mb-5 px-4 text-lg shadow-none rounded-none 
                data-[state=active]:shadow-none data-[state=active]:border-b-2 
                data-[state=active]:border-b-green-600"
              style={{
                maxWidth: "fit-content",
                padding: "15px 35px",
              }}
            >
              Fill
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <hr />

      <Tabs defaultValue="outline" onValueChange={setActiveTab}>
        <TabsContent value="outline">
          <IconsContainerSearch iconsLength={200} />
          <div className="flex flex-wrap justify-center gap-2 md:flex-row py-8">
            <Button className="text-white bg-[#2CB88B] px-5 hover:bg-green-600">
              Load More
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="fill">
          <IconsContainerSearch iconsLength={200} />
          <div className="flex flex-wrap justify-center gap-2 md:flex-row py-8">
            <Button className="text-white bg-[#2CB88B] px-5 hover:bg-green-600">
              Load More
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
