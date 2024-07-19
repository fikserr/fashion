import styles from './loading.module.scss'

function Loader() {
  return (
    <div className={styles.loading}>
        <span className={styles.loading__box}></span>
    </div>
  )
}

export default Loader