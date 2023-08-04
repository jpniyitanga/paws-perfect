const { database } = require("../connection");

//
const insertMessage = async (id, sender_id, room_id, message_content) => {
  const queryString = `INSERT INTO messages (id, sender_id, room_id, message_content) VALUES($1, $2, $3, $4) RETURNING *`
  return database.query(queryString, [id, sender_id, room_id, message_content])
  .then(res => {
    console.log(res.rows)
    return res.rows[0]
  })
  .catch(err => console.log(err.message))
}

module.exports = { insertMessage };