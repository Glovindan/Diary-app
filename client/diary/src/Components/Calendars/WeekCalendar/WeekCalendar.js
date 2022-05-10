import styles from './WeekCalendar.module.css'
import HourSection from "../CalendarComponents/TimeLine/HourSection/HourSection";
import EventSection from "../CalendarComponents/TimeLine/EventSection/EventSection";
import DayEvents from "../CalendarComponents/DayEvents/DayEvents";
import DaysLabel from "../CalendarComponents/DaysLabel/DaysLabel";

function getWeek(date) {
  const dayNumber =  (6 + date.getDay()) % 7;
  const weekArr = [];

  for (let i = 0; i < 7; i++) {
    const day = new Date(date);
    day.setDate(date.getDate() - dayNumber + i);
    weekArr.push(day)
  }

  return weekArr;
}

function WeekCalendar(props) {
  const date = new Date(Date.now());// from props

  const hoursArr = [...Array(24)];
  const weekArr = getWeek(date);

  const hoursSection = hoursArr.map((hour, index) =>
    <HourSection key={index} hour={index}/>
  )
  const eventsSection = hoursArr.map((hour, index) =>
    <EventSection key={index}/>
  )
  const weekDays = weekArr.map((dayDate, index) =>
    <div className={styles.eventsWrapper} key={index}>
      <ul>
        {eventsSection}
      </ul>
      <DayEvents date={dayDate}/>
    </div>
  )

  return (
    <div>
      <div className={styles.daysLabelContainer}>
        <DaysLabel/>
      </div>

      <div className={styles.calendarContainer}>
        <ul className={styles.hoursWrapper}>
          {hoursSection}
        </ul>

        {weekDays}
      </div>
    </div>
  )
}

export default WeekCalendar;
