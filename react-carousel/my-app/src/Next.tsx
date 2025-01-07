import { IoIosArrowForward } from 'react-icons/io';

type Props = {
  onClick: () => void;
};

export function Next({ onClick }: Props) {
  return (
    <IoIosArrowForward
      onClick={onClick}
      style={{
        color: 'black',
        fontSize: '50px',
        cursor: 'pointer',
        marginTop: '110px',
        paddingLeft: '50px',
      }}
    />
  );
}
