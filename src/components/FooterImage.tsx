import Image from "next/image";
import { FC } from "react";

const FooterImage: FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="relative w-full">
        <Image
          src="/footer-shade.png"
          alt="Shade Image"
          width={1920}
          height={100}
          className="mx-auto w-full h-auto"
        />
      </div>
    </footer>
  );
};

export default FooterImage;
