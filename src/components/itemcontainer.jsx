import PropTypes from 'prop-types';
import CardWidget from './cardwidget'; 
import '../css/itemContainer.css';
import { Link } from 'react-router-dom';

const ItemContainer = ({ produtos }) => {
  return (
    <div className="item-container">
      {produtos.map(produto => (
        <Link to={`/item/${produto.id}`} key={produto.id}>
          <CardWidget produto={produto} />
        </Link>
      ))}
    </div>
  );
};

ItemContainer.propTypes = {
  produtos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imagem: PropTypes.string.isRequired,
      nome: PropTypes.string.isRequired,
      preco: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ItemContainer;


