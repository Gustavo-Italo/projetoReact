import React from 'react';
import Navbar from './components/navbar';  
import ItemContainer from './components/itemcontainer';
import produtos from './data';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <h1>Produtos Disponíveis</h1>
        <ItemContainer produtos={produtos} /> 
      </main>
    </div>
  );
};

export default App;






