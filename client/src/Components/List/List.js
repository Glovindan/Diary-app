import styles from './List.module.css'
import {useEffect, useState} from "react";
import ListEvent from "./ListEvent/ListEvent";

const List = (props) => {
  const [eventsArr, setEventsArr] = useState([]);
  const [topicParam, setTopicParam] = useState(null);
  const [placeParam, setPlaceParam] = useState(null);
  const [typeParam, setTypeParam] = useState(null);

  useEffect(() => {
    const searchParams = [];
    if(topicParam) searchParams.push(`topic={"in":"${topicParam}"}`);
    if(placeParam) searchParams.push(`place={"in":"${placeParam}"}`);
    if(typeParam) searchParams.push(`type=${typeParam}`);

    let searchParamsString = "";
    if(searchParams.length > 0) searchParamsString = "?"+searchParams.join("&");
    
    fetch(`http://localhost:5000/events${searchParamsString}`)
      .then(res => res.json())
      .then(res => setEventsArr(res))
      .catch(e => console.error(e))
  },[topicParam, placeParam, typeParam])

  const handleTopicChange = (ev) => {
    const value = ev.target.value;
    if(value === "") return setTopicParam(null);

    setTopicParam(ev.target.value);
  }

  const handlePlaceChange = (ev) => {
    const value = ev.target.value;
    if(value === "") return  setPlaceParam(null);

    setPlaceParam(ev.target.value);
  }

  const handleTypeSelect = (ev) => {
    const value = ev.target.value;
    if(value === "3") return setTypeParam(null);

    setTypeParam(ev.target.value);
  }

  const events = eventsArr.map((data) => <ListEvent key={data.id} event={data}/>)

  return(
    <div>
      <div className={styles.optionsWrapper}>
        <div>
          <span>Поиск по теме: </span><input type="text" onChange={(ev) => handleTopicChange(ev)}/>
        </div>
        <div>
          <span>Поиск по месту: </span><input type="text" onChange={(ev) => handlePlaceChange(ev)}/>
        </div>
        <div>
          <span>Тип события: </span>
          <select name="type" id="typeSelect" defaultValue={3} onChange={(ev) => handleTypeSelect(ev)}>
            <option value="0">Встреча</option>
            <option value="1">Дело</option>
            <option value="2">Памятка</option>
            <option value="3">Любой</option>
          </select>
        </div>
      </div>
      <div className={styles.eventsWrapper}>
        {events}
      </div>
    </div>
  )
}

export default  List;