import Timeline from "./TimeLine/Timeline";
import styles from './DayCalendar.module.css'

function DayCalendar() {
  return (
    <div className={styles.container}>
      <div>
        <Timeline/>
      </div>
    </div>
  );
}

export default DayCalendar;
