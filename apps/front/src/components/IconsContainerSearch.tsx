"use client";
import { useState } from "react";
import { ContactIcon, Download, Search } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Button } from "./ui/button";
import { toast } from "sonner";

type IconsContainerProps = {
  iconsLength: number;
};

export default function IconsContainerSearch({
  iconsLength,
}: IconsContainerProps) {
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const sizes = ["16", "24", "32", "64", "128", "156", "512"];

  // Suppose each row contains 5 icons (you can change this)
  const iconsPerRow = 10;

  const icons = Array.from({ length: iconsLength }, (_, i) => (
    <Search key={i} strokeWidth={1} size={35} />
  ));

  const handleClick = (rowIndex: number) => {
    setSelectedRow(selectedRow === rowIndex ? null : rowIndex);
  };

  const rows = [];
  for (let i = 0; i < icons.length; i += iconsPerRow) {
    const rowIcons = icons.slice(i, i + iconsPerRow);
    const rowIndex = i / iconsPerRow;
    rows.push(
      <div key={rowIndex} className="w-full">
        {/* ICON ROW */}
        <div className="flex flex-wrap gap-4 justify-center p-4">
          {rowIcons.map((icon, index) => (
            <Card
              key={index}
              className="inline-block cursor-pointer"
              onClick={() => handleClick(rowIndex)}
            >
              <CardContent>{icon}</CardContent>
            </Card>
          ))}
        </div>

        {/* DETAILS ROW BELOW THE LINE */}
        {selectedRow === rowIndex && (
          <div className="mt-2 mb-4 p-4 bg-gray-100 text-left">
            <Card>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent className="">
                    <CarouselItem className="">
                      <Card className="w-full">
                        <CardContent className="px-5 flex gap-5 justify-between">
                          <div className="bg-gray-100 w-full flex-1 rounded-2xl flex flex-row items-center justify-center p-4">
                            <div className="flex flex-col justify-center items-center gap-2">
                              <div className="border-1">
                                <ContactIcon size={40} strokeWidth={1} />
                              </div>
                              <ContactIcon size={40} strokeWidth={2} />
                            </div>
                            <ContactIcon size={300} strokeWidth={1} />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold flex-1">
                              Add free icon
                            </h2>
                            <p className="text-gray-600 mb-4 text-[18px] py-3">
                              Download free high-quality icons for web, apps,
                              and design. Available in PNG, SVG, formats.
                            </p>
                            <div className="text-xl font-bold mb-2 flex items-center gap-6">
                              <div className="flex items-center gap-2">
                                <input
                                  name="radio"
                                  type="radio"
                                  id="png"
                                  className="accent-[#2CB88B] w-5 h-5 focus:ring-0 focus:outline-none focus-visible:ring-0 active:ring-0 active:outline-none"
                                />
                                <label htmlFor="png" className="cursor-pointer">
                                  PNG
                                </label>
                              </div>

                              <div className="flex items-center gap-2">
                                <input
                                  name="radio"
                                  type="radio"
                                  id="svg"
                                  className="accent-[#2CB88B] w-5 h-5 focus:ring-0 focus:outline-none focus-visible:ring-0 active:ring-0 active:outline-none"
                                />
                                <label htmlFor="svg" className="cursor-pointer">
                                  SVG
                                </label>
                              </div>
                            </div>
                            <div>
                              {sizes.map((num) => (
                                <Button
                                  key={num}
                                  variant="outline"
                                  onClick={() => setActiveSize(num)}
                                  className={`bg-white m-1 rounded-none transition-colors ${
                                    activeSize === num
                                      ? "bg-[#2CB88B] text-white border-[#2CB88B]"
                                      : "hover:bg-gray-100"
                                  }`}
                                >
                                  {num} px
                                </Button>
                              ))}
                            </div>
                            <Button
                              className="px-4 py-2 text-white rounded hover:bg-green-500 w-full h-12 my-2 bg-[#2CB88B]"
                              onClick={() =>
                                toast.success("Downloading free PNG icon!")
                              }
                            >
                              <Download /> Download in PNG
                            </Button>
                            <div className="flex mt-2 w-full">
                              <Button
                                variant={"outline"}
                                className="px-4 h-12 py-2 rounded bg-white hover:bg-[#2CB88B] hover:text-white w-1/2"
                              >
                                Copy PNG to clipboard
                              </Button>
                              <Button
                                variant={"outline"}
                                className="px-4 h-12 py-2 rounded bg-white hover:bg-[#2CB88B] hover:text-white w-1/2"
                              >
                                Favorite
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }

  return <div className="overflow-y-auto h-full">{rows}</div>;
}
