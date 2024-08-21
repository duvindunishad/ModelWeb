// ImageGalleryCard.tsx
import Image from "next/image";
import { ImageProps } from "../../../utils/types";
interface ImageCardProps {
  image: ImageProps;
  onImageClick: (index: number) => void;
  index: number;
  imageRef: (ref: HTMLImageElement) => void;
}

const ImageGalleryCard = ({
  image,
  onImageClick,
  index,
  imageRef,
}: ImageCardProps) => {
  const imageUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720`;

  return (
    <div
      key={image.id}
      className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
      onClick={() => onImageClick(index)}
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
        ref={imageRef} // Attach the ref to the Image component
        sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
      />
    </div>
  );
};

export default ImageGalleryCard;
