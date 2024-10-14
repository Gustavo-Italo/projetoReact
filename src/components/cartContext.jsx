import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItens, setCartItens] = useState([]); // armazena os produtos e suas quantidades que foram adicionadas ao carrinho.

  const addToCart = (produto, quantidade) => {
    if (quantidade <= 0) return;

    const itemExists = cartItens.find(item => item.id === produto.id); // verifica se o produto está sendo adicionado já existe no carrinho, comparando o id do produto.

    if (itemExists) { // caso o produto estiver no carrinho, atualiza a quantidade do produto, somando a quantidade já existente.
      setCartItens(cartItens.map(item =>
        item.id === produto.id
          ? { ...item, quantidade: item.quantidade + quantidade }
          : item
      ));
    } else { // caso ao contrário, cria um novo item com as propriedades do produto
      setCartItens([...cartItens, { ...produto, quantidade }]);
    }
  };

  const totalItens = cartItens.reduce((total, item) => total + item.quantidade, 0); 
  const totalPrice = cartItens.reduce((total, item) => total + item.preco * item.quantidade, 0);

  return (
    <CartContext.Provider value={{ cartItens, addToCart, totalItens, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

