import React from 'react';
import Categories from '../components/categories/Categories';
import Sorting from '../components/sorting/Sorting';
import Card from '../components/card/Card';
import Sceleton from '../components/card/Sceleton';
import Pagination from '../components/pagination';
import { useSelector, useDispatch } from 'react-redux';
import {
  FilterSliseState,
  selectFilter,
  selectFilterSort,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { currentPage, categoryId, searchValue, sort } = useSelector(selectFilter);
  const sortType = useSelector(selectFilterSort);

  //const [isLoading, setIsLoading] = React.useState(true);

  const { items, status } = useSelector(selectPizzaData);

  const getPizzas = async () => {
    // setIsLoading(true);

    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, currentPage]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as FilterSliseState;
      dispatch(setFilters({ ...params }));
      isSearch.current = true;
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);

  const sceletons = [...new Array(5)].map((_, index) => <Sceleton key={index} />);
  const pizzas = items.map((obj: any) => <Card key={obj.id} {...obj} />);

  const onClickCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  return (
    <>
      <div className='header__down'>
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sorting value={sort} />
      </div>
      <h2>Все пиццы</h2>
      {status === 'error' ? (
        <div>
          <h2>Ошибка при загрузке пицц</h2>
        </div>
      ) : (
        <div className='cards'>{status === 'loading' ? sceletons : pizzas}</div>
      )}

      <Pagination
        currentPage={currentPage}
        onChangePage={(page: number) => dispatch(setCurrentPage(page))}
      />
    </>
  );
};

export default Home;
