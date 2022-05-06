import styles from './DaysLabel.module.css'

function DaysLabel() {
  return (
    <div className={styles.container}>
      <div className={styles.dayLabel}>
        Понедельник
      </div>
      <div className={styles.dayLabel}>
        Вторник
      </div>
      <div className={styles.dayLabel}>
        Среда
      </div>
      <div className={styles.dayLabel}>
        Четверг
      </div>
      <div className={styles.dayLabel}>
        Пятница
      </div>
      <div className={styles.dayLabel}>
        Суббота
      </div>
      <div className={styles.dayLabel}>
        Воскресенье
      </div>
    </div>
  )
}

export default DaysLabel;
