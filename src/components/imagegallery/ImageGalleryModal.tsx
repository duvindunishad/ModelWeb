"use client";

import Image from "next/image";
import { ImageProps } from "../../../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faChevronLeft,
  faChevronRight,
  faExternalLinkAlt,
  faDownload, // Import the download icon
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

interface ImageGalleryModalProps {
  images: ImageProps[];
  currentIndex: number;
  onClose: () => void;
  onThumbnailClick: (index: number) => void;
}

const ImageGalleryModal = ({
  images,
  currentIndex,
  onClose,
  onThumbnailClick,
}: ImageGalleryModalProps) => {
  const imageUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,g_auto,w_1280,h_1080`;

  const [slideIndex, setSlideIndex] = useState(currentIndex);
  const [loading, setLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement | null>(null); // Create a ref for the image

  useEffect(() => {
    // Preload the next and previous images
    const preloadImages = (index: number) => {
      const nextIndex = (index + 1) % images.length;
      const prevIndex = (index - 1 + images.length) % images.length;

      // Preload next image
      const nextImage = new window.Image(); // Use the global Image constructor
      nextImage.src = `${imageUrl}/${images[nextIndex].public_id}.${images[nextIndex].format}`;

      // Preload previous image
      const prevImage = new window.Image(); // Use the global Image constructor
      prevImage.src = `${imageUrl}/${images[prevIndex].public_id}.${images[prevIndex].format}`;
    };

    preloadImages(slideIndex);
  }, [slideIndex, images, imageUrl]);

  const handlePrevImage = () => {
    const newIndex = (slideIndex - 1 + images.length) % images.length;
    setSlideIndex(newIndex);
    onThumbnailClick(newIndex);
    setLoading(true); // Set loading to true when changing images
  };

  const handleNextImage = () => {
    const newIndex = (slideIndex + 1) % images.length;
    setSlideIndex(newIndex);
    onThumbnailClick(newIndex);
    setLoading(true); // Set loading to true when changing images
  };

  const handleClose = () => {
    if (imageRef.current) {
      imageRef.current.scrollIntoView(); // Scroll to the image
    }
    onClose(); // Call the onClose prop function
  };

  const openInNewTab = () => {
    const publicId = images[slideIndex].public_id; // Get the public ID of the current image
    const newWindowUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}.${images[slideIndex].format}`;
    window.open(newWindowUrl, "_blank"); // Open the image in a new tab
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm">
      <div className="relative min-h-[80vh] min-w-[50vw] h-auto max-w-[90vw] overflow-hidden rounded-lg bg-transparent">
        {/* Main Image Slider */}
        <div className="relative p-6">
          <div className="relative">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span>Loading...</span> {/* Placeholder or loading spinner */}
              </div>
            )}

            <Image
              ref={imageRef} // Attach the ref to the Image component
              alt={`Photo ${images[slideIndex].public_id}`}
              src={`${imageUrl}/${images[slideIndex].public_id}.${images[slideIndex].format}`}
              width={1280} // Set a fixed width for the main image
              height={1080} // Set a fixed height for the main image
              className={`mx-auto max-h-[80vh] w-full object-contain rounded-lg transition-opacity duration-300 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              onLoadingComplete={() => setLoading(false)} // Set loading to false when image has loaded
            />

            {/* Close Button */}
            <button
              className="absolute right-4 top-4 z-10 p-2 bg-black bg-opacity-70 rounded-full hover:bg-opacity-80 w-10 h-10 flex items-center justify-center"
              onClick={handleClose} // Call handleClose on click
            >
              <FontAwesomeIcon
                icon={faClose}
                size="lg"
                className="text-white"
              />
            </button>

            {/* Previous Image Button */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-70 rounded-full z-10 hover:bg-opacity-80 w-10 h-10 flex items-center justify-center"
              onClick={handlePrevImage}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="lg"
                className="text-white"
              />
            </button>

            {/* Next Image Button */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-70 rounded-full z-10 hover:bg-opacity-80 w-10 h-10 flex items-center justify-center"
              onClick={handleNextImage}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                size="lg"
                className="text-white"
              />
            </button>

            {/* Open in New Tab Button */}
            <button
              className="absolute top-4 right-16 z-10 p-2 bg-black bg-opacity-70 rounded-full hover:bg-opacity-80 w-10 h-10 flex items-center justify-center"
              onClick={openInNewTab} // Call openInNewTab on click
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt} // Use the external link icon
                size="lg"
                className="text-white"
              />
            </button>
          </div>
        </div>

        {/* Thumbnail Section */}
        <div className="flex flex-wrap justify-center gap-2 p-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`cursor-pointer rounded-md border-2 transition-transform duration-200 ${
                index === currentIndex
                  ? "border-blue-500 scale-105" // Scale up when selected
                  : "border-transparent hover:border-gray-400 hover:scale-105" // Scale up on hover
              }`}
              onClick={() => {
                onThumbnailClick(index);
                setSlideIndex(index); // Move to the clicked thumbnail
              }}
            >
              <Image
                alt={`Photo ${image.public_id}`}
                src={`${imageUrl}/${image.public_id}.${image.format}`}
                width={120}
                height={80}
                className="max-h-[100px] w-auto transition-transform duration-200" // Add transition for smooth scaling
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryModal;
