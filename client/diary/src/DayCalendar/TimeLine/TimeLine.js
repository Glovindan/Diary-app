const TimeLine = () => {

  const hoursArr = [];
  for (let i = 0; i < 25; i++) {
    hoursArr.push(i);
  }

  const timeLine = hoursArr.map((hour) =>
    <li key={hour.id}>{hour + ":00"}</li>
  )

  return (
    <div>
      <ul>
        {timeLine}
      </ul>
    </div>
  )
}

export default TimeLine;