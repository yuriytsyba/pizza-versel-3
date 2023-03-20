import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://6395e48a90ac47c68076de39.mockapi.io/items/` + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при загрузки пиццы!');
        navigate('/');
      }
    }
    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <>'Загрузка...'</>;
  }

  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt='' />
      <h2>{pizza.title}</h2>
      <h4>Цена: {pizza.price} $</h4>
    </div>
  );
};

export default FullPizza;
