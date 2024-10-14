import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';  
import ItemContainer from './components/itemcontainer';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoriaPage from './components/categoriaPage';
import ItemPage from './components/itemPage';
import { CartProvider } from './components/cartContext';
import CartDetails from './components/cartDetalhes';


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
      <CartProvider>
        <Router basename="/projetoReact">
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemContainer produtos={produtos} />} />
            <Route path="/category/:categoryId" element={<CategoriaPage />} />
            <Route path="/item/:id" element={<ItemPage />} />
            <Route path="/cart" element={<CartDetails />} /> {/* rota para o carrinho */}
          </Routes>
        </Router>
      </CartProvider>
    );
  };

export default App;






