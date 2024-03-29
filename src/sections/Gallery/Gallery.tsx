"use client";

import { SwiperGallery } from "@/components";

import data from "@/data/common.json";
import galleryList from "@/data/gallery.json";

import styles from "./Gallery.module.css";

export const Gallery = () => {
  const { titleGallery } = data.gallery;

  return (
    <section id="gallery" className={`${styles.bg_section}`}>
      <div className="container xs:max-w-full sm:w-[480px] md:w-[768px] lg:w-[1280px] xl:w-[1440px]">
        <h2 className="text-[40px] not-italic uppercase font-thin leading-[1.4] tracking-[-1.6px] text-main-color mb-6">
          {titleGallery.label}
          <span className="font-medium ml-2">{titleGallery.labelSpan}</span>
        </h2>
        <SwiperGallery gallery={galleryList} />
      </div>
    </section>
  );
};
