const { json } = require("express");
const { database } = require("../connection");

// Function to find a user in either table
const findUser = async(sub_id) => {
  
  try {    

    // Search for the user in owners table
    let result = await database.query(`SELECT * FROM owners WHERE sub_id = $1`, [sub_id]);
    console.log("Result from owners table", result.rows);
    if (result.rowCount > 0) {
      // database.release();
      return result.rows[0];
    }

    // Search for the user in sitters table
    result = await database.query(`SELECT * FROM sitters WHERE sub_id = $1`, [sub_id]);
    // database.release();

    if (result.rowCount > 0) {
      return result.rows[0];
    }

    return null;
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
}

module.exports = {findUser};
