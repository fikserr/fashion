import { useState, useEffect } from "react";
import Container from "../../layout/container";
import styles from "./filter.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { filterByPrice, filterNew, filterWomen, getData } from "../../store/dataSlice";

function Filter() {
  const [active, setActive] = useState("Все");
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const { total, itemPerPage } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getData(`/?limit=${itemPerPage}`));
  }, [dispatch, itemPerPage]);

  function Mens(menText) {
    dispatch(getData(`/?limit=${itemPerPage * total}`)).then(() =>
      dispatch(filterWomen("mens"))
    );
    setActive(menText);
  }
  function Womens(womenText) {
    dispatch(getData(`/?limit=${itemPerPage * total}`)).then(() =>
      dispatch(filterWomen("womens"))
    );
    setActive(womenText);
  }
  function filterDate(dateText) {
    dispatch(getData(`/?limit=${itemPerPage * total}`)).then(() =>
      dispatch(filterNew())
    );
    setActive(dateText);
  }
  const handleFilterByPrice = (price) => {
    dispatch(getData(`/?limit=${itemPerPage * total}`)).then(() =>
    dispatch(filterByPrice({ minPrice, maxPrice })))
    setActive(price);
  };

  function All(allText) {
    dispatch(getData(`/?limit=${itemPerPage}`));
    setActive(allText);
  }

  return (
    <div className={styles.filter}>
      <Container className={styles.filter__container}>
        <div className={styles.filter__buttons}>
          <button
            className={
              active === "Все"
                ? classNames(styles.filter__btn, styles.active)
                : styles.filter__btn
            }
            onClick={(e) => All(e.target.textContent)}
          >
            Все
          </button>
          <button
            className={
              active === "По цене"
                ? classNames(styles.filter__btn, styles.active)
                : styles.filter__btn
            }
            onClick={(e) => handleFilterByPrice(e.target.textContent)}
          >
            По цене
          </button>
          <button
            className={
              active === "Мужские"
                ? classNames(styles.filter__btn, styles.active)
                : styles.filter__btn
            }
            onClick={(e) => Mens(e.target.textContent)}
          >
            Мужские
          </button>
          <button
            className={
              active === "Женские"
                ? classNames(styles.filter__btn, styles.active)
                : styles.filter__btn
            }
            onClick={(e) => Womens(e.target.textContent)}
          >
            Женские
          </button>
          <input
            type="text"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            placeholder="Minimal price"
            className={styles.filter__btn}
          />
          <input
            type="text"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            placeholder="Maximal price"
            className={styles.filter__btn}
          />
        </div>
        <button className={styles.filter__btn}>
          Общее кол-во товаров-{total}
        </button>
      </Container>
    </div>
  );
}

export default Filter;
