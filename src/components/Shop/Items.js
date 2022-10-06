import ShopItem from "./ShopItem";
import "./Items.css";

const Items = (props) => {

    return (
      <div className="container">
        <div className="items" >
          {props.items.map(item => <ShopItem
            itemID={item.id}
            itemName={item.name}
            itemImage={item.image}
            itemPrice={item.price}
            itemDescription={item.description}
        ></ShopItem>)}
        </div>
        </div>)};
    
       
export default Items;
