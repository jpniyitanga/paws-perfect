const { database } = require("../connection");

//Need to confirm which input we get from user
const addSitter = async function (email, sub_id) { 

  const queryString = 'INSERT INTO sitters (id, first_name, last_name, photo_url, email, sub_id, accepted_pet_type, availability_dates) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
  return database.query(queryString, [id, first_name, last_name, photo_url, email, sub_id, accepted_pet_type, availability_dates])
      .then(res => {
        return res.rows[0];
      })
      .catch(err => {
        console.log(err.message)
      })
}

module.exports = { addSitter };