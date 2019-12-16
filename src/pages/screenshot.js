import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
  "https://i.ibb.co/4sPC32f/image.png",
  "https://i.ibb.co/Dwj7BjP/image-1.png",
  "https://i.ibb.co/k9659RJ/image-6.png",

];

function App() {
  const [index, setIndex] = React.useState(0);


  return (
    <Gallery
      style={{
        background: "white",
        height: "100vh",
        width: "100vw"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
  );
}

export default App