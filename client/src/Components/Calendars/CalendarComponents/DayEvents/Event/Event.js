import styles from './Event.module.css'
import {useState} from "react";
import {useEffect} from "react";

const formatTimeString = (timeInt) => {
  if (timeInt < 10) {
    return `0${timeInt}`
  }

  return `${timeInt}`
}

const Event = (props) => {
  const {event, toggleEditClick, getDayEvents} = props;
  const [eventData, setEventData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const deleteEvent = () => {
    fetch(`http://localhost:5000/events/${event.id}`, {
      method: "DELETE"
    })
      .then(() => getDayEvents())
      .catch(e => console.log(e))
  }

  useEffect(() => {
    fetch(`http://localhost:5000/events/${event.id}`)
      .then((res) => res.json())
      .then(data => {
        setEventData({
          id: data.id,
          type: data.type,
          beginDateTime: new Date(data["begin_timestamp"]),
          endDateTime: new Date(data["end_timestamp"]),
          place: data.place,
          topic: data.topic,
          isDone: data["is_done"]
        });
        setIsLoaded(true);
      })

  },[event]);

  const blockStyle = {};
  const eventColor = {};
  let placeElement;
  let endTimeString = "";
  let beginTimeString = "";

  if(isLoaded) {
    const beginTimeHours = eventData.beginDateTime.getHours();
    const beginTimeMinutes = eventData.beginDateTime.getMinutes();
    const beginTimeToMinutes = beginTimeMinutes + beginTimeHours * 60;
    beginTimeString = `${formatTimeString(beginTimeHours)}:${formatTimeString(beginTimeMinutes)}`;
    if (eventData.place) placeElement = <span> {eventData.place}.</span>;

    blockStyle.top = `${beginTimeToMinutes}px`;

    if(event.type !== 2) {
      const endTimeHours = eventData.endDateTime.getHours();
      const endTimeMinutes = eventData.endDateTime.getMinutes();
      const endTimeToMinutes = endTimeMinutes + endTimeHours * 60;
      endTimeString = ` - ${formatTimeString(endTimeHours)}:${formatTimeString(endTimeMinutes)}`;
      blockStyle.height = `${endTimeToMinutes - beginTimeToMinutes}px`;
    } else {
      blockStyle.height = `fit-content`;
    }

    const eventType = event.type;
    switch (eventType) {
      case 0:
        eventColor.background = 'CornFlowerBlue';
        break;
      case 1:
        eventColor.background = 'Gold';
        break;
      case 2:
        eventColor.background = 'LimeGreen';
        break;
      default: break;
    }
  }


  return (
    <div style={blockStyle} className={styles.eventWrapper} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div className={styles.block} style={eventColor}>
        <time>
          {beginTimeString}
          {endTimeString}
        </time>
        <span> {eventData.topic}.</span>
        {placeElement}
      </div>
      {
        isHover
        &&
        <div className={styles.buttonsWrapper}>
          <button className={styles.buttonEdit} onClick={() => toggleEditClick(event)}>Редактировать</button>
          <button className={styles.buttonDelete} onClick={() => deleteEvent()}>Удалить</button>
        </div>
      }
    </div>
  )
}

export default Event