import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";

function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__content}>
        <NavLink to="/" className={styles.menu__content_link}>
          <svg
            fill="#000000"
            height="24px"
            width="24px"
            version="1.1"
            id="XMLID_287_"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g id="next">
              <g>
                <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 		" />
              </g>
            </g>
          </svg> Back
        </NavLink>
        <NavLink to="/" className={styles.menu__content_link}>
          Новинки
        </NavLink>
        <NavLink to="/" className={styles.menu__content_link}>
          Категории
        </NavLink>
        <NavLink to="/" className={styles.menu__content_link}>
          Скидки
        </NavLink>
        <NavLink to="/" className={styles.menu__content_link}>
          Контакты
        </NavLink>
        <NavLink to="/" className={styles.menu__content_link}>
          О нас
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
