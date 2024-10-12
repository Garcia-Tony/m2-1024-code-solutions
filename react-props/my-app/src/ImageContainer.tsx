type Props = {
  text: string;
};

import './ImageContainer.css';

export function ImageContainer({ text }: Props) {
  return <img src={text} />;
}
