const checkDate = (req,res,next) => {
  const {beginDateTime, endDateTime} = req.body;
  const begin = new Date(beginDateTime);
  const end = new Date(endDateTime);
  if(!begin > end){
    res.status(400).json('Дата окончания введена неверно')
  }
  next();
}

module.exports = checkDate;