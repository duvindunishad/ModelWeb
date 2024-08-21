// ImageGallery.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { ImageProps } from "../../../utils/types";
import ImageGalleryCard from "./ImageGalleryCard";
import ImageGalleryModal from "./ImageGalleryModal";

interface ImageGalleryProps {
  images: ImageProps[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    // Scroll to the image using the imageRef
    imageRefs.current[currentIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Add or remove the blur class on the body when the modal is opened or closed
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showModal]);

  return (
    <div>
      {/* Render Image Cards */}
      {images.map((image, index) => (
        <ImageGalleryCard
          key={image.id}
          image={image}
          onImageClick={openModal}
          index={index}
          imageRef={(ref) => (imageRefs.current[index] = ref)} // Store the ref in the array
        />
      ))}

      {/* Render Modal if showModal is true */}
      {showModal && (
        <ImageGalleryModal
          images={images}
          currentIndex={currentIndex}
          onClose={closeModal}
          onThumbnailClick={handleThumbnailClick}
          // nextImage={nextImage}
          // prevImage={prevImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;
