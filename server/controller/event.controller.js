const db = require('../db')
class EventController {
  async createEvent(req, res) {
    const {type, beginDateTime, endDateTime, place, topic} = req.body;

    const newEvent = await db.query(
      'INSERT INTO event (type, begin_timestamp, end_timestamp, place, topic) ' +
      'VALUES($1, $2, $3, $4, $5)',
      [type, beginDateTime, endDateTime, place, topic]);

    return res.json(newEvent.rows[0]);
  }

  async getEvents(req, res) {
    const events = await db.query('SELECT * FROM event');

    res.json(events.rows);
  }

  async getOneEvent(req, res) {
    const id = req.params.id;
    const event = await db.query('SELECT * FROM event WHERE id = $1',[id]);

    res.json(event.rows[0]);
  }

  async updateEvent(req, res) {
    const {id, type, beginDateTime, endDateTime, place, topic} = req.body;

    const updatedEvent = await db.query(
      'UPDATE event set ' +
      'type = $1, ' +
      'begin_timestamp = $2, ' +
      'end_timestamp = $3, ' +
      'place = $4, ' +
      'topic = $5 ' +
      'where id = $6 ' +
      'RETURNING *',
      [type, beginDateTime, endDateTime, place, topic, id]);

    return res.json(updatedEvent.rows[0]);
  }

  async deleteEvent(req, res) {
    const id = req.params.id;
    const event = await db.query('DELETE FROM event WHERE id = $1',[id]);

    res.json(event.rows[0]);
  }
}

module.exports = new EventController();