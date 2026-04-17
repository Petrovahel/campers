"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type Props = {
  gallery: {
    id: string;
    thumb: string;
    original: string;
  }[];
};

export default function CamperGallery({ gallery }: Props) {
  const [thumbsSwiper, setThumbsSwiper] =
    useState<SwiperType | null>(null);

  return (
    <div className="w-[400px]">
      {/* 🔥 MAIN */}
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
          } as React.CSSProperties
        }
        loop={gallery.length > 4}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[300px]"
      >
        {gallery.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              src={img.original}
              className="w-full h-full object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 THUMBS */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={gallery.length > 4}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[80px] mt-2"
      >
        {gallery.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              src={img.thumb}
              className="w-full h-full object-cover rounded cursor-pointer opacity-60 hover:opacity-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}