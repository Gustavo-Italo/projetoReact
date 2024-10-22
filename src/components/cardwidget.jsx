import PropTypes from 'prop-types';

const CardWidget = ({ produto }) => { 
  return (
    <div className="card-widget">
      <img src={produto.imagem} alt={`Imagem Do ${produto.nome}`} className="product-image"/>
      <h3 className="product-name">{produto.nome}</h3>
      <span className="price">R${produto.preco.toFixed(2)}</span>
    </div>
  );
};

CardWidget.propTypes = {
  produto: PropTypes.shape({
    imagem: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardWidget;
