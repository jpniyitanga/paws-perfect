const { database } = require("../connection");

//Need to confirm which input we get from user
const addOwner = async function (email, sub_id) { 

  const queryString = 'INSERT INTO owners (id, first_name, last_name, email, sub_id, photo_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *'
  return database.query(queryString, [id, first_name, last_name, email, sub_id, photo_url])
      .then(res => {
        return res.rows[0];
      })
      .catch(err => {
        console.log(err.message)
      })
}

module.exports = { addOwner };