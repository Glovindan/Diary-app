import styles from './AddEventPopup.module.css'
import {useEffect, useState} from "react";
import CrossButton from "../CrossButton/CrossButton";

const AddEventPopup = (props) => {
  const {event, toggleAddClick} = props;

  const [eventType, setEventType] = useState(0);
  const [beginDateTime, setBeginDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [place, setPlace] = useState("");
  const [topic, setTopic] = useState("");

  const[isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if(eventType === 2) setEndDateTime("");
    if(eventType !== 0) setPlace("");
  },[eventType])

  const addEvent = () => {
    setIsFetching(true);
    const queryEndDateTime = endDateTime === "" ? null : endDateTime;

    fetch('http://localhost:5000/events',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "type": eventType,
        "beginDateTime": beginDateTime,
        "endDateTime": queryEndDateTime,
        "place": place,
        "topic": topic
      })
    })
      .then((res) => {
        setIsFetching(false)
        return res.json();
      })
      .then((json) => console.log(json))
      .catch(e => {
        setIsFetching(false);
        console.log(e);
      })
  }


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          Добавление события
        </div>
        <div className={styles.closeButtonWrapper}>
          <CrossButton handleClick={toggleAddClick}/>
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

      <button onClick={addEvent} disabled={isFetching}>Добавить</button>
    </div>
  )
}

export default AddEventPopup;