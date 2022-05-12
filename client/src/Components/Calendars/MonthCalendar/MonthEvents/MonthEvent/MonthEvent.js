import styles from './MonthEvent.module.css'

function MonthEvent(props) {
  const {event} = props;
  const eventType = event.type;
  const eventColor = {};
  let eventTitle = "";
  switch (eventType) {
    case 0:
      eventColor.background = 'CornFlowerBlue';
      eventTitle = "Встреча";
      break;
    case 1:
      eventColor.background = 'Gold';
      eventTitle = "Дело";
      break;
    case 2:
      eventColor.background = 'LimeGreen';
      eventTitle = "Памятка";
      break;
    default: break;
  }

  return (
    <div className={styles.container} style={eventColor}>
      {eventTitle}
    </div>
  )
}

export default MonthEvent;
