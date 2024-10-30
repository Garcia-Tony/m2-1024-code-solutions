type Props = {
  label: string[];
  index: number;
  onClick: () => void;
};

export function ToggleSwitch({ onClick, label, index }: Props) {
  const labelClass = `label-${label[index]}`;

  return (
    <div>
      <button onClick={onClick} className={`switch ${labelClass}`}>
        <div className="thumb"></div>
      </button>
      <p>{label[index]}</p>
    </div>
  );
}
