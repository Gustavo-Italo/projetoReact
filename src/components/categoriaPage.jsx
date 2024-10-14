import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemContainer from './itemcontainer';
import axios from 'axios';

const CategoriaPage = () => {
  const { categoryId } = useParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`);
      const produtosData = response.data.results.map(produto => ({
        id: produto.id,
        nome: produto.title,
        preco: produto.price,
        imagem: produto.thumbnail
      }));
      setProdutos(produtosData);
    };
    fetchProdutos().catch();
  }, [categoryId]);

  return <ItemContainer produtos={produtos}  />;
};

export default CategoriaPage;

