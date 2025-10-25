import Collection from "@/components/Collection";
import IconsContainer from "@/components/IconsContainer";
import { Separator } from "@/components/ui/separator";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="relative flex items-center justify-between my-10">
        <Link href={"/"} className="text-[#2CB88B] flex items-center gap-1 cursor-pointer">
          <ChevronLeftIcon /> Back
        </Link>

        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-[40px] font-bold">
          Analytics
        </h1>
      </div>

      <p className="text-center text-[20px] font-bold mb-10">
        Explore 50 amazing collections
      </p>

      <IconsContainer iconsLength={125} />

      <Separator
        style={{ margin: "85px 0", height: "2px", color: "#DDDDDD" }}
      />
      <Collection />
    </>
  );
}
