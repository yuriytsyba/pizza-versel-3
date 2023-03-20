import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty: React.FC = () => {
  return (
    <>
      <div
        className='cart cart--empty'
        style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', marginTop: 50 }}
      >
        <h2>Корзина пустая</h2>
        <p style={{ fontSize: 20 }}>Вероятней всего ,вы не заказывали еще пиццу.</p>
        <img
          width={300}
          height={300}
          style={{ margin: 'auto' }}
          src='/img/cart2.jpg'
          alt='cart-img'
        />
        <Link to='/'>
          <button className='cart__btn-back'>
            <img style={{ marginRight: 10 }} src='/img/line.svg' alt='' />
            Вернуться назад
          </button>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
