import styles from './DayEvents.module.css'
import Event from "./Event/Event";

const DayEvents = (props) => {

  const data = [
    {
      id: 0,
      beginTime : new Date(0,0,0,6,40),
      endTime : new Date(0,0,0,10,30),
      topic : "Очень важная встреча с важными людьми",
      place : "Майская 23"
    },
    {
      id: 1,
      beginTime : new Date(0,0,0,10,40),
      endTime : new Date(0,0,0,12,30),
      topic : "Чето там",
      place : "Удмуртская 228"
    },
    {
      id: 2,
      beginTime : new Date(0,0,0,15,40),
      endTime : new Date(0,0,0,23,30),
      topic : "Чето там",
      place : "Удмуртская 228"
    },
    {
      id: 3,
      beginTime : new Date(0,0,0,0,0),
      endTime : new Date(0,0,0,0,30),
      topic : "Бегит",
    },
  ]

  const events = data.map(eventData =>
    <Event
      key = {eventData.id}
      beginTime={eventData.beginTime}
      endTime={eventData.endTime}
      topic={eventData.topic}
      place={eventData.place}
    />
  )

  return (
    <div className={styles.container}>
      {events}
    </div>
  )
}

export default DayEvents