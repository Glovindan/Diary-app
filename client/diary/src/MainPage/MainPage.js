import styles from './MainPage.module.css'
import Button from "../Components/Button/Button";
import DayCalendar from "../Components/Calendars/DayCalendar/DayCalendar";
import WeekCalendar from "../Components/Calendars/WeekCalendar/WeekCalendar";
import MonthCalendar from "../Components/Calendars/MonthCalendar/MonthCalendar";

const MainPage = () => {
  const click = () => {
    alert("Click")
  }
  return (
    <div className={styles.container}>
      <div className={styles.selectorContainer}>
        <Button title={"День"} onClick={click}/>
        <Button title={"Неделя"} onClick={click}/>
        <Button title={"Месяц"} onClick={click}/>
        <Button title={"Список"} onClick={click}/>
      </div>

      <div className={styles.calendarContainer}>
        {/*<DayCalendar/>*/}
        {/*<WeekCalendar/>*/}
        <MonthCalendar/>
      </div>

      <div className={styles.dateContainer}>
        <Button title={"Назад"} onClick={click}/>
        <span>4 май 2022</span>
        <Button title={"Вперед"} onClick={click}/>
      </div>
    </div>
  )
}

export default MainPage;