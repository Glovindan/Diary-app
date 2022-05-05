import styles from './WeekCalendar.module.css'
import HourSection from "../TimeLine/HourSection/HourSection";
import EventSection from "../TimeLine/EventSection/EventSection";
import DayEvents from "../DayEvents/DayEvents";

function WeekCalendar() {
  const hoursArr = [...Array(24)];

  const hoursSection = hoursArr.map((hour, index) =>
    <HourSection key={index} hour={index}/>
  )
  const eventsSection = hoursArr.map((hour, index) =>
    <EventSection key={index}/>
  )


  return (
    <div>
      <div className={styles.daysContainer}>
        <div>
          Понедельник
        </div>
        <div>
          Вторник
        </div>
        <div>
          Среда
        </div>
        <div>
          Четверг
        </div>
        <div>
          Пятница
        </div>
        <div>
          Суббота
        </div>
        <div>
          Воскресенье
        </div>
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
