"use client";

import { SwiperGallery } from "@/components";

import data from "@/data/common.json";
import galleryList from "@/data/gallery.json";

import styles from "./Gallery.module.css";

export const Gallery = () => {
  const { titleGallery } = data.gallery;

  return (
    <section className={`${styles.bg_section}`}>
      <div className="container mx-auto">
        <h2 className="text-[40px] not-italic uppercase font-thin leading-[1.4] tracking-[-1.6px] text-main-color mb-6">
          {titleGallery.label}
          <span className="font-medium ml-2">{titleGallery.labelSpan}</span>
        </h2>
        <SwiperGallery gallery={galleryList} />
      </div>
    </section>
  );
};
