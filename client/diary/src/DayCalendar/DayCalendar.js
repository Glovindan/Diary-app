import Timeline from "./TimeLine/Timeline";
import styles from './DayCalendar.module.css'

function DayCalendar() {
  return (
    <div>
      <div className={styles.container}>
        <Timeline/>
      </div>
    </div>
  );
}

export default DayCalendar;
