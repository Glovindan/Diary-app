import styles from './DayCalendar.module.css'
import DayEvents from "../CalendarComponents/DayEvents/DayEvents";
import HourSection from "../CalendarComponents/TimeLine/HourSection/HourSection";
import EventSection from "../CalendarComponents/TimeLine/EventSection/EventSection";

function DayCalendar(props) {
  const {date, toggleAddClick} = props;
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
        <DayEvents date={date} toggleAddClick={toggleAddClick}/>
      </div>
    </div>
  )
}

export default DayCalendar;
