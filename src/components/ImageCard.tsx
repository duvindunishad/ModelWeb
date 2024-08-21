import Image, { StaticImageData } from "next/image";

interface ImageCardProps {
  modelImage: StaticImageData;
  modelName: string;
  photographerName: string;
  imageCount?: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  modelImage,
  modelName,
  photographerName,
  imageCount,
}) => {
  return (
    <div className="max-w-2xl h-96 rounded-lg overflow-hidden shadow-lg m-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer relative">
      {/* Main Image and Labels Container */}
      <div className="relative h-72">
        {/* Top Left Label */}
        <div className="absolute top-0 left-0">
          <Image
            src="/free-label.png"
            alt="Free Label"
            width={50}
            height={50}
            className="w-20 h-20"
          />
        </div>

        {/* Top Right Label */}
        <div className="absolute top-0 right-0">
          <Image
            src="/label-model.png"
            alt="Label Model"
            width={50}
            height={50}
            className="w-20 h-20"
          />
        </div>

        {/* Main Image */}
        <Image
          src={modelImage}
          alt={modelName}
          width={600} // Increased width
          height={400} // Increased height
          className="w-full h-full object-cover"
        />

        {/* Bottom Left HD Label */}
        <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-70 text-white text-xs rounded-tr-lg">
          HD
        </div>

        {/* Bottom Right Image Count */}
        <div className="absolute bottom-0 right-0 p-2 bg-black bg-opacity-70 text-white text-xs rounded-tl-lg">
          {imageCount} Images
        </div>
      </div>

      {/* Model Name and Photographer */}
      <div className="p-4">
        <h2 className="text-lg text-center text-black font-bold">
          {modelName}
        </h2>
        <p className="text-sm text-center text-gray-600">
          Photographed by: {photographerName}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
