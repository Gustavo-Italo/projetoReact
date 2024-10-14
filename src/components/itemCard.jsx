import React, { useState, useContext } from 'react';
import { CartContext } from './cartContext';

const ItemCard = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(produto, quantidade);
  };

  return (
    <div className="item-card">
      <img src={produto.imagem} alt={produto.nome} />
      <h4>{produto.nome}</h4>
      <p>Preço: R${produto.preco.toFixed(2)}</p>
      <input 
        type="number" 
        value={quantidade} 
        onChange={(e) => setQuantidade(Number(e.target.value))} 
        min="1" 
      />
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ItemCard;
