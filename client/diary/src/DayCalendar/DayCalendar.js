import Timeline from "./TimeLine/Timeline";
import styles from './DayCalendar.module.css'
import Events from "./Events/Events";

function DayCalendar() {
  return (
    <div className={styles.container}>
      <Timeline/>
      <Events/>
    </div>
  );
}

export default DayCalendar;
