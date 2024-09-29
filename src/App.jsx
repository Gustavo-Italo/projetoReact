import React from 'react';
import Navbar from './components/navbar';  
import ItemContainer from './components/itemcontainer';
import produtos from './data';

const App = () => {
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






