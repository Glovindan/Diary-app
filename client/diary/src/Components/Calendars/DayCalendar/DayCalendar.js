import styles from './DayCalendar.module.css'
import DayEvents from "../../DayEvents/DayEvents";
import HourSection from "../../TimeLine/HourSection/HourSection";
import EventSection from "../../TimeLine/EventSection/EventSection";

function DayCalendar() {
  const hoursArr = [...Array(24)];

  const hoursSection = hoursArr.map((hour, index) =>
    <HourSection key={index} hour={index}/>
  )
  const eventsSection = hoursArr.map((hour, index) =>
    <EventSection key={index}/>
  )

  return (
    <div className={styles.container}>
      <ul className={styles.hoursWrapper}>
        {hoursSection}
      </ul>

      <div className={styles.eventsWrapper}>
        <ul>
          {eventsSection}
        </ul>
        <DayEvents/>
      </div>
    </div>
  )
}

export default DayCalendar;
