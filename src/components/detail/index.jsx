import { useDispatch, useSelector } from 'react-redux'
import Container from '../../layout/container'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { setDetail } from '../../store/basket'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import classNames from 'classnames'
import noImage from "../../images/noimage.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './detail.module.scss'
import { NavLink } from 'react-router-dom'


function Detail() {
  const {detailId} = useSelector(state => state.basketData)
  const {products} = useSelector(state => state.data)
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(()=>{
    dispatch(setDetail(products?.filter(item => item.id == id)))
  },[id])
  return (
    <div className={styles.detail}>
      <Container className={styles.detail__container}>
        <NavLink to='/' className={styles.detail__back}>Back</NavLink>
    

          {
            detailId?.map((item)=>(
              <div className={styles.detail__info} key={item.id}>
                    
                    <Swiper navigation={true} modules={[Navigation]} className={styles.detail__mySwiper}>
                      <SwiperSlide><img src={!item.images?.slice(0) ? noImage : item.images?.slice(0)} alt="images" className={styles.detail__info_images}/></SwiperSlide>
                      <SwiperSlide><img src={!item.images?.slice(1) ? noImage : item.images?.slice(1)} alt="images" className={styles.detail__info_images}/></SwiperSlide>
                      <SwiperSlide><img src={!item.images?.slice(2) ? noImage : item.images?.slice(2)} alt="images" className={styles.detail__info_images}/></SwiperSlide>
                    </Swiper>
                    <div className={styles.detail__right}>
                      <div className={styles.detail__images}>
                        <p className={classNames(styles.detail__images_hit, item.status && item.status[0] === "hit" ? styles.active : "")}>{item.status ? item.status[0] : ""}</p>
                        <p className={classNames(styles.detail__images_new, item.status && item.status[1] === "new" ? styles.active : "")}>{item.status ? item.status[1] : ""}</p>
                      </div>
                      <h1 className={styles.detail__title}>{item.title}</h1>
                      <p className={styles.detail__weight}>Brand: {item.brand}</p>
                      <p className={styles.detail__ingridient}>{item.incredients?.join(', ')}</p>
                      <p className={styles.detail__price}>{item.price} <span>$</span></p>

                    </div>

              </div>
            ))
          }






      </Container>
    </div>
  )
}

export default Detail