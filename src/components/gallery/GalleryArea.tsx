
"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import gallery_data from "@/data/gallery-data";

export default function GalleryArea({ dictionary }: { dictionary: any }) {
  const [index, setIndex] = useState(-1);

  const slides = gallery_data.map(item => ({
    src: item.src,
    width: 1200,
    height: 800,
  }));

  return (
    <>
      <section className="azzle-section-padding">
        <div className="container">
           <div className="azzle-section-title center max-width-780" data-aos="fade-up" data-aos-delay="500">
              <h2>{dictionary.title}</h2>
            </div>
          <div className="gallery-grid-container">
            {gallery_data.map((item, i) => (
              <div
                key={item.id}
                className="gallery-grid-item"
                onClick={() => setIndex(i)}
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}
