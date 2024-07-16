import { useEffect, useState } from 'react'
import Container from '../../layout/container'
import styles from './search.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/dataSlice';

function Search() {
    const [search,setValue] = useState('')
    const dispatch = useDispatch()
    const {error} = useSelector(state => state.data);  
    console.log(search);
    useEffect(() => {
        dispatch(getData(`search?q=${search}`));
      }, [dispatch,error,search]);
    return (
        <div className={styles.search}>
            <Container className={styles.search__container}>
                <h1 className={styles.search__title}>Fashion</h1>
                <input type="text" 
                className={styles.search__searchInp} 
                placeholder='Search fashions'
                value={search}
                onChange={(e)=>setValue(e.target.value)}
                 />
            </Container>
        </div>
    )
}

export default Search