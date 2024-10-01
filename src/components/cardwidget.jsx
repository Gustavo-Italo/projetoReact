import React, { useState } from 'react';

const CardWidget = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(0);
  const [descricaoVisivel, setDescricaoVisivel] = useState(false);
  const [carregando, setCarregando] = useState(false);


  const VerADescricao = () => {
    if (descricaoVisivel) {
      setDescricaoVisivel(false);
  
    } else {
    
      setCarregando(true);
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000); 
      }).then(() => {
        setDescricaoVisivel(true);
        setCarregando(false); 
      });
    }
  };

  // aqui estou adicinando a função de estoque (caso houver)
  const incrementar = () => {
    if (produto.estoque === undefined || quantidade < produto.estoque) {
      setQuantidade(quantidade + 1);
    }
  };

  const decrementar = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <div className="card-widget">
      <img src={produto.imagem} alt={`Imagem Do ${produto.nome}`} className="product-image"/>
      <h3>{produto.nome}</h3>
      <span className="price">R${produto.preco.toFixed(2)}</span>

      <div className="contador">
        <button onClick={decrementar}>-</button>
        <span>{quantidade}</span>
        <button onClick={incrementar}>+</button>
      </div>

      {produto.estoque !== undefined && quantidade >= produto.estoque && (
  <p className="estoque-limitado">
    Limite de estoque atingido! Temos apenas {produto.estoque} unidades em estoque.
  </p>
)}

  <button onClick={VerADescricao} disabled={carregando}>
    {carregando ? 'carregando' : descricaoVisivel ? 'Esconder Visualização' : 'Visualizar Descrição'}
  </button>

  {descricaoVisivel && <p className='descricao-produto'>{produto.descricao}</p>}
    </div>
  );
};

export default CardWidget;



  