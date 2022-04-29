import HourSection from "./HourSection/HourSection";
import styles from './Timeline.module.css'

const Timeline = () => {

  const hoursArr = [];
  for (let i = 0; i < 25; i++) {
    hoursArr.push(i);
  }

  const timeLine = hoursArr.map((hour) =>
    <HourSection key={hour.id} hour={hour}/>
  )

  return (
    <ul className={styles.container}>
      {timeLine}
    </ul>
  )
}

export default Timeline;