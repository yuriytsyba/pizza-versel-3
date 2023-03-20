import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems, selectCart } from '../redux/slices/cartSlice';
import CartEmpty from '../components/CartEmpty';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);
  const onClickClear = () => {
    if (window.confirm('Are cart remove?')) {
      dispatch(clearItems());
    }
  };
  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className='cart'>
      <div className='cart__top'>
        <div>
          <h1 className='cart__name'>Корзина</h1>
        </div>
        <div onClick={onClickClear}>
          <span className='cart__delete'>Очистить корзину</span>
        </div>
      </div>
      <div className='cart__items'>
        {items.map((item: any) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className='cart__bottom'>
        <h6 style={{ fontSize: 18 }}>
          Всего пицц:{' '}
          <span style={{ fontSize: 26 }}>
            {items.reduce((sum: number, item: any) => sum + item.count, 0)}
          </span>{' '}
          шт.
        </h6>
        <h6 style={{ fontSize: 18 }}>
          Сумма заказа: <span style={{ color: '#FE5F1E', fontSize: 26 }}>{totalPrice}</span> $
        </h6>
      </div>
      <div className='cart__bootom-btns'>
        <Link to='/'>
          <button className='cart__btn-back'>
            <img style={{ marginRight: 10 }} src='/img/line.svg' alt='' />
            Вернуться назад
          </button>
        </Link>

        <button className='cart__btn-pay'>Оплатить сейчас</button>
      </div>
    </div>
  );
};

export default Cart;
