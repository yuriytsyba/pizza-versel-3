import React from 'react';
import './card.css';
import { addItem, CartItem, selectCartItemById } from '../../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const typesNames = ['тонкое', 'традиционное'];
type CardProps = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  sizes: number[];
  types: number[];
};
const Card: React.FC<CardProps> = ({ id, imageUrl, title, price, sizes, types }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typesNames[typeIndex],
      size: sizes[sizeIndex],
      count: 0,
    };
    dispatch(addItem(item));
  };

  const [sizeIndex, setSizeIndex] = React.useState(0);
  const [typeIndex, setTypeIndex] = React.useState(0);

  const typesPizza = ['тонкое', 'традиционное'];

  return (
    <div className='card'>
      <Link to={`/pizza/${id}`}>
        <img src={imageUrl} alt='Pizza-foto' />
        <h4 style={{ color: 'black' }}>{title}</h4>
      </Link>
      <div className='card__select'>
        <ul>
          {types.map((value, i) => (
            <li
              key={i}
              onClick={() => setTypeIndex(i)}
              className={typeIndex === i ? 'active' : ''}
              style={{ width: '40%' }}
            >
              {typesPizza[value]}
            </li>
          ))}

          {sizes.map((value, i) => (
            <li key={i} onClick={() => setSizeIndex(i)} className={sizeIndex === i ? 'active' : ''}>
              {value} см.
            </li>
          ))}
        </ul>
      </div>
      <div className='card__down'>
        <p>от {price} $</p>
        <button onClick={onClickAdd}>Добавить {addedCount > 0 && <i>{addedCount}</i>}</button>
      </div>
    </div>
  );
};

export default Card;
