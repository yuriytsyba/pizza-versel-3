import React from 'react';
import './categories.css';

type CategoriesProps = { value: number; onClickCategory: (idx: number) => void };
const Categories: React.FC<CategoriesProps> = React.memo(({ value, onClickCategory }) => {
  const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {category.map((categoryName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
