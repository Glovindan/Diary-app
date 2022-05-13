import styles from './DayEvents.module.css'
import Event from "./Event/Event";
import {useEffect, useState} from "react";

const DayEvents = (props) => {
  const {date, toggleAddClick} = props;
  const [eventsArr, setEventsArr] = useState([]);

  useEffect(() => {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    fetch(`http://localhost:5000/events?beginDateTime={"gte":"${startOfDay.toISOString()}","lte":"${endOfDay.toISOString()}"}`)
      .then((res) => res.json())
      .then((json) => {
        setEventsArr(json);
      })
  },[date])

  const events = eventsArr.map(event => <Event event={event} toggleAddClick={toggleAddClick}/>)

  return (
    <div className={styles.container}>
      {events}
    </div>
  )
}

export default DayEvents