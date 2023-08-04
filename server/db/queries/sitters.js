const { json } = require("express");
const { database } = require("../connection");

//GET all sitters
const getSitters = async () => {
  try {
    const sitters = await database.query("SELECT * FROM sitters");
    console.log(sitters.rows)
    return sitters.rows;
  } catch (error) {
    console.error(error);
  }
};

//GET a sitter by id
const getSitterById = async (id) => {
  try {
    const selectedSitter = await database.query(
      `SELECT * FROM sitters WHERE id = $1`, [id]);
    // console.log(selectedSitter.rows[0]);
    return selectedSitter.rows[0];
  } catch (error) {
    console.error(error);
  }
};

//GET sitters accepting cats only
const catSitters = async () => {
  try {
    const sitters = await database.query("SELECT * FROM sitters WHERE accepted_pet_type IN('cat')");
    return sitters.rows;
  } catch (error) {
    console.error(error);
  }
};

//GET sitters accepting dogs only
const dogSitters = async () => {
  try {
    const sitters = await database.query("SELECT * FROM sitters WHERE accepted_pet_type IN('dog')");
    return sitters.rows;
  } catch (error) {
    console.error(error);
  }
};


// UPDATE existing sitter
const updateSitterById = async (userId) => {
  try {
    const sitter = await database.getSitterById(userId);
    const queryString = `UPDATE sitters SET first_name=$1, last_name=$2, photo_url=$3, email=$4, sub_id=$5, accepted_pet_type=$6, availability_dates=$7 WHERE id=$8`;
    const values = [
      sitter.first_name,
      user.last_name,
      sitter.photo_url,
      sitter.email,
      sitter.sub_id,
      sitter.accepted_pet_type,
      sitter.availability_dates,
      userId
    ];
    const updatedSitter = await database.query(queryString, values);
    return updatedSitter.rows[0];
  } catch (error) {
    console.error(error);
  }
};

//Need to confirm how to get input from user/form
// CREATE a new sitter
const addSitter = async ({
  first_name,
  last_name,
  photo_url,
  email,
  sub_id,
  accepted_pet_type,
  availability_dates
}) => {
  try {
    const query =
      "INSERT INTO sitters (first_name, last_name, photo_url, email, sub_id, accepted_pet_type, availability_dates) VALUES ($1, $2, $3, $4, $5, $6, $7)";
    const values = [
      first_name,
      last_name,
      photo_url,
      email,
      sub_id,
      accepted_pet_type,
      availability_dates,
    ];
    const newSitter = await database.query(query, values);
    return json(newSitter);
  } catch (error) {
    console.error(error);
  }
};



module.exports = { getSitters, getSitterById, addSitter, updateSitterById };
