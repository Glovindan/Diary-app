import styles from './HourSection.module.css'

const HourSection = (props) => {
  const hour = (props.hour < 10 ? `0${props.hour}:00` : `${props.hour}:00`);

  return (
    <li className={styles.container}>
      <div className={styles.row}>
        <span className={styles.column}>{hour}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.column}/>
      </div>
      <div className={styles.row}>
        <span className={styles.column}/>
      </div>
      <div className={styles.row}>
        <span className={styles.column}/>
      </div>
    </li>
  )
}

export default HourSection;