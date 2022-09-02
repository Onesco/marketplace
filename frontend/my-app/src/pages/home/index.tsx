import ItemListing from './components/itemListing';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
    <div>
      <ItemListing/>
    </div>
  );
}
