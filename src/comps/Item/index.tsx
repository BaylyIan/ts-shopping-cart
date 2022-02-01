import React from "react";

//styles
import { Wrapper } from "./styles";
import Button from "@material-ui/core/Button";

//types
import { CartItemType } from "../../App";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item = ({ item, handleAddToCart }: Props): JSX.Element => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add tO cart</Button>
    </Wrapper>
  );
};

export default Item;
