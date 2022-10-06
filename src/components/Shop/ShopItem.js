import "./ShopItem.css";
import Card from "../UI/Card";
import ItemImage from "./ItemImage";

const ShopItem = (props) => {
  if (props.itemName !== "Raffle Ticket" && (props.itemName !== "Space Admiral" && 
  props.itemName !== "Space Navigator" &&
  props.itemName !== "Interplanetery Commander")) {
    return (
      <Card className="shop-item">
        <h2>{props.itemName}</h2>
        <div>
          <ItemImage itemImage={props.itemImage} />
          <button
            className="shop-item__button snipcart-add-item"
            data-item-id={props.itemID}
            data-item-price={props.itemPrice}
            data-item-url="/shop"
            data-item-max-quantity="10"
            data-item-description={props.itemDescription}
            data-item-custom1-name="Cap Flavor"
            data-item-custom1-options="Cherry|Grape|Lemon-Lime|Orange|Raspberry"
            data-item-image={props.itemImage}
            data-item-name={props.itemName}
          >
            Add to cart
          </button>
          <div className="shop-item__price">${props.itemPrice}</div>
        </div>
      </Card>
    )
  } else if (props.itemName === "Raffle Ticket") {
    return (
      <Card className="shop-item">
        <h2>{props.itemName}</h2>
        <div>
          <ItemImage itemImage={props.itemImage} />
          <button
            className="shop-item__button snipcart-add-item"
            data-item-id={props.itemID}
            data-item-price={props.itemPrice}
            data-item-url="/shop"
            data-item-max-quantity="10"
            data-item-description={props.itemDescription}
            data-item-image={props.itemImage}
            data-item-name={props.itemName}
          >
            Add to cart
          </button>
          <div className="shop-item__price">${props.itemPrice}</div>
        </div>
      </Card>
    )
  } else {
    return (
      <Card className="shop-item">
        <h2>{props.itemName}</h2>
          <div>
             <ItemImage itemImage={props.itemImage} />
        {/* //   <button
        //     className="shop-item__button snipcart-add-item"
        //     data-item-id={props.itemID}
        //     data-item-price={props.itemPrice}
        //     data-item-url="/shop"
        //     data-item-max-quantity="10"
        //     data-item-description={props.itemDescription}
        //     data-item-image={props.itemImage}
        //     data-item-name={props.itemName}
        //   >
        //     Add to cart
        //   </button> */}
             <div className="shop-item__price">(COMING SOON)</div>
          </div>
      </Card>);
  }
};

export default ShopItem;
