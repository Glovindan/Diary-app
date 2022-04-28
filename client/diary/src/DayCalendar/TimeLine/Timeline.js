import HourSection from "./HourSection/HourSection";
import styles from './Timeline.module.css'

const Timeline = () => {

  const hoursArr = [];
  for (let i = 0; i < 25; i++) {
    hoursArr.push(i);
  }

  const timeLine = hoursArr.map((hour) =>
    <li key={hour.id}><HourSection hour={hour}/></li>
  )

  return (
    <div>
      <ul className={styles.container}>
        {timeLine}
      </ul>
    </div>
  )
}

export default Timeline;