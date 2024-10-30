import './ImageContainer.css';

type Props = {
  srcs: string[];
  index: number;
  onClick: () => void;
};

export function ImageContainer({ srcs, index, onClick }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={onClick}
          className="image-fill"
          src={srcs[index]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
