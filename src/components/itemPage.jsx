import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/itemPage.css'
import { CartContext } from './cartContext';

const ItemPage = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [quantidade, setQuantidade] = useState(0);
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    const fetchProduto = async () => {
      const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      setProduto({
        id: response.data.id,
        nome: response.data.title,
        preco: response.data.price,
        imagem: response.data.thumbnail,
        descricao: response.data.description
      });
    };
    fetchProduto().catch();
  }, [id]);

  const incrementar = () => {
    setQuantidade(quantidade + 1);
  };

  const decrementar = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(produto, quantidade); // adiciona ao carrinho
    setQuantidade(0); // reseta o contador
  };

  if (!produto) {
    return <div>Carregando...</div>;
  }
  

return (
    <div className="item-page">
      <div className="product-details">
        <img src={produto.imagem} alt={produto.nome} className="product-image" />
        <div className="product-info">
          <h1 className="product-name">{produto.nome}</h1>
          <p className="product-description">{produto.descricao}</p>
          <span className="price">R${produto.preco.toFixed(2)}</span>
          <div className="contador">
            <button onClick={decrementar}>-</button>
            <span>{quantidade}</span>
            <button onClick={incrementar}>+</button>
          </div>
          <button className="add-cart" onClick={handleAddToCart}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
