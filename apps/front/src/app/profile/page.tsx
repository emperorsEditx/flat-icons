import { Separator } from "@/components/ui/separator";
import { MailIcon } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="my-10">
      <h1 className="text-[40px] font-bold my-4">My Profile</h1>
      <div className="flex gap-5 items-center">
        <MailIcon />
        <span className="text-[26px]">yourname@gmail.com</span>
      </div>
      <div className="flex gap-5 items-center">
        <MailIcon />
        <span className="text-[26px] font-bold" style={{ color: "#00A654" }}>
          Change Password
        </span>
      </div>
      <Separator
        style={{ margin: "85px 0", height: "2px", color: "#DDDDDD" }}
      />

      <h1 className="text-[40px] font-bold my-4">Premium</h1>
      <ul>
        <li className="font-semibold text-[20px]">1.5 million icons in format PNG</li>
        <li className="font-semibold text-[20px]">1.5 million icons in format PNG</li>
      </ul>
    </div>
  );
}

export default page;
