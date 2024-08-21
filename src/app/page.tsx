"use client";
// app/page.tsx
import Link from "next/link";
import { useState } from "react";
import ImageCard from "@/components/ImageCard";
import HeroSection from "@/components/HeroSection";
import { images } from "../../utils/modelData";

const HomePage = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
  };

  return (
    <div className="bg-gray-100">
      {/* Navigation Bar */}
      <HeroSection />
      {/* Latest PhotoShoots */}
      <section className="container mx-auto bg-gray-100 py-12 ">
        <h2 className="text-3xl text-center font-bold mb-8 text-lk-blue-600">
          Latest PhotoShoots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.slice(0, showAll ? images.length : 6).map((image) => (
            <Link key={image.id} href={`/gallery/${image.photographerId}`}>
              <ImageCard
                modelImage={image.modelImage}
                modelName={image.modelName}
                photographerName={image.photographerName}
                imageCount={image.imageCount}
              />
            </Link>
          ))}
        </div>
        {!showAll && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleViewMore}
            >
              View More
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
