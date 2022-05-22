import React, { useEffect, useRef, useState } from "react";
const Images = ({ images, largeImages }) => {
  const [index, setIndex] = useState(0);
  const preloads = useRef([]);

  useEffect(() => {
    if (index < images.length - 1) {
      const image = new Image();
      image.src = images[index + 1];
      preloads.current.push(image);
    }
  }, [images, index]);
  return (
    <div>
      <img src={images[index]} alt="" />
      {index > 0 && (
        <button onClick={() => setIndex((prev) => prev - 1)}>prev</button>
      )}
      {index < images.length - 1 && (
        <button onClick={() => setIndex((prev) => prev + 1)}>next</button>
      )}
    </div>
  );
};
export default Images;
