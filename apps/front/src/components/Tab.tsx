"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Collection from "./Collection";
import IconsContainer from "./IconsContainer";
import Paginator from "./Paginator";
import TopCategories from "./TopCategories";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("collections");
  return (
    <>
      <div className="w-full px-2 py-16 sm:px-0 mx-auto">
        <Tabs
          defaultValue="collections"
          className=""
          onValueChange={setActiveTab}
        >
          <TabsList className="flex justify-center gap-4 mb-4 w-auto">
            <TabsTrigger
              value="collections"
              className="flex items-center gap-2 px-4 py-2 text-lg"
              style={{
                maxWidth: "fit-content",
                background: "white",
                padding: "15px 35px",
              }}
            >
              {activeTab === "collections" ? (
                <Check className="text-green-600" />
              ) : (
                ""
              )}
              Collections
            </TabsTrigger>

            <TabsTrigger
              value="icons"
              className="flex items-center gap-2 px-4 py-2 text-lg"
              style={{
                maxWidth: "fit-content",
                background: "white",
                padding: "15px 35px",
              }}
            >
              {activeTab === "icons" ? (
                <Check className="text-green-600" />
              ) : (
                ""
              )}
              Icons
            </TabsTrigger>
          </TabsList>

          <TabsContent value="collections">
            <Collection />
            <Collection />
            <Collection />
            <Paginator />
            <TopCategories />
          </TabsContent>
          <TabsContent value="icons">
            <IconsContainer iconsLength={200}/>
            <div className="flex flex-wrap justify-center gap-2 md:flex-row py-8">
              <Button className="text-white bg-[#2CB88B] px-5 hover:bg-green-600">
                Load More
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
