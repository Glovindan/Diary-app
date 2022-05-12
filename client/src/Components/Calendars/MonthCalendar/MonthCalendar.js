import styles from './MonthCalendar.module.css'
import DaysLabel from "../CalendarComponents/DaysLabel/DaysLabel";
import MonthEvents from "./MonthEvents/MonthEvents";

function MonthCalendar(props) {
  const {date, handleDayClick} = props;

  const monthArray = [];

  let dayNumber = 1;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      const dayOfMonth = new Date(date.getFullYear(),date.getMonth(),dayNumber);
      const dayOfWeek = (6 + dayOfMonth.getDay()) % 7;
      if(dayOfWeek === j && dayOfMonth.getMonth() === date.getMonth()) {
        monthArray.push(dayOfMonth);
        dayNumber++;
      } else {
        monthArray.push("");
      }
    }
  }

  const days = monthArray.map((day, index) =>
     <div className={styles.day} key={index}>{day ? <MonthEvents date={day} handleDayClick={handleDayClick}/> : ""}</div>//replace with Event container
  )

  return (
    <div className={styles.container}>
      <DaysLabel/>
      <div className={styles.monthContainer}>
        {days}
      </div>
    </div>
  )
}

export default MonthCalendar;
