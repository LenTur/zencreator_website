import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Gallery = () => {
  return (
    <section className="w-full py-24 md:py-28">
      {/* Header remains centered and constrained */}
      <div className="flex flex-col items-center gap-3 mb-12 text-center max-w-[1120px] w-full mx-auto px-4">
        <div className="inline-block bg-purple-100 text-purple-700 text-sm font-bold px-4 py-1.5 rounded-full">
            Gallery
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          See What's Possible
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
          Explore a showcase of content created with ZenCreator.
        </p>
      </div>
      
      {/* Carousel becomes full-width */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {/* Increased number of items to 10 for demonstration */}
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
              <div className="p-1">
                <Card className="overflow-hidden rounded-lg">
                  <CardContent className="flex aspect-square items-center justify-center p-0 bg-gray-200">
                    {/* Placeholder can be an image in the future */}
                    <span className="text-2xl font-semibold text-gray-500">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Move buttons inside the viewport for full-width layout */}
        <CarouselPrevious className="left-4 sm:left-8" />
        <CarouselNext className="right-4 sm:right-8" />
      </Carousel>
    </section>
  );
};
