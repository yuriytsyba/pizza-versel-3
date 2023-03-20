import React from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import SearchInput from '../searchInput';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';

const Header = () => {
  const location = useLocation();
  const isMounted = React.useRef(false);
  const { items, totalPrice } = useSelector(selectCart);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <img width='38' src='/img/pizza-logo.svg' alt='Pizza logo' />
        </Link>
        <div>
          <h1>React Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
      {location.pathname !== '/cart' && <SearchInput />}
      {location.pathname !== '/cart' && (
        <div className='header__cart-btn'>
          <Link to='/cart' className='header__cart-btn-link'>
            <span>{totalPrice} $</span>
            <div className='header__cart-btn-line'></div>
            <img width={16} height={16} src='/img/cart.svg' alt='Cart logo' />
            <span>{totalCount}</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
