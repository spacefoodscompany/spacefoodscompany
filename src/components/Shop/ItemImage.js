
import './ItemImage.css';

const ItemImage = (props) => {

    return( 
    <img className="item-img" src={props.itemImage} alt="Space Foods Company Shop Item"/>);

};

export default ItemImage;