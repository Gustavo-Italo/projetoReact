import React, { useContext } from 'react';
import { CartContext } from './cartContext';

const CartDetails = () => {
  const { cartItens, totalPrice, removerCart } = useContext(CartContext);

  return (
    <div className="cart-details">
      <h2>Carrinho</h2>
      {cartItens.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        cartItens.map((item) => (
          <div key={item.id}>
            <img src={item.imagem} alt={item.nome} />
            <h4>{item.nome}</h4>
            <p>Quantidade: {item.quantidade}</p>
            <p>Preço: R${(item.preco * item.quantidade).toFixed(2)}</p>
            <button className='remover-item' onClick={() => removerCart(item.id)}>Excluir</button>
          </div>
        ))
      )}
      <h3>Total: R${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default CartDetails;
