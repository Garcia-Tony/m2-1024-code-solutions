import { IoIosArrowBack } from 'react-icons/io';

type Props = {
  onClick: () => void;
};

export function Prev({ onClick }: Props) {
  return (
    <IoIosArrowBack
      onClick={onClick}
      style={{
        color: 'black',
        fontSize: '50px',
        cursor: 'pointer',
        marginTop: '110px',
        alignContent: 'center',
        paddingRight: '50px',
      }}
    />
  );
}
