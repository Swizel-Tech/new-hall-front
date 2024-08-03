import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Image {
  src: string;
  alt: string;
}

interface SlideOutAndInImagesProps {
  images: Image[];
}

const SlideOutAndInImages: React.FC<SlideOutAndInImagesProps> = ({
  images,
}) => {
  const controls = useAnimation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slideOutAndIn = async () => {
    await controls.start({
      x: "-100%",
      opacity: 0,
      transition: { duration: 1 },
    });
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    await controls.start({
      x: "100%",
      transition: { duration: 0 },
    });
    await controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    });
  };

  return (
    <div>
      <motion.div
        animate={controls}
        initial={{ x: 0, opacity: 1 }}
        className="relative m-0 p-0 w-full h-[400px]"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <button
        onClick={slideOutAndIn}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        Next Image
      </button>
    </div>
  );
};

export default SlideOutAndInImages;
