import { useState } from "react";
import Container from "../../layout/container";
import styles from "./filter.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {filterWomen, getData } from "../../store/dataSlice";

function Filter() {
  const [active,setActive] = useState('Все')
  const dispatch = useDispatch()
  const {products,total, itemPerPage} = useSelector(state => state.data)
  console.log(products)
  function Mens(menText) {
    dispatch(getData(`/?limit=${itemPerPage * total}`))
    dispatch(filterWomen('womens'))
    setActive(menText)
  }
  function All(allText) {
    dispatch(getData(`/?limit=${itemPerPage}`))
    setActive(allText)
    console.log(total);
  }
  return (
    <div className={styles.filter}>
      <Container className={styles.filter__container}>
        <div className={styles.filter__buttons}>
        <button className={ active == 'Все' ? classNames(styles.filter__btn,styles.active) : styles.filter__btn} onClick={(e)=>All(e.target.textContent)}>Все</button>
          <button className={ active == 'По цене' ? classNames(styles.filter__btn,styles.active) : styles.filter__btn}>По цене</button>
          <button className={ active == 'Мужские' ? classNames(styles.filter__btn,styles.active) : styles.filter__btn} onClick={(e)=>Mens(e.target.textContent)}>Мужские</button>
          <button className={ active == 'Женские' ? classNames(styles.filter__btn,styles.active) : styles.filter__btn}>Женские</button>
          <button className={ active == 'Новинки' ? classNames(styles.filter__btn,styles.active) : styles.filter__btn}>Новинки</button>       
        </div>
        <button className={styles.filter__btn}>Общее кол-во товаров-52</button>
      </Container>
    </div>
  );
}

export default Filter;
