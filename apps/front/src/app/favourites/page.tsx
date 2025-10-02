import IconsContainer from "@/components/IconsContainer";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-[40px] font-bold">Favourites</h1>
        <p className="text-[20px] font-bold">23 icons</p>
      </div>
      <IconsContainer iconsLength={25} />
      <div className="flex flex-wrap justify-center gap-2 md:flex-row py-8">
        <Button className="text-[#2CB88B] bg-white px-5 hover:bg-gray-100">
          Clear all <ChevronRightIcon color="#000"/>
        </Button>
      </div>
    </>
  );
}
