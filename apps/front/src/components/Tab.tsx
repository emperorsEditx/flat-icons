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
              className="flex items-center gap-2 rounded-sm"
              style={{
                maxWidth: "fit-content",
                background: "white",
                padding: "20px 35px",
              }}
            >
              {activeTab === "collections" ? (
                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.5789 0.40707C23.1404 0.950213 23.1404 1.83129 22.5789 2.37471L8.92255 15.5924C8.36138 16.1359 7.45106 16.1359 6.8899 15.5924L0.421088 9.3314C-0.140363 8.78825 -0.140363 7.90717 0.421088 7.36376C0.982255 6.82061 1.89257 6.82061 2.45403 7.36376L7.90637 12.641L20.5458 0.407563C21.1072 -0.135854 22.0172 -0.135854 22.5787 0.407563L22.5789 0.40707Z"
                    fill="#2CB88B"
                  />
                </svg>
              ) : (
                ""
              )}
              Collections
            </TabsTrigger>

            <TabsTrigger
              value="icons"
              className="flex items-center gap-2 rounded-sm"
              style={{
                maxWidth: "fit-content",
                background: "white",
                padding: "20px 35px",
              }}
            >
              {activeTab === "icons" ? (
                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.5789 0.40707C23.1404 0.950213 23.1404 1.83129 22.5789 2.37471L8.92255 15.5924C8.36138 16.1359 7.45106 16.1359 6.8899 15.5924L0.421088 9.3314C-0.140363 8.78825 -0.140363 7.90717 0.421088 7.36376C0.982255 6.82061 1.89257 6.82061 2.45403 7.36376L7.90637 12.641L20.5458 0.407563C21.1072 -0.135854 22.0172 -0.135854 22.5787 0.407563L22.5789 0.40707Z"
                    fill="#2CB88B"
                  />
                </svg>
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
            <IconsContainer iconsLength={200} />
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
