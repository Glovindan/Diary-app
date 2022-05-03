import styles from './Event.module.css'

const formatTimeString = (timeInt) => {
  if (timeInt < 10) {
    return `0${timeInt}`
  }

  return `${timeInt}`
}

const Event = (props) => {
  const beginTimeHours = props.beginTime.getHours();
  const beginTimeMinutes = props.beginTime.getMinutes();
  const beginTimeToMinutes = beginTimeMinutes + beginTimeHours * 60;

  const endTimeHours = props.endTime.getHours();
  const endTimeMinutes = props.endTime.getMinutes();
  const endTimeToMinutes = endTimeMinutes + endTimeHours * 60;

  const blockSize = {
    marginTop: `${beginTimeToMinutes}px`,
    height: `${endTimeToMinutes - beginTimeToMinutes}px`
  }
  return (
    <div className={styles.eventWrapper}>
      <div className={styles.block} style={blockSize}>
        <span>
          {formatTimeString(beginTimeHours)}:{formatTimeString(beginTimeMinutes)}
          &nbsp;-&nbsp;
          {formatTimeString(endTimeHours)}:{formatTimeString(endTimeMinutes)}.
        </span>
        <span> {props.topic}.</span>
        <span> {props.place}</span>
      </div>
    </div>
  )
}

export default Event