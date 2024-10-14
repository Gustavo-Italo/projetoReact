import React, { useContext } from 'react';
import { CartContext } from './cartContext';

const CartIcon = () => {
  const { totalItems, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-icon">
      <span className="material-symbols-outlined">shopping_cart</span>
      <span>{totalItems} Itens - R${totalPrice.toFixed(2)}</span>
    </div>
  );
};

export default CartIcon;
