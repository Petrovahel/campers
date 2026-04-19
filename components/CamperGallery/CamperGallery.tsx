"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import css from "./CamperGallery.module.css";
import type { GalleryItem } from "@/types/camper";

type Props = {
  gallery: GalleryItem[];
};

export default function CamperGallery({ gallery }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  if (!gallery.length) {
    return <p>No images available</p>;
  }

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
            <Image
              src={img.original}
              alt="Camper image"
              width={800}
              height={500}
              className={css.mainImage}
            />{" "}
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
            <Image
              src={img.thumb}
              alt="Camper thumbnail"
              width={150}
              height={100}
              className={css.thumbImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
