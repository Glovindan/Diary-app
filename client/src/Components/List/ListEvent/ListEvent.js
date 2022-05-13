import styles from './ListEvent.module.css'
import {useEffect, useState} from "react";

const ListEvent = (props) => {
  const {event} = props;
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/events/${event.id}`)
      .then(res => res.json())
      .then(data => {
        const beginDateTimeString = new Date(data["begin_timestamp"]).toLocaleString();
        let endDateTimeString;
        if(data["end_timestamp"]) {
          endDateTimeString = new Date(data["end_timestamp"]).toLocaleString();
        }

        setEventData({
          id: data.id,
          type: data.type,
          beginDateTime: beginDateTimeString,
          endDateTime: endDateTimeString,
          place: data.place,
          topic: data.topic,
          isDone: data["is_done"]
        })
      })
      .catch(e => console.error(e))
  },[event])

  return (
    <div className={styles.container}>
      <div className={styles.grayItalic}>
        {eventData.beginDateTime}{eventData.endDateTime ? " - " + eventData.endDateTime : null}
      </div>
      <div>
        {eventData.topic}
      </div>
      <div className={styles.grayItalic}>
        {eventData.place}
      </div>
    </div>
  )
}

export default ListEvent;