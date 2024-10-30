type Props = {
  id: number;
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
};

export function TopicCard({ title, content, onClick, isActive }: Props) {
  return (
    <div>
      <h3 onClick={onClick} className="click">
        {title}
      </h3>
      {isActive && (
        <b>
          <p className="box">{content}</p>
        </b>
      )}
    </div>
  );
}
