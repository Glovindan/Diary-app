import styles from './HourSection.module.css'

const HourSection = (props) => {
  const hour = (props.hour < 10 ? `0${props.hour}:00` : `${props.hour}:00`);

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.firstColumn}>{hour}</span>
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