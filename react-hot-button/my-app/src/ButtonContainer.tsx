type Props = {
  label: string[];
  className: string;
  index: number;
  onClick: () => void;
};

export function ButtonContainer({ onClick, className, label, index }: Props) {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {label}
      </button>
      <p>Clicks: {index}</p>
    </div>
  );
}
