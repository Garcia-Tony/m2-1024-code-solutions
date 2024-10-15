import { useState } from 'react';
import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const image = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const captions = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const description = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];
const buttonLabel = 'Click for Next Image';

export function App() {
  const [captionIndex, setCaptionIndex] = useState(0);
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  function handleButtonClick() {
    if (captionIndex >= captions.length - 1) {
      setCaptionIndex(0);
    } else {
      setCaptionIndex(captionIndex + 1);
    }

    if (descriptionIndex >= description.length - 1) {
      setDescriptionIndex(0);
    } else {
      setDescriptionIndex(descriptionIndex + 1);
    }

    if (imageIndex >= image.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  return (
    <>
      <Header text={headerText} />
      <ImageContainer
        onClick={handleButtonClick}
        srcs={image}
        index={imageIndex}
      />
      <ImageCaption
        onClick={handleButtonClick}
        captions={captions}
        index={captionIndex}
      />
      <ImageDescription
        onClick={handleButtonClick}
        descs={description}
        index={descriptionIndex}
      />
      <ButtonContainer label={buttonLabel} onClick={handleButtonClick} />
    </>
  );
}
