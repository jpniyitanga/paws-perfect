const { json } = require("express");
const { database } = require("../connection");

//
const insertMessage = async (id, sender_id, room_id, message_content) => {
  try {
    const query = `INSERT INTO messages (id, sender_id, room_id, message_content) VALUES($1, $2, $3, $4) RETURNING*`;
    const values = [id, sender_id, room_id, message_content];
    const newMessage = await database.query(query, values);
    return json(newMessage);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { insertMessage };
