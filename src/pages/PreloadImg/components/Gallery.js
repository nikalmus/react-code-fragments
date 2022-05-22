import Images from "./Images";
import { paintings, paintingsLarge } from "../assets";

const Gallery = () => {
  return <Images images={paintings} largeImages={paintingsLarge} />;
};

export default Gallery;
