import { useEffect, useState } from "react";

const Image = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt=""
      className={`${src === currentSrc || !src ? className : `${className} blur-md`} `}
      width={width}
      height={height}
    />
  );
};

export default Image;
