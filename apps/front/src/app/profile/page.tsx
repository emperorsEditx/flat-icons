"use client";
import Modal from "@/components/Modal";
import ProfileListing from "@/components/profileListing";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Lock, MailIcon } from "lucide-react";
import React, { useState } from "react";

function page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="my-10">
      <h1 className="text-[40px] font-bold my-4">My Profile</h1>
      <div className="flex gap-5 items-center">
        <MailIcon />
        <span className="text-[26px]">yourname@gmail.com</span>
      </div>
      <div className="flex gap-5 items-center">
        <MailIcon />
        <span
          className="text-[26px] font-bold"
          style={{ color: "#00A654" }}
          onClick={() => setIsOpen(true)}
        >
          Change Password
        </span>
      </div>
      <Separator
        style={{ margin: "85px 0", height: "2px", color: "#DDDDDD" }}
      />

      <h1 className="text-[40px] font-bold my-4">Premium</h1>
      <ul className="space-y-2">
        <ProfileListing text="Access to 1.5 million icons in format PNG" />
        <ProfileListing text="1.5 million icons in format SVG" />
        <ProfileListing text="Royalty-free, commercial licenses" />
        <ProfileListing text="Unlimited downloads" />
        <ProfileListing text="Unlimited Collections" />
        <ProfileListing text="Unlimited use of the editor" />
        <ProfileListing text="Copy to clipboard" />
        <ProfileListing text="No Ads" />
        <ProfileListing text="Download history" />
        <ProfileListing text="Priority support" />
      </ul>
      <div className="flex flex-row justify-start items-center gap-15 mt-15">
        <div>
          <p className="text-[20px] flex items-center gap-5">
            <span className="text-[40px] font-bold">$6</span>{" "}
            <span className="-mb-2">per month</span>
          </p>
        </div>
        <div className="flex gap-5 items-center mt-5 font-bold text-xl">
          <label htmlFor="monthly">
            <input type="radio" name="pricing" id="monthly" /> Monthly
          </label>
          <label htmlFor="yearly">
            <input type="radio" name="pricing" id="yearly" /> Yearly{" "}
            <span className="font-normal">-20%</span>
          </label>
        </div>
      </div>

      <Button className="w-[566px] h-[60px] bg-[#00A654] mt-15">
        Go Premium
      </Button>
      <Separator
        style={{ margin: "85px 0", height: "2px", color: "#DDDDDD" }}
      />

      <p className="color-[#B4B4B4] text-[26px]">Delete account</p>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        // title="Set Password"
      >
        <div className="text-center py-15 px-26">
          <h2 className="text-[40px] font-bold">Set Password</h2>
          <p className="text-gray-700 font-medium mt-2 text-xl py-5 px-10">
            You can set a password to be able to log into your account using
            email.
          </p>
          <div className="flex justify-center border-2 py-1 px-2 gap-4">
            <Lock className="mx-auto mt-4" />
            <input
              type="Password"
              placeholder="Enter new password"
              className="w-full border-0 focus:ring-0 focus:outline-0 mx-auto my-4"
            />
          </div>
          <Button className="w-full mt-5 bg-[#2CB88B] hover:bg-green-600 color-white h-[60px]">Save</Button>
        </div>
      </Modal>
    </div>
  );
}

export default page;
