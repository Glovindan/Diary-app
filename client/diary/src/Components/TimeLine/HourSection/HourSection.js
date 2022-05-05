import styles from './HourSection.module.css'

const HourSection = (props) => {
  const hour = (props.hour < 10 ? `0${props.hour}:00` : `${props.hour}:00`);

  return (
    <li className={styles.container}>
      <div className={styles.row}>
        {hour}
      </div>
      <div className={styles.row}>
      </div>
      <div className={styles.row}>
      </div>
      <div className={styles.row}>
      </div>
    </li>
  )
}

export default HourSection;