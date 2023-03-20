import React from 'react';
import style from './NotFound.module.css';

const NotFoundComponent = () => {
  return (
    <h1 className={style.root}>
      <span style={{ fontSize: 60 }}>😕</span>
      Ничего не найдено
      <b>К сожалению данная страница отсутствует в нашем интернет-магазине</b>
    </h1>
  );
};
export default NotFoundComponent;
