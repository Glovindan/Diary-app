import styles from './EditEventPopup.module.css'
import {useEffect, useState} from "react";
import CrossButton from "../CrossButton/CrossButton";

const EditEventPopup = (props) => {
  const formatDate = (date) => {
    if (date === null) return date;

    const d = new Date(date);
    const year = '' + d.getFullYear();
    let month = '' + (d.getMonth() + 1);
    month = month.length > 1 ? month : '0'+ month;
    let day = '' + d.getDate();
    day = day.length > 1 ? day : '0'+ day;
    let hours = '' + d.getHours();
    hours = hours.length > 1 ? hours : '0'+ hours;
    let minutes = '' + d.getMinutes();
    minutes = minutes.length > 1 ? minutes : '0'+ minutes;

    return `${year}-${month}-${day}T${hours}:${minutes}`
  }

  const {event, toggleEditClick} = props;

  const [eventType, setEventType] = useState(0);
  const [beginDateTime, setBeginDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [place, setPlace] = useState("");
  const [topic, setTopic] = useState("");
  const [isDone, setIsDone] = useState(null);

  const[isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if(event) {
      fetch(`http://localhost:5000/events/${event.id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setEventType(data.type);
          setBeginDateTime(formatDate(data["begin_timestamp"]));
          setEndDateTime(formatDate(data["end_timestamp"]));
          setPlace(data.place);
          setTopic(data.topic);
          setIsDone(data["is_done"]);
        })
        .catch(e => {
          setIsFetching(false);
        })
    }
  },[event]);

  useEffect(() => {
    if(eventType === 2) setEndDateTime("");
    if(eventType !== 0) setPlace("");
  },[eventType])

  const editEvent = () => {
    setIsFetching(true);
    const queryEndDateTime = endDateTime === "" ? null : endDateTime;

    fetch('http://localhost:5000/events',{
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": event.id,
        "type": eventType,
        "beginDateTime": beginDateTime,
        "endDateTime": queryEndDateTime,
        "place": place,
        "topic": topic,
        "isDone": isDone
      })
    })
      .then((res) => {
        setIsFetching(false);
        return res.json();
      })
      .then()
      .catch(e => {
        setIsFetching(false);
      })
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          Редактирование события
        </div>
        <div className={styles.closeButtonWrapper}>
          <CrossButton handleClick={toggleEditClick}/>
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.inputElementContainer}>
          <span>Тип события: </span>
          <select
            name="type"
            id="typeSelect"
            onChange={(ev) => setEventType(parseInt(ev.target.value))}
            value={eventType}
          >
            <option value="0">Встреча</option>
            <option value="1">Дело</option>
            <option value="2">Памятка</option>
          </select>
        </div>
        <div className={styles.inputElementContainer}>
          <span>Дата и время начала: </span>
          <input
            type="datetime-local"
            onChange={(ev) => setBeginDateTime(ev.target.value)}
            value={beginDateTime}
          />
        </div>
        <div className={styles.inputElementContainer}>
          <span>Дата и время конца: </span>
          <input
            type="datetime-local"
            disabled={eventType === 2}
            onChange={(ev) => setEndDateTime(ev.target.value)}
            value={endDateTime}
          />
        </div>
        <div className={styles.inputElementContainer}>
          <span>Описание события: </span>
          <textarea
            placeholder="Тема"
            maxLength={200}
            rows={5}
            onChange={(ev) => setTopic(ev.target.value)}
            value={topic}
          />
        </div>
        <div className={styles.inputElementContainer}>
          <span>Место встречи: </span>
          <textarea
            type="text"
            placeholder="Место"
            maxLength={50}
            rows={2}
            disabled={eventType !== 0}
            onChange={(ev) => setPlace(ev.target.value)}
            value={place}
          />
        </div>
      </div>

      <button onClick={() => editEvent()} disabled={isFetching}> Обновить </button>
    </div>
  )
}

export default EditEventPopup;