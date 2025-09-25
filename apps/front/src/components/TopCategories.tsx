import { Award, Baby, KayakIcon, Search } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function TopCategories() {
  return (
    <div className="flex flex-col gap-4 py-5">
      <h2 className="text-3xl font-semibold">Top Categories</h2>
      <Card className="bg-[#1B252E]">
        <CardContent className="m-auto">
          <Carousel className="w-fit">
            <CarouselContent className="">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <Card className="w-fit">
                    <CardContent className="grid grid-cols-2 gap-4 grid-rows-2 px-5">
                      <Search size={45} strokeWidth={1} />
                      <Baby size={45} strokeWidth={1} />
                      <Award size={45} strokeWidth={1} />
                      <KayakIcon size={45} strokeWidth={1} />
                    </CardContent>
                    <CardFooter className="text-sm d-flex justify-center font-semibold">
                      Category
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>
    </div>
  );
}
