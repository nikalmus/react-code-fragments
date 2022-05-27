import React, { useEffect, useRef, useState } from "react";
const Images = ({ images, setGrayStripe }) => {
  const [index, setIndex] = useState(0);
  const preloads = useRef([]);
  const imgRef = useRef(null);

  useEffect(() => {
    if (index < images.length - 1) {
      const image = new Image();
      image.src = images[index + 1];
      preloads.current.push(image);
    }
  }, [images, index]);

  const getImgSize = () => {
    const newWidth = imgRef.current.clientWidth;
    setGrayStripe(newWidth);
  };

  return (
    <div>
      <img src={images[index]} alt="" ref={imgRef} onLoad={getImgSize} />
      <div>
        {index > 0 && (
          <button onClick={() => setIndex((prev) => prev - 1)}>prev</button>
        )}
        {index < images.length - 1 && (
          <button onClick={() => setIndex((prev) => prev + 1)}>next</button>
        )}
      </div>
    </div>
  );
};
export default Images;
