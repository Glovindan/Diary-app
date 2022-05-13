const checkDate = (req, res, next) => {
  const {type, beginDateTime, endDateTime} = req.body;

  if (parseInt(type) === 2) {
    return next();
  }

  const begin = new Date(beginDateTime);
  const end = new Date(endDateTime);

  if (begin > end) {
    return res.status(400).json('Дата окончания введена неверно')
  }

  return next();
}

module.exports = checkDate;