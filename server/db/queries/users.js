const { database } = require("../connection");

const findUser = async (sub_id) => {
  try {
    // Search for the user in the owners table
    const ownerResult = await database.query(`SELECT * FROM owners WHERE sub_id = $1`, [sub_id]);

    if (ownerResult.rowCount > 0) {
      return {
        first_name: ownerResult.rows[0].first_name,
        last_name: ownerResult.rows[0].last_name,
        picture: ownerResult.rows[0].picture,
        sub_id: ownerResult.rows[0].sub_id,
        owner_id: ownerResult.rows[0].id,
        role: "owner"
      };
    }

    // Search for the user in the sitters table
    const sitterResult = await database.query(`SELECT * FROM sitters WHERE sub_id = $1`, [sub_id]);

    if (sitterResult.rowCount > 0) {
      console.log("sitter Result", sitterResult);
      return {
        first_name: sitterResult.rows[0].first_name,
        last_name: sitterResult.rows[0].last_name,
        picture: sitterResult.rows[0].picture,
        sub_id: sitterResult.rows[0].sub_id,
        sitter_id: sitterResult.rows[0].id,
        role: "sitter"
      };
    }
    

    // Return null if the user is not found in both tables
    return null;

  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
}

module.exports = { findUser };