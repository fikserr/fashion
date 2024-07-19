import Container from '../../layout/container'
import notFound from '../../images/notfound.png'
import styles from './error.module.scss'

function Error() {
  return (
    <div className={styles.error}>
          <Container className={styles.error__container}>
                  <img src={notFound} alt="notfound" className={styles.error__image}/>
          </Container>

    </div>
  )
}

export default Error