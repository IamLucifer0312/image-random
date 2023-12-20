import React from "react";

function Celebrities() {
  const [images, setImages] = React.useState([]);
  const [image, setImage] = React.useState(null);

  function getImages() {
    if (images.length >= 30) return;
    for (let i = 1; i <= 30; i++) {
      const image = `/public/Celebrities/image${i}.png`;
      images.push(image);
    }
  }

  React.useEffect(() => {
    getImages();
  }, []);

  function generateRandomImage() {
    console.log(images);
    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      //   console.log(randomIndex);
      const randomImage = images[randomIndex];

      // Remove the selected image from the array
      setImages([
        ...images.slice(0, randomIndex),
        ...images.slice(randomIndex + 1),
      ]);

      // Set state or perform any action with the randomImage
      // For example, set it to a state variable in React
      // this.setState({ currentImage: randomImage });

      // Return the random image or do something with it
      console.log(randomImage);
      return randomImage;
    } else {
      // Handle case when no images are left in the array
      return null;
    }
  }

  function handleImageGeneration() {
    const randomImage = generateRandomImage();
    console.log(randomImage);
    setImage(randomImage);
  }

  return (
    <div className="container">
      {image && <img src={image} alt="Random Image" />}
      <button onClick={handleImageGeneration}>Generate</button>
    </div>
  );
}

export default Celebrities;
