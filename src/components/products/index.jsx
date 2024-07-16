import { useDispatch, useSelector } from 'react-redux';
import styles from './products.module.scss'
import { useEffect, useState } from 'react';
import { getData } from '../../store/dataSlice';
import Container from '../../layout/container';
import Card from '../card';
import Search from '../search';
import Filter from '../filter';

function Products() {
  const dispatch = useDispatch();
  const {products,error} = useSelector(state => state.data);  
  console.log(products);
  useEffect(() => {
    dispatch(getData(''));
  }, [dispatch,error]);
  return (
    <div className={styles.products}>
      <Container className={styles.products__container}>
            <Search/>
            <Filter/>
        <div className={styles.products__cards}>
          {
            products?.map((item) => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Products