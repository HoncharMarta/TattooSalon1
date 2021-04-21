import { Button } from "react-bootstrap";

const PriceItem = (props) => {
  return (
    <div className="PriceItem" id={props.item.id} >
      <div className="PriceItem__inner">
        <div className="PriceItem__price">
          <h3 className="text-white m-0 py-4 PriceItem__price-item">
            ${props.price}
          </h3>
        </div>
        <div className="PriceItem__title">
          <span className="text-large text-white text-uppercase py-1 PriceItem__title-item">
            {props.title}
          </span>
        </div>
        <div className="PriceItem__features">
          <ul>
            <li>Angel tattoos</li>
            <li>Animal Tattoos</li>
            <li>Bird Tattoos</li>
            <li>Butterfly Tattoos</li>
            <li>Celtic Tattoos</li>
            <li>Maori Tattoos</li>
          </ul>
        </div>
        <div className="PriceItem__action">
          <Button variant="outline-dark" size="sm">
            замовити
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceItem;
