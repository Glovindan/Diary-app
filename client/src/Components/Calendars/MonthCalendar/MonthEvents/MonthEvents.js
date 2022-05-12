import styles from './MonthEvents.module.css'
import MonthEvent from "./MonthEvent/MonthEvent";
import {useEffect, useState} from "react";

function MonthEvents(props) {
  const {date, handleDayClick} = props;
  const [eventsArr, setEventsArr] = useState([]);

  useEffect(() => {
    const startOfDay = new Date(date);
    startOfDay.setUTCHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setUTCHours(23, 59, 59, 999);

    fetch(`http://localhost:5000/events?beginDateTime={"gte":"${startOfDay.toISOString()}","lte":"${endOfDay.toISOString()}"}`)
      .then((res) => res.json())
      .then((json) => {
        setEventsArr(json);
      })
  },[date])


  const events = eventsArr.map((event, index) => <MonthEvent key={index} event={event}/>)
  return (
    <div className={styles.container} onClick={() => handleDayClick(date)}>
      <div className={styles.dateContainer}>
        {date.getDate()}
      </div>

      <div className={styles.eventsContainer}>
        {events}
      </div>
    </div>
  )
}

export default MonthEvents;
