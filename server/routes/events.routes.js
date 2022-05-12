const {Router} = require('express');
const eventController = require('../controller/event.controller')
const checkDate = require("../middleware/validation.middleware");
const router = Router();

router.route('/')
  .post(checkDate, eventController.createEvent)
  .get(eventController.getEvents)
  .put(checkDate, eventController.updateEvent)

router.route('/:id')
  .get(eventController.getOneEvent)
  .delete(eventController.deleteEvent)

module.exports = router;