import Container from '../../layout/container'
import styles from './filter.module.scss'

function Filter() {
  return (
    <div className={styles.filter}>
        <Container className={styles.filter__container}>
                <button className={styles.filter__btn}>По цене</button>       
                <button className={styles.filter__btn}>Мужские</button>       
                <button className={styles.filter__btn}>Женские</button>       
                <button className={styles.filter__btn}>Новинки</button>       


        </Container>
    </div>
  )
}

export default Filter