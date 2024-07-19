import { useDispatch, useSelector } from "react-redux";
import noImage from "../../images/noimage.jpg";
import styles from "./card.module.scss";
import { setProducts } from "../../store/basket";
import { useNavigate } from "react-router";

function Card({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { basket } = useSelector((state) => state.basketData);
  const sendProduct = (el) => dispatch(setProducts(el));
  return (
    <div className={styles.card}>
      <img
        src={data.images ? data.thumbnail : noImage}
        alt={data.title}
        className={styles.card__images}
        onClick={()=>navigate(`detail/${data.id}`)}
      />
      <p className={styles.card__title}>{data.title}</p>
      <p className={styles.card__text}>{data.description}</p>
      <div className={styles.card__bottom}>
        <div>
        <p className={styles.card__price}>{data.price} $</p>
        <p className={styles.card__price_discount}>-{data.discountPercentage}% <span>{Math.round(data.price - (data.price * (data.discountPercentage / 100)))} $</span></p>
        </div>
        <button
          className={styles.card__button}
          onClick={() => sendProduct(data)}
        >
          {basket.some((item) => item.id === data.id) ? (
            <svg
              fill="#000000"
              viewBox="-5 -7 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              class="jam jam-check"
            >
              <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z" />
            </svg>
          ) : (
            <svg
              fill="#000000"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zM736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default Card;
