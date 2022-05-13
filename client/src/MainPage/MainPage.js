import styles from './MainPage.module.css'
import Button from "../Components/Button/Button";
import DayCalendar from "../Components/Calendars/DayCalendar/DayCalendar";
import WeekCalendar from "../Components/Calendars/WeekCalendar/WeekCalendar";
import MonthCalendar from "../Components/Calendars/MonthCalendar/MonthCalendar";
import {useEffect, useState} from "react";
import AddEventPopup from "../Components/AddEventPopup/AddEventPopup";
import EditEventPopup from "../Components/EditEventPopup/EditEventPopup";
import List from "../Components/List/List";

const MainPage = () => {
  const MONTH_NAMES_RU = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
  const PAGE_LIMIT = 10;

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
  const [isAddEvent, setIsAddEvent] = useState(false);
  const [isEditEvent, setIsEditEvent] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  const toggleAddClick = () => {
    setIsEditEvent(false);
    setIsAddEvent(!isAddEvent);
  }

  const toggleEditClick = (event = null) => {
    setEventToEdit(event);
    setIsAddEvent(false);
    setIsEditEvent(!isEditEvent);
  }

  const handleDayClick = (dateOfDay) => {
    setMode(0);
    setDate(dateOfDay);
  }

  let calendar;
  let dateLabel;
  switch (mode) {
    case 0:
      calendar = <DayCalendar date={date} toggleEditClick={toggleEditClick}/>;
      dateLabel = `${date.getDate()} ${MONTH_NAMES_RU[date.getMonth()]} ${date.getFullYear()}`;
      break;
    case 1:
      calendar = <WeekCalendar date={date} toggleEditClick={toggleEditClick}/>;
      dateLabel = `${date.getDate()} ${MONTH_NAMES_RU[date.getMonth()]} ${date.getFullYear()}`;
      break;
    case 2:
      calendar = <MonthCalendar date={date} handleDayClick={handleDayClick}/>;
      dateLabel = `${MONTH_NAMES_RU[date.getMonth()]} ${date.getFullYear()}`;
      break;
    case 3:
      calendar = <List/>;
      break;
    default:
      setMode(0);
      break;
  }

  const addEventWindow =
    <div className={styles.popupWrapper}>
      <AddEventPopup toggleAddClick={toggleAddClick} event={eventToEdit}/>
    </div>

  const editEventWindow =
    <div className={styles.popupWrapper}>
      <EditEventPopup toggleEditClick={toggleEditClick} event={eventToEdit}/>
    </div>

  return (
    <div className={styles.container}>
      <div className={styles.topButtonsContainer}>

        <div className={styles.addButtonWrapper}>
          <Button title={"Добавить событие"} onClick={() => toggleAddClick()}/>
        </div>

        <div className={styles.selectorContainer}>
          <Button title={"День"} onClick={() => setMode(0)}/>
          <Button title={"Неделя"} onClick={() => setMode(1)}/>
          <Button title={"Месяц"} onClick={() => setMode(2)}/>
          <Button title={"Список"} onClick={() => setMode(3)}/>
        </div>
      </div>

      <div className={styles.calendarContainer}>
        {calendar}
      </div>

      {mode !== 3 &&
        <div className={styles.dateContainer}>
          <Button title={"Назад"} onClick={() => setDate(changeDate(mode, date, false))}/>
          <span>{dateLabel}</span>
          <Button title={"Вперед"} onClick={() => setDate(changeDate(mode, date, true))}/>
        </div>
      }

      {isAddEvent && addEventWindow}
      {isEditEvent && editEventWindow}
    </div>
  )
}

export default MainPage;