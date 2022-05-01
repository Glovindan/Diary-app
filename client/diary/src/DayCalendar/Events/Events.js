import styles from './Events.module.css'
import Event from "./Event/Event";

const Events = (props) => {
  return (
    <div className={styles.container}>
      <Event
        beginTime={new Date(0,0,0,6,40)}
        endTime={new Date(0,0,0,10,30)}
        topic={"Очень важная встреча с важными людьми"}
        place={"Майская 23"}
      />

      <Event
        beginTime={new Date(0,0,0,9,40)}
        endTime={new Date(0,0,0,13,0)}
        topic={"Не очень важная встреча с важными людьми"}
        place={"Майская 24"}
      />
    </div>
  )
}

export default Events