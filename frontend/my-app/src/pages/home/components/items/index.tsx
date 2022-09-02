
export interface IItemProps {
  pos: string;
}

export default function Item ({pos}: IItemProps) {
  return (
    <div>
      {pos}
    </div>
  );
}
