import Timeline from "./TimeLine/Timeline";
import styles from './DayCalendar.module.css'

function DayCalendar() {
  return (
    <div className={styles.container}>
      <div className={styles.timelineContainer}>
        <Timeline/>
      </div>

      <div className={styles.eventsWrapper}>
        <div className={styles.block}>
          <p>8:40 - 10:30</p>
          <p>Очень важная встреча с очень важными людьми</p>
          <p>г.Ижевск ул.Майская д.23</p>
        </div>
      </div>
    </div>
  );
}

export default DayCalendar;
