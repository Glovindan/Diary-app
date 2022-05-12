import styles from './AddEventPopup.module.css'
import Button from "../Button/Button";
import {useState} from "react";

const AddEventPopup = (props) => {
  const {event} = props;
  const [eventType, setEventType] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Добавление события
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.inputElementContainer}>
          <span>Тип события: </span>
          <select name="type" id="typeSelect" onChange={(ev) => setEventType(parseInt(ev.target.value))}>
            <option value="0">Встреча</option>
            <option value="1">Дело</option>
            <option value="2">Памятка</option>
          </select>
        </div>
        <div className={styles.inputElementContainer}>
          <span>Время и дата начала: </span>
          <input type="date"/>
        </div>
        <div className={styles.inputElementContainer}>
          <span>Время и дата конца: </span>
          <input type="date" disabled={eventType === 2}/>
        </div>
        <div className={styles.inputElementContainer}>
          <span>Описание события: </span>
          <input type="text" placeholder={"Тема"}/>
        </div>
        <div className={styles.inputElementContainer}>
          <span>Место встречи: </span>
          <input type="text" placeholder={"Место"} disabled={eventType !== 0}/>
        </div>
      </div>

      <button>Добавить</button>
    </div>
  )
}

export default AddEventPopup;