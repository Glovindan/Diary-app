const {Router} = require('express');
const eventController = require('../controller/event.controller')
const router = Router();

router.route('/')
  .post(eventController.createEvent)
  .get(eventController.getEvents)
  .put(eventController.updateEvent)

router.route('/:id')
  .get(eventController.getOneEvent)
  .delete(eventController.deleteEvent)

module.exports = router;