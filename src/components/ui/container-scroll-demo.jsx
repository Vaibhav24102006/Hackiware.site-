import React from "react";
import { ContainerScroll } from "./container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[100px]">
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-semibold text-white">
            Event Title <br />
            <span className="text-4xl md:text-[6rem] font-bold leading-none">
              Scroll Animation
            </span>
          </h1>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1682685796766-0fdddd050277?q=80&w=2000"
          alt="event"
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
