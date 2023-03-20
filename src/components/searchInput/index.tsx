import React from 'react';
import styles from './searchInput.module.css';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const SearchInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateSearchValue = React.useMemo(
    () =>
      debounce((str: string) => {
        dispatch(setSearchValue(str));
      }, 500),
    [setSearchValue],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };
  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder='Поиск пиццы ...'
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.close}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1024 1024'
          role='img'
        >
          <path d='M602.51 512l402.745-402.745a64 64 0 00-90.51-90.51L512 421.49 109.255 18.745a64 64 0 00-90.51 90.51L421.49 512 18.745 914.745a64 64 0 0090.51 90.51L512 602.51l402.745 402.745a64 64 0 0090.51-90.51z' />
        </svg>
      )}
      <svg
        className={styles.search}
        width='15'
        height='15'
        xmlns='http://www.w3.org/2000/svg'
        fillRule='evenodd'
        clipRule='evenodd'
      >
        <path d='M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z' />
      </svg>
    </div>
  );
};

export default SearchInput;
