import styles from './container.module.scss'
import classNames from "classnames"

function Container({children,className}) {
  return (
    <div className={classNames(styles.container,className)}>
      {children}
    </div>
  )
}

export default Container