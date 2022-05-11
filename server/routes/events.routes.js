const {Router} = require('express');

const router = Router();

router.route('/')
  .get(function(req, res) {
    res.send('Get events list');
  })
  .post(function(req, res) {
    res.send('Add event');
  })

router.route('/*')
  .get(function(req, res) {
    const eventId = req.params[0];
    res.send(`Get event ${eventId}`);
  })
  .put(function(req, res) {
    const eventId = req.params[0];
    res.send(`Update event ${eventId}`);
  })
  .delete(function(req, res) {
    const eventId = req.params[0];
    res.send(`Delete event ${eventId}`);
  })

module.exports = router;