import noImage from '../../images/noimage.jpg'
import styles from './card.module.scss'

function Card({ data }) {
  return (
    <div className={styles.card}>
      <img src={data.images ? data.images : noImage} alt={data.title} className={styles.card__images} />
      <p className={styles.card__title}>{data.title}</p>
      <div className={styles.card__bottom}>
        <p className={styles.card__price}>{data.price} $</p>
        <button className={styles.card__button}>
        <svg fill="#000000" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zM736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32z"/></svg>
          <svg fill="#000000" width="24px" height="24px" viewBox="-5 -7 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-check"><path d='M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z' /></svg>
        </button>
      </div>
    </div>
  )
}

export default Card