import { useDispatch, useSelector } from 'react-redux';
import styles from './products.module.scss'
import { useEffect, useState } from 'react';
import { getData } from '../../store/dataSlice';
import Container from '../../layout/container';
import ReactPaginate from 'react-paginate'
import Card from '../card';
import Search from '../search';
import Filter from '../filter';

function Products() {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1)
  const {products,error,total} = useSelector(state => state.data);  
  console.log(products);
  useEffect(() => {
    dispatch(getData('/?limit=12'));
  }, [error]);

  function handlePageClick(e) {
    setPageNum(e.selected + 1);
    dispatch(getData(`/?limit=12&skip=${pageNum}`))
  }
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

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={total}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className={styles.products__paginate}
        />
      </Container>
    </div>
  )
}

export default Products