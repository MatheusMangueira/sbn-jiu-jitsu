"use client";
import { useEffect } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

interface IGalleryPageProps {
  galleryID: string;
  images: {
    largeURL: string;
    thumbnailURL: string;
    width: number;
    height: number;
  }[];
}

export const GalleryPage = ({ ...props }: IGalleryPageProps) => {
 
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null as any;
    };
  }, []);

  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4"
      id={props.galleryID}
    >
      {props.images.map((image, index) => (
        <a
          className="w-full h-full overflow-hidden "
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-full h-full object-cover rounded-xl shadow-lg"
            src={image.largeURL}
            alt="photos"
          />
        </a>
      ))}
    </div>
  );
};
