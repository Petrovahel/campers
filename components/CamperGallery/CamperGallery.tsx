"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import css from "./CamperGallery.module.css";

type Props = {
  gallery: {
    id: string;
    thumb: string;
    original: string;
  }[];
};

export default function CamperGallery({ gallery }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={css.container}>
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
        className={css.mainSwiper}
      >
        {gallery.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.original} className={css.mainImage} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={gallery.length > 4}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.thumbsSwiper}
      >
        {gallery.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.thumb} className={css.thumbImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
