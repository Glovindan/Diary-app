import styles from './MonthEvents.module.css'
import MonthEvent from "./MonthEvent/MonthEvent";

function MonthEvents(props) {
  const {date, handleDayClick} = props;
  const eventsArr = [
    {
      type: 0
    },
    {
      type: 1
    },
    {
      type: 2
    },
    {
      type: 0
    },
    {
      type: 2
    },
  ] //fetch from DB

  const events = eventsArr.map((event, index) => <MonthEvent event={event}/>)
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
