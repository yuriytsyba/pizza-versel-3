import React from 'react';
import './sorting.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectSort, setSort, Sort, SortPropertyEnum } from '../../redux/slices/filterSlice';

type SortingProps = {
  value: Sort;
};

const Sorting: React.FC<SortingProps> = React.memo(({ value }) => {
  const sortRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  type SortItem = {
    name: string;
    sortProperty: SortPropertyEnum;
  };
  const sortAll: SortItem[] = [
    { name: 'популярности DESC', sortProperty: SortPropertyEnum.RATING_DESC },
    { name: 'популярности ASC', sortProperty: SortPropertyEnum.RATING_ASC },
    { name: 'по цене DESC', sortProperty: SortPropertyEnum.PRICE_DESC },
    { name: 'по цене ASC', sortProperty: SortPropertyEnum.PRICE_ASC },
    { name: 'по алфавиту DESC', sortProperty: SortPropertyEnum.TITLE_DESC },
    { name: 'по алфавиту ASC', sortProperty: SortPropertyEnum.TITLE_ASC },
  ];

  const [sortClick, setSortClick] = React.useState(false);

  const sortName = (obj: SortItem) => {
    dispatch(setSort(obj));
    // onChangeSort(i);
    setSortClick(false);
  };

  const sortList = () => {
    setSortClick(!sortClick);
  };
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      //const _event = event as MouseEvent & { path: Node[] };
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) setSortClick(false);
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className='sorting'>
      <h5>Сортировка по:</h5>
      <span onClick={sortList}>{value.name}</span>
      {sortClick && (
        <div className='sorting__menu'>
          <ul>
            {sortAll.map((obj, i) => (
              <li
                key={i}
                onClick={() => sortName(obj)}
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sorting;
