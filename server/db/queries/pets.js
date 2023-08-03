const { database } = require("../connection");
const { json } = require("express");

// Get pets by owner id
const getPetsByOwnerId = async (owner_id) => {
try {
  const pets = await database.query(`SELECT * FROM pets WHERE owner_id = $1;`, [owner_id]);
  return pets.rows;
} catch (error) {
  console.error(error);
}

};
