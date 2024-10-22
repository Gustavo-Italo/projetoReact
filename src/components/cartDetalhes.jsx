import { useContext } from 'react';
import { CartContext } from './cartContext';
import '../css/CartDetails.css'

const CartDetails = () => {
  const { cartItens, totalPrice, removerDoCarrinho, addToCart } = useContext(CartContext);

  const incrementar = (item) => {
    addToCart(item, 1);
  };

  const decrementar = (item) => {
    if (item.quantidade > 1) {
      removerDoCarrinho(item.id, 1);
    } else {
      removerDoCarrinho(item.id, item.quantidade);
    }
  };


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
            <p className='quant'>Quantidade: {item.quantidade}</p>
            <p className='price'>Preço: R${(item.preco * item.quantidade).toFixed(2)}</p>
            <div className='actions'>
              <button onClick={() => decrementar(item)}>-</button>
              <button onClick={() => incrementar(item)}>+</button>
              <button className='remover-item' onClick={() => removerDoCarrinho(item.id, item.quantidade)}>Excluir</button>
            </div>
          </div>
        ))
      )}
      <h3 className='total'>Total: R${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default CartDetails;
