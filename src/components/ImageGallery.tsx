// ImageGallery.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageProps } from "../../utils/types";

interface ImageGalleryProps {
  images: ImageProps[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const imageUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720`;
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);

  const openModal = (image: ImageProps) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Mapping through images to create image cards */}
      {images.map((image) => (
        <div
          key={image.id}
          className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          onClick={() => openModal(image)}
        >
          {/* Image Component */}
          <Image
            alt={`Photo ${image.public_id}`}
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            src={`${imageUrl}/${image.public_id}.${image.format}`}
            placeholder="blur"
            blurDataURL={image.blurDataUrl}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          />
        </div>
      ))}

      {/* Model Overlay */}
      {showModal && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-auto rounded-lg bg-white p-6">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              Close
            </button>
            <Image
              alt={`Photo ${selectedImage.public_id}`}
              src={`${imageUrl}/${selectedImage.public_id}.${selectedImage.format}`}
              width={selectedImage.width}
              height={selectedImage.height}
              className="mx-auto max-h-[80vh] w-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
