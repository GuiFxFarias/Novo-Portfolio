"use client";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

export function CarouselSkills() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const skills = ["Leader", "Facilitator", "Smart", "Creator", "Developer"];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[55%] max-w-xs "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {skills.map((skill, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-gray-900">
                <CardContent className="flex aspect-square items-center justify-center h-10 p-6 text-zinc-50">
                  {skill}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-black" />
      <CarouselNext className="bg-black" />
    </Carousel>
  );
}
