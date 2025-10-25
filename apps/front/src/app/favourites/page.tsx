"use client";
import IconsContainer from "@/components/IconsContainer";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";

export default function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [flag, setFlag] = useState(true);
  return (
    <>
      {flag ? (
        <>
          <div className="text-center my-10">
            <h1 className="text-[40px] font-bold">Favourites</h1>
            <p className="text-[20px] font-bold">23 icons</p>
          </div>
          <IconsContainer iconsLength={25} />
          <div className="flex flex-wrap justify-center gap-2 md:flex-row py-8">
            <Button
              onClick={() => setIsOpen(true)}
              className="text-[#2CB88B] bg-white px-5 hover:bg-gray-100"
            >
              Clear all <ChevronRightIcon color="#000" />
            </Button>
          </div>

          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            // title="Set Password"
          >
            <div className="text-center py-15 px-26">
              <h2 className="text-[40px] font-bold">Confirm</h2>
              <p className="text-gray-700 font-medium mt-2 text-xl py-5 px-10">
                Do you want to clear all your favorite icons?
              </p>
              <div className="flex justify-center items-center gap-5">
                <Button onClick={() => setFlag(false)} className="w-[50%] mt-5 bg-[#2CB88B] hover:bg-green-600 color-white h-[60px]">
                  Clear All
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant={"outline"}
                  className="w-[50%] mt-5 bg-transparent border hover:bg-[#2CB88B] color-[#2CB88B] h-[60px]"
                >
                  Close
                </Button>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <div className="w-full h-[50vh] flex justify-center items-center text-center my-10">
          <div>
            <h1 className="text-[40px] font-bold">Favourites</h1>
            <p className="text-[20px] font-bold">Click the favorite button to save your favorite icon in your personal collection.</p>
          </div>
        </div>
      )}
    </>
  );
}
