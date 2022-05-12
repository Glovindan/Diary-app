const checkDate = (req,res,next) => {
  const {type, beginDateTime, endDateTime} = req.body;
  console.log(type);
  if(type === 2) next();

  const begin = new Date(beginDateTime);
  const end = new Date(endDateTime);

  if(begin > end){
    return res.status(400).json('Дата окончания введена неверно')
  }

  next();
}

module.exports = checkDate;