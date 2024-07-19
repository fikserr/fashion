import { useDispatch, useSelector } from 'react-redux';
import styles from './products.module.scss';
import { useEffect, useState } from 'react';
import { getData } from '../../store/dataSlice';
import Container from '../../layout/container';
import ReactPaginate from 'react-paginate';
import Card from '../card';
import Search from '../search';
import Filter from '../filter';
import Loader from '../../ui/loading/';
import { useLocation } from 'react-router';
import Error from '../../pages/error';

function Products() {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(0); 
  const { products,total, itemPerPage } = useSelector(state => state.data);  
  const pages = Math.ceil(total / itemPerPage);
  const {pathname} = useLocation()
  useEffect(() => {
    dispatch(getData(`/?limit=${itemPerPage}&skip=${pageNum * itemPerPage}`));
  }, [dispatch, itemPerPage, pageNum,pathname]);

  function handlePageClick(e) {
    setPageNum(e.selected); 
    console.log(products);
  }
  if (!products) return <Loader/>
  if (!products) return <Error/>
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
          pageCount={pages}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className={styles.products__paginate}
        />
      </Container>
    </div>
  )
}

export default Products;
