import "./Shop.css";
import Items from "./Items";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shop = () => {
  const shopItems = [
    {
      id: "raffle-ticket",
      name: "Raffle Ticket",
      price: 5.00,
      image: "/images/raffle.png",
      description: "Qualifies you for our giveaways",
    },
    {
      id: "asteroid-commander",
      name: "Asteroid Commander",
      price: 18.00,
      image: "/images/asteroid.jpeg",
      description: "Blue Asteroid Commander",
    },
    {
      id: "space-scout",
      name: "Space Scout",
      price: 18.0,
      image: "/images/scout.jpeg",
      description: "Blue Space Scout"
    },
    {
      id: "space-sentry",
      name: "Space Sentry",
      price: 18.0,
      image: "/images/sentry.jpeg",
      description: "Red Space Sentry"
    },
    {
      id: "space-ace",
      name: "Space Ace",
      price: 18.0,
      image: "/images/ace.jpeg",
      description: "Red Space Ace"
    },
    {
      id: "space-bombardier",
      name: "Space Bombardier",
      price: 18.0,
      image: "/images/bombardier.jpeg",
      description: "Green Space Bombardier"
    },
    {
      id: "orbit-admiral",
      name: "Orbit Admiral",
      price: 18.0,
      image: "/images/orbit.jpeg",
      description: "Orange Orbit Admiral"
    },
    {
      id: "space-admiral",
      name: "Space Admiral",
      price: 18.0,
      image: "/images/admiral.jpeg",
      description: "Maroon Space Admiral"
    },
    {
      id: "space-navigator",
      name: "Space Navigator",
      price: 18.0,
      image: "/images/navigator.jpeg",
      description: "Light Blue Space Navigator"
    },
    {
      id: "interplanetary-commander",
      name: "Interplanetery Commander",
      price: 18.00,
      image: "/images/interplanetary.jpeg",
      description: "Yellow Interplanetary Commander",
    }
  ];

  return (
    <div className="shop" id="bottles">
      
      <a href="#" class="snipcart-checkout"><FontAwesomeIcon icon={faCartShopping} className="cart" /></a>
      <Items items={shopItems} />
    </div>
  );
};

export default Shop;
