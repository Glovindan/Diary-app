const db = require('../db')

class EventController {
  async createEvent(req, res) {
    const {type, beginDateTime, topic} = req.body;
    const endDateTime = req.body.endDateTime === 'null' ? null : req.body.endDateTime;
    const place = req.body.place === 'null' ? null : req.body.place;

    const newEvent = await db.query(
      `INSERT INTO event (type, begin_timestamp, end_timestamp, place, topic) VALUES($1, $2, $3, $4, $5) RETURNING *`,
      [type, beginDateTime, endDateTime, place, topic]);

    return res.status(201).json(newEvent.rows[0]);
  }

  async getEvents(req, res) {
    const filterQueryArr = [];
    const {type, beginDateTime, endDateTime, place, topic, isDone, offset, limit} = req.query;

    try {
      if (beginDateTime) {
        const beginDateTimeFilter = JSON.parse(beginDateTime);
        if (beginDateTimeFilter.lte) filterQueryArr.push(`begin_timestamp <= '${beginDateTimeFilter.lte}'`)
        if (beginDateTimeFilter.gte) filterQueryArr.push(`begin_timestamp >= '${beginDateTimeFilter.gte}'`)
        if (beginDateTimeFilter.eq) filterQueryArr.push(`begin_timestamp = '${beginDateTimeFilter.eq}'`)
      }

      if (endDateTime) {
        const endDateTimeFilter = JSON.parse(endDateTime);
        if (endDateTime.lte) filterQueryArr.push(`end_timestamp <= '${endDateTimeFilter.lte}'`)
        if (endDateTime.gte) filterQueryArr.push(`end_timestamp >= '${endDateTimeFilter.gte}'`)
        if (endDateTime.eq) filterQueryArr.push(`end_timestamp = '${endDateTimeFilter.eq}'`)
      }

      if (place) {
        const placeFilter = JSON.parse(place);
        if (placeFilter.in) filterQueryArr.push(`place ILIKE '%${placeFilter.in}%'`)
        if (placeFilter.eq) filterQueryArr.push(`place = '${placeFilter.eq}'`)
      }

      if (topic) {
        const topicFilter = JSON.parse(topic);
        if (topicFilter.in) filterQueryArr.push(`topic ILIKE '%${topicFilter.in}%'`)
        if (topicFilter.eq) filterQueryArr.push(`topic = '${topicFilter.eq}'`)
      }
    } catch (e) {
      return res.status(400).json("Неверный формат JSON в строке запроса")
    }

    if (isDone) filterQueryArr.push(`is_done = ${isDone}`);
    if (type) filterQueryArr.push(`type = ${type}`);

    let offsetQueryString = "";
    if (offset) offsetQueryString = ` OFFSET ${parseInt(offset)}`

    let limitQueryString = "";
    if (limit) limitQueryString = ` LIMIT ${limit}`

    let filterQueryString = "";
    if (filterQueryArr.length > 0) {
      filterQueryString = ' WHERE ' + filterQueryArr.join(" AND ")
    }
    console.log(offsetQueryString);

    const events = await db.query(
      'SELECT id, type FROM event' +
      filterQueryString +
      ' ORDER BY begin_timestamp' +
      limitQueryString +
      offsetQueryString
    );

    return res.status(200).json(events.rows);
  }

  async getOneEvent(req, res) {
    const id = req.params.id;
    const event = await db.query('SELECT * FROM event WHERE id = $1', [id]);

    if (event.rows[0]) return res.status(200).json(event.rows[0]);
    return res.status(404).send();
  }

  async updateEvent(req, res) {
    const {id, type, beginDateTime, endDateTime, place, topic, isDone} = req.body;

    const updatedEvent = await db.query(
      'UPDATE event set ' +
      'type = $1, ' +
      'begin_timestamp = $2, ' +
      'end_timestamp = $3, ' +
      'place = $4, ' +
      'topic = $5, ' +
      'is_done = $6 ' +
      'where id = $7 ' +
      'RETURNING *',
      [type, beginDateTime, endDateTime, place, topic, isDone, id]
    );

    return res.status(200).json(updatedEvent.rows[0]);
  }

  async deleteEvent(req, res) {
    const id = req.params.id;

    await db.query('DELETE FROM event WHERE id = $1', [id]);
    return res.status(204).send();
  }
}

module.exports = new EventController();