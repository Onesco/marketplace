import Item from '../items';


interface IItemListing {
  position:string
}

const numItems :IItemListing[] =[
  {position:'one'},
  {position:'two'},
  {position:'three'},
  {position:'four'},
  {position:'five'}
]


export default function ItemListing () {
  return (
    <div>
      {renderItems(numItems)}
    </div>
  );
}

const renderItems = (itemListing:IItemListing[]) => {
  return itemListing.map( (eachItem:IItemListing) => <Item pos ={eachItem.position}/>)
}