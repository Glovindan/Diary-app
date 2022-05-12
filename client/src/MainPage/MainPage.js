import styles from './MainPage.module.css'
import Button from "../Components/Button/Button";
import DayCalendar from "../Components/Calendars/DayCalendar/DayCalendar";
import WeekCalendar from "../Components/Calendars/WeekCalendar/WeekCalendar";
import MonthCalendar from "../Components/Calendars/MonthCalendar/MonthCalendar";
import {useState} from "react";

const MainPage = () => {
  const MONTH_NAMES_RU = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

  const changeDate = (mode, date, isIncrease) => {
    let increment = isIncrease ? 1 : -1;
    switch (mode) {
      case 0:
        return new Date(date.setDate(date.getDate() + increment));
      case 1:
        return new Date(date.setDate(date.getDate() + increment * 7));
      case 2:
        return new Date(date.setMonth(date.getMonth() + increment));
      default:
        return date;
    }
  }

  const [mode, setMode] = useState(0);
  const [date, setDate] = useState(new Date(Date.now()));

  const handleDayClick = (dateOfDay) => {
    setMode(0);
    setDate(dateOfDay);
  }

  let calendar  = <DayCalendar date={date}/>;
  let dateLabel = `${date.getDate()} ${MONTH_NAMES_RU[date.getMonth()]} ${date.getFullYear()}`;
  switch (mode) {
    case 0:
      calendar = <DayCalendar date={date}/>;
      dateLabel = `${date.getDate()} ${MONTH_NAMES_RU[date.getMonth()]} ${date.getFullYear()}`;
      break;
    case 1:
      calendar = <WeekCalendar date={date}/>;
      dateLabel = `${date.getDate()} ${MONTH_NAMES_RU[date.getMonth()]} ${date.getFullYear()}`;
      break;
    case 2:
      calendar = <MonthCalendar date={date} handleDayClick={handleDayClick}/>;
      dateLabel = `${MONTH_NAMES_RU[date.getMonth()]} ${date.getFullYear()}`;
      break;
    default: break;
  }
  return (
    <div className={styles.container}>
      <div className={styles.selectorContainer}>
        <Button title={"День"} onClick={() => setMode(0)}/>
        <Button title={"Неделя"} onClick={() => setMode(1)}/>
        <Button title={"Месяц"} onClick={() => setMode(2)}/>
        <Button title={"Список"} onClick={() => setMode(3)}/>
      </div>

      <div className={styles.calendarContainer}>
        {calendar}
      </div>

      <div className={styles.dateContainer}>
        <Button title={"Назад"} onClick={() => setDate(changeDate(mode, date, false))}/>
        <span>{dateLabel}</span>
        <Button title={"Вперед"} onClick={() => setDate(changeDate(mode, date, true))}/>
      </div>
    </div>
  )
}

export default MainPage;