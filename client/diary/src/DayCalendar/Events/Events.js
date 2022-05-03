import styles from './Events.module.css'
import Event from "./Event/Event";

const Events = (props) => {

  const data = [
    {
      beginTime : new Date(0,0,0,6,40),
      endTime : new Date(0,0,0,10,30),
      topic : "Очень важная встреча с важными людьми",
      place : "Майская 23"
    },
    {
      beginTime : new Date(0,0,0,10,40),
      endTime : new Date(0,0,0,12,30),
      topic : "Чето там",
      place : "Удмуртская 228"
    },
    {
      beginTime : new Date(0,0,0,15,40),
      endTime : new Date(0,0,0,23,30),
      topic : "Чето там",
      place : "Удмуртская 228"
    },
    {
      beginTime : new Date(0,0,0,0,0),
      endTime : new Date(0,0,0,0,30),
      topic : "Бегит",
      place : "ЫЫЫЫЫЫЫ"
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

export default Events