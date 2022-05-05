import styles from './Event.module.css'

const formatTimeString = (timeInt) => {
  if (timeInt < 10) {
    return `0${timeInt}`
  }

  return `${timeInt}`
}

const Event = (props) => {
  const {beginTime, endTime, topic, place} = props;

  const beginTimeHours = beginTime.getHours();
  const beginTimeMinutes = beginTime.getMinutes();
  const beginTimeToMinutes = beginTimeMinutes + beginTimeHours * 60;

  const endTimeHours = endTime.getHours();
  const endTimeMinutes = endTime.getMinutes();
  const endTimeToMinutes = endTimeMinutes + endTimeHours * 60;

  let placeElement;
  if (place) placeElement = <span> {place}.</span>;

  const blockSize = {
    top: `${beginTimeToMinutes}px`,
    height: `${endTimeToMinutes - beginTimeToMinutes}px`
  }

  return (
    <div style={blockSize} className={styles.eventWrapper}>
      <div className={styles.block}>
        <time>
          {formatTimeString(beginTimeHours)}:{formatTimeString(beginTimeMinutes)}
          &nbsp;-&nbsp;
          {formatTimeString(endTimeHours)}:{formatTimeString(endTimeMinutes)}.
        </time>
        <span> {topic}.</span>
        {placeElement}
      </div>
    </div>
  )
}

export default Event