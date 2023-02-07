import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from '../component/molecule';
import ListContainer from '../component/template/ListContainer';
import { useGetProductsQuery } from '../store/feature/service/productApiSlice';
import { Loading } from '../component/molecule';

const List = () => {
  const navigate = useNavigate();
  const {
    data,
    isLoading
  } = useGetProductsQuery();

  console.log("isLoading =>", isLoading)

  return (
    <ListContainer>
      {!isLoading && data.map(item => (
        <Card
          key={JSON.stringify(item)}
          image={item.images}
          name={item.name}
          rating={item.rating}
          price={item.price}
          onClick={() => navigate('/detail/' + item.id)}
        />
      ))}
      {isLoading && <Loading />}
    </ListContainer>
  )
}

export default List;