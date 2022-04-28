import styles from './HourSection.module.css'

const HourSection = (props) => {
  return (
    <div>
      <div className={styles.row}>
        <span className={styles.firstColumn}>{props.hour}:00</span>
        <span className={styles.secondColumn}/>
      </div>
      <div className={styles.row}>
        <span className={styles.firstColumn}/>
        <span className={styles.secondColumn}/>
      </div>
      <div className={styles.row}>
        <span className={styles.firstColumn}/>
        <span className={styles.secondColumn}/>
      </div>
      <div className={styles.row}>
        <span className={styles.firstColumn}/>
        <span className={styles.secondColumn}/>
      </div>
    </div>
  )
}

export default HourSection;