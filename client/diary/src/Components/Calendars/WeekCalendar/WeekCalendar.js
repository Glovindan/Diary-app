import styles from './WeekCalendar.module.css'
import HourSection from "../CalendarComponents/TimeLine/HourSection/HourSection";
import EventSection from "../CalendarComponents/TimeLine/EventSection/EventSection";
import DayEvents from "../CalendarComponents/DayEvents/DayEvents";
import DaysLabel from "../CalendarComponents/DaysLabel/DaysLabel";

function getWeek(date) {
  const dayNumber =  (6 + date.getDay()) % 7;
  const daysArr = [];

  for (let i = 0; i < 7; i++) {
    const day = new Date(date);
    day.setDate(date.getDate() - dayNumber + i);
    daysArr.push(day)
  }

  return daysArr;
}

function WeekCalendar(props) {
  const date = new Date(Date.now());// from props

  const hoursArr = [...Array(24)];
  const daysArr = getWeek(date);
  console.log(daysArr);

  const hoursSection = hoursArr.map((hour, index) =>
    <HourSection key={index} hour={index}/>
  )
  const eventsSection = hoursArr.map((hour, index) =>
    <EventSection key={index}/>
  )


  return (
    <div>
      <div className={styles.daysContainer}>
        <DaysLabel/>
      </div>
      <div className={styles.calendarContainer}>
        <ul className={styles.hoursWrapper}>
          {hoursSection}
        </ul>

        <div className={styles.eventsWrapper}>
          <ul>
            {eventsSection}
          </ul>
          <DayEvents/>
        </div>

        <div className={styles.eventsWrapper}>
          <ul>
            {eventsSection}
          </ul>
          <DayEvents/>
        </div>

        <div className={styles.eventsWrapper}>
          <ul>
            {eventsSection}
          </ul>
          <DayEvents/>
        </div>

        <div className={styles.eventsWrapper}>
          <ul>
            {eventsSection}
          </ul>
          <DayEvents/>
        </div>

        <div className={styles.eventsWrapper}>
          <ul>
            {eventsSection}
          </ul>
          <DayEvents/>
        </div>

        <div className={styles.eventsWrapper}>
          <ul>
            {eventsSection}
          </ul>
          <DayEvents/>
        </div>

        <div className={styles.eventsWrapper}>
          <ul>
            {eventsSection}
          </ul>
          <DayEvents/>
        </div>
      </div>
    </div>
  )
}

export default WeekCalendar;
