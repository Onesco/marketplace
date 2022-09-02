import Item from '../items';

interface IItemListing {
  position:string
}

const numItems =[
  {position:'one'},
  {position:'two'},
  {position:'three'},
  {position:'four'},
  {position:''}
]

const renderItems = (itemListing:IItemListing[]) => {
  return itemListing.map( (eachItem) => <Item pos ={eachItem.position}/>)
}

export default function ItemListing () {
  return (
    <div>
      {renderItems(numItems)}
    </div>
  );
}
