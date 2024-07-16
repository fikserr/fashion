import { NavLink } from 'react-router-dom'
import Container from '../../layout/container'
import styles from './basket.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { deleteProducts,addOne, removeOne } from '../../store/basket'

function Basket() {
  const { basket,totalPrice} = useSelector((state) => state.basketData)
  const dispatch = useDispatch()
  const delProduct = (dataId) => dispatch(deleteProducts(dataId))
  const addPlus = (plusId) => dispatch(addOne(plusId))
  const minusOne = (minusId) => dispatch(removeOne(minusId))
  return (
    <div className={styles.basket}>
      <Container className={styles.basket__container}>
        <div className={styles.basket__content}>
          <div className={styles.basket__top}>
            <h5 className={styles.basket__title}>
              Ваш заказ
            </h5>
            <NavLink to="/" className={styles.basket__cancel}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0879 4.55273C16.4239 4.88867 16.4239 5.43333 16.0879 5.76926L5.76535 16.0918C5.42942 16.4278 4.88476 16.4278 4.54883 16.0918C4.21289 15.7559 4.21289 15.2112 4.54883 14.8753L14.8714 4.55273C15.2073 4.2168 15.752 4.2168 16.0879 4.55273Z" fill="#1D1D1F" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.54883 4.55273C4.88476 4.2168 5.42942 4.2168 5.76535 4.55273L16.0879 14.8753C16.4239 15.2112 16.4239 15.7559 16.0879 16.0918C15.752 16.4278 15.2073 16.4278 14.8714 16.0918L4.54883 5.76926C4.21289 5.43333 4.21289 4.88867 4.54883 4.55273Z" fill="#1D1D1F" />
              </svg>
            </NavLink>
          </div>
          <div className={basket.length == 0 ? styles.basket__error : classNames(styles.basket__error, styles.active)}>
            <div className={styles.basket__basket}>
              <svg xmlns="http://www.w3.org/2000/svg" width="105" height="121" viewBox="0 0 105 121" fill="none">
                <path d="M13.625 42.25V103.5C13.625 105.821 14.5469 108.046 16.1878 109.687C17.8288 111.328 20.0544 112.25 22.375 112.25H83.625C85.9456 112.25 88.1712 111.328 89.8122 109.687C91.4531 108.046 92.375 105.821 92.375 103.5V42.25H75.5H31.409H13.625Z" fill="#F4F4F4" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M53.5 18.5C48.1294 18.5 42.9334 20.9227 39.0697 25.3133C35.5085 29.3601 33.2837 34.9769 32.9521 40.75H73.9585C73.6387 34.9651 71.4839 29.3515 67.9303 25.3133C64.0666 20.9227 58.8706 18.5 53.5 18.5ZM76.9625 40.75C76.6409 34.3015 74.2581 27.9628 70.1824 23.3314C65.7945 18.3451 59.799 15.5 53.5 15.5C47.201 15.5 41.2055 18.3451 36.8176 23.3314C32.7496 27.9541 30.2811 34.2894 29.9477 40.75H13.625C12.7966 40.75 12.125 41.4216 12.125 42.25V103.5C12.125 106.218 13.2049 108.826 15.1272 110.748C17.0494 112.67 19.6565 113.75 22.375 113.75H83.625C86.3435 113.75 88.9506 112.67 90.8728 110.748C92.7951 108.826 93.875 106.218 93.875 103.5V42.25C93.875 41.4216 93.2034 40.75 92.375 40.75H76.9625ZM90.875 43.75H15.125V103.5C15.125 105.423 15.8888 107.267 17.2485 108.627C18.6081 109.986 20.4522 110.75 22.375 110.75H83.625C85.5478 110.75 87.3919 109.986 88.7515 108.627C90.1112 107.267 90.875 105.423 90.875 103.5V43.75Z" fill="#F4F4F4" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.5 97C62.9477 97 62.5 96.5523 62.5 96C62.5 93.8962 61.6184 91.867 60.0298 90.362C58.4393 88.8553 56.2713 88 54 88C51.7287 88 49.5607 88.8553 47.9702 90.362C46.3816 91.867 45.5 93.8963 45.5 96C45.5 96.5523 45.0523 97 44.5 97C43.9477 97 43.5 96.5523 43.5 96C43.5 93.3299 44.6201 90.7808 46.5947 88.9101C48.5675 87.0411 51.2321 86 54 86C56.7679 86 59.4325 87.0411 61.4053 88.9101C63.3799 90.7808 64.5 93.3299 64.5 96C64.5 96.5523 64.0523 97 63.5 97Z" fill="#86868B" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M66.2415 66.0343C66.775 65.8914 67.3233 66.208 67.4662 66.7415C67.6626 67.4748 67.9933 68.1333 68.426 68.6647C69.1502 69.5543 70.0832 70.0002 71.0002 70.0002C71.9173 70.0002 72.8503 69.5543 73.5745 68.6647C74.0072 68.1333 74.3379 67.4748 74.5343 66.7415C74.6772 66.208 75.2255 65.8914 75.759 66.0343C76.2925 66.1772 76.6091 66.7255 76.4662 67.259C76.2033 68.2405 75.7516 69.1586 75.1255 69.9275C74.0729 71.2202 72.596 72.0002 71.0002 72.0002C69.4045 72.0002 67.9276 71.2202 66.875 69.9275C66.2489 69.1586 65.7972 68.2405 65.5343 67.259C65.3914 66.7255 65.708 66.1772 66.2415 66.0343Z" fill="#86868B" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2415 66.0343C30.775 65.8914 31.3233 66.208 31.4662 66.7415C31.6626 67.4748 31.9933 68.1333 32.426 68.6647C33.1502 69.5543 34.0832 70.0002 35.0002 70.0002C35.9173 70.0002 36.8503 69.5543 37.5745 68.6647C38.0072 68.1333 38.3379 67.4748 38.5343 66.7415C38.6772 66.208 39.2255 65.8914 39.759 66.0343C40.2925 66.1772 40.6091 66.7255 40.4662 67.259C40.2033 68.2405 39.7516 69.1586 39.1255 69.9275C38.0729 71.2202 36.596 72.0002 35.0002 72.0002C33.4045 72.0002 31.9276 71.2202 30.875 69.9275C30.2489 69.1586 29.7972 68.2405 29.5343 67.259C29.3914 66.7255 29.708 66.1772 30.2415 66.0343Z" fill="#86868B" />
              </svg>
            </div>
            <p className={styles.basket__error_title}>В вашей корзине пока пусто</p>
            <p className={styles.basket__error_txt}>Тут появятся товары, которые вы закажите</p>
            <button className={styles.basket__error_btn}>Повторить прошлый заказ</button>
            <button className={styles.basket__error_btn}>История заказов</button>
            <button className={styles.basket__error_btn}>Авторизоваться</button>
          </div>

          <div className={basket.length == 0 ? classNames(styles.basket__products,styles.active) : styles.basket__products}>
            {basket.map((item) => (

              <div className={styles.basket__products_item} key={item.id}>
                <button className={styles.basket__products_delete} onClick={()=>delProduct(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2547 4.24371C13.5172 4.50616 13.5172 4.93168 13.2547 5.19412L5.19022 13.2586C4.92777 13.5211 4.50225 13.5211 4.23981 13.2586C3.97736 12.9962 3.97736 12.5707 4.23981 12.3082L12.3043 4.24371C12.5668 3.98126 12.9923 3.98126 13.2547 4.24371Z" fill="#1D1D1F" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.23981 4.24371C4.50225 3.98126 4.92777 3.98126 5.19022 4.24371L13.2547 12.3082C13.5172 12.5707 13.5172 12.9962 13.2547 13.2586C12.9923 13.5211 12.5668 13.5211 12.3043 13.2586L4.23981 5.19412C3.97736 4.93168 3.97736 4.50616 4.23981 4.24371Z" fill="#1D1D1F" />
                  </svg>
                </button>

                <div className={styles.basket__products_left}>
                      <img src={item.images} alt={item.name} className={styles.basket__products_image} />
                      <div>
                        <h3 className={styles.basket__products_title}>{item.name}</h3>
                        <p className={styles.basket__products_weight}><span>Вес:</span>{item.weight}</p>
                      </div>
                </div>
                <div className={styles.basket__products_right}>
                  <p className={styles.basket__products_price}>{item.price} грн</p>
                  <div>
                    <button className={styles.basket__products_minus} onClick={()=>minusOne(item.id)}>-</button>
                    <p className={styles.basket__products_quanity}>{item.quantity}</p>
                    <button className={styles.basket__products_plus} onClick={()=>addPlus(item.id)}>+</button>
                  </div>
                </div>

              </div>
            ))}
            <p className={styles.basket__products_limit}>Минимальная сумма заказа 400 грн</p>
          </div>

            <div className={basket.length == 0 ? classNames(styles.basket__bottom,styles.active) : styles.basket__bottom}>
                  <div>
                      <p className={styles.basket__bottom_total}>Итого:</p>
                      <p className={styles.basket__bottom_price}>{totalPrice}<span>грн</span></p>
                  </div>
                  
                  <button className={styles.basket__bottom_btn}>Оформить заказ</button>

            </div>

          

        </div>
      </Container>
    </div>
  )
}

export default Basket