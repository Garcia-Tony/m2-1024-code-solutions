import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSources: string[] = ['/cat.jpg', '/dog.avif'];
const imageCaptions: string[] = ['Cat', 'Dog'];
const imageDescriptions: string[] = ['A cute small kitten', 'A cute tiny dog'];
const buttonLabel = 'Click for Next Image';

export default function App() {
  return (
    <>
      <Header text={headerText} />
      <ImageContainer src={imageSources} />
      <ImageCaption caption={imageCaptions} />
      <ImageDescription desc={imageDescriptions} />
      <ButtonContainer label={buttonLabel} />
    </>
  );
}
