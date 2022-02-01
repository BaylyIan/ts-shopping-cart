import React from 'react'

import { Wrapper } from './styles'
import CartItem from '../CartItem'
import { CartItemType } from '../../App'

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id:number) => void;
}

const Cart = ({cartItems, addToCart, removeFromCart}: Props): JSX.Element => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No Items In Cart</p> : null}
            {cartItems?.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
        </Wrapper>
    )
}

export default Cart