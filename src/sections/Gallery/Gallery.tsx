"use client";

import { HeadLineSection, SwiperGallery } from "@/components";

import data from "@/data/common.json";
import galleryList from "@/data/gallery.json";

import styles from "./Gallery.module.css";

export const Gallery = () => {
  const { titleGallery } = data.gallery;

  return (
    <section id="gallery" className={`${styles.bg_section}`}>
      <div className="container xs:max-w-full sm:w-[480px] md:w-[768px] lg:w-[1280px] xl:w-[1440px]">
        <HeadLineSection
          stylesTitle="mb-6 lg:mb-[71px]"
          label={titleGallery.label}
          labelSpan={titleGallery.labelSpan}
        />
        <SwiperGallery gallery={galleryList} />
      </div>
    </section>
  );
};
