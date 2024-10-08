import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';  
import ItemContainer from './components/itemcontainer';
import axios from 'axios';

const App = () => {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
        const response = await axios.get('https://api.mercadolibre.com/sites/MLB/search?q=gamers');
        
        const produtosData = response.data.results.map(produto => ({
          id: produto.id, 
          nome: produto.title,
          preco: produto.price,
          imagem: produto.thumbnail
        }));
        setProdutos(produtosData);
        };
        fetchProdutos().catch
        }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <ItemContainer produtos={produtos} /> 
      </main>
    </div>
  );
};

export default App;






