type Props = {
  label: string;
  onClick: () => void;
};

export function ButtonContainer({ label, onClick }: Props) {
  function handleClick() {
    console.log('The button was clicked');
    onClick();
  }
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  );
}
