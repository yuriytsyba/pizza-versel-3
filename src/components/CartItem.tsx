import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, CartItem, minusItem, removeItem } from '../redux/slices/cartSlice';

type CartItemProps = {
  id: string;
  size: number;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
  type: string;
};
const CartItemBlock: React.FC<CartItemProps> = ({
  id,
  size,
  title,
  price,
  imageUrl,
  count,
  type,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItem));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className='cart__item'>
      <img style={{ width: 80, height: 80, marginRight: 15 }} src={imageUrl} alt='' />
      <div className='cart__item-block'>
        <h4 className='cart__item__title'>{title}</h4>
        <b className='cart__item__desc'>
          {type}, {size} см.
        </b>
      </div>
      <button
        className='btn__minus'
        disabled={count === 1}
        onClick={onClickMinus}
        style={{ background: 'none', border: 'none' }}
      >
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='16' cy='16' r='15' fill='white' stroke='#FE5F1E' strokeWidth='2' />
          <path
            d='M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 15.04H15.0402Z'
            fill='#FE5F1E'
          />
        </svg>
      </button>
      <span className='cart__item-counter'>{count}</span>
      <button onClick={onClickPlus} style={{ background: 'none', border: 'none', marginRight: 93 }}>
        <img src='img/plus.svg' alt='' />
      </button>
      <span style={{ marginRight: 93 }}>{price * count} $</span>
      <button onClick={onClickRemove} style={{ background: 'none', border: 'none' }}>
        <img src='/img/close.svg' alt='' />
      </button>
    </div>
  );
};
export default CartItemBlock;
