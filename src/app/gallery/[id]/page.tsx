// GalleryPage.tsx
import Image from "next/image";
import { images } from "../../../../utils/modelData";
import ImageGallery from "../../../components/imagegallery/ImageGallery";
import LK from "../../../../public/LK.png";
import Bridge from "../Icons/Bridge";
import cloudinary from "../../../../utils/cloudinary";
import getBase64ImageUrl from "../../../../utils/generateBlurPlaceholder";
import { ImageProps } from "../../../../utils/types";

// Main Gallery Page component
const GalleryPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params; // Extract photographer ID from params
  const modelInfo = images.find((image) => image.photographerId === id);

  // Fetch images for the specific photographer
  const fetchedImages = await fetchImages(id);

  return (
    <main className="mx-auto max-w-[1960px] p-4 bg-gray-100">
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {/* Info Card */}
        <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-gray-600 px-6 pb-16 pt-64 text-center text-black shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
          {/* Background behind the text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            {modelInfo?.modelImage ? (
              <Image
                src={modelInfo.modelImage}
                alt=""
                width={1920}
                height={1080}
                className="object-cover w-full h-full" // Use object-cover to fill the container
              />
            ) : (
              <Bridge />
            )}
            <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
          </div>
          <Image
            src={LK}
            alt="LK"
            className="object-cover w-1/2 h-auto"
            width={400}
            height={300}
          />
          {/* Card Title */}
          <h1 className="mb-4 mt-8 text-base text-white font-bold uppercase tracking-widest">
            {modelInfo?.modelName}
          </h1>
          {/* Card Description */}
          <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
            This gallery showcases the stunning photo shoot of{" "}
            {modelInfo?.modelName}, beautifully captured by{" "}
            {modelInfo?.photographerName}.
          </p>
          {/* Call to Action Button */}
          <a
            className="pointer z-10 mt-6 rounded-lg border border-black bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-black hover:text-white md:mt-4"
            href="https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary&project-name=nextjs-image-gallery&repository-name=with-cloudinary&env=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,CLOUDINARY_FOLDER&envDescription=API%20Keys%20from%20Cloudinary%20needed%20to%20run%20this%20application"
            target="_blank"
            rel="noreferrer"
          >
            Hire Model
          </a>
        </div>

        {/* Image Gallery */}
        <ImageGallery images={fetchedImages} />
      </div>
    </main>
  );
};

export default GalleryPage;

// Function to fetch images from Cloudinary based on the photographer's ID
const fetchImages = async (photographerId: string): Promise<ImageProps[]> => {
  try {
    const results = await cloudinary.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/${photographerId}`)
      .sort_by("public_id", "desc")
      .max_results(400)
      .execute();

    let reducedResults: ImageProps[] = [];

    for (let i = 0; i < results.resources.length; i++) {
      const result = results.resources[i];
      reducedResults.push({
        id: i,
        height: result.height,
        width: result.width,
        public_id: result.public_id,
        format: result.format,
      });
    }

    const blurImagePromises = results.resources.map((image: ImageProps) => {
      return getBase64ImageUrl(image);
    });

    const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

    for (let i = 0; i < reducedResults.length; i++) {
      reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
    }

    return reducedResults; // Return the reduced results with blur data
  } catch (error) {
    console.error("Error fetching images:", error);
    return []; // Return an empty array on error
  }
};
