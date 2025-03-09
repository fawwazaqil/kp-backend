import database from '../database/connection.js';

export async function getHealth (req, res) {
  try {
    const dbTime = await database.query('SELECT NOW()');
    console.log(dbTime);
    res.json({status: 'OK', dbTime: dbTime.rows[0].now});
  } catch (error) {
    console.error("Health check failed", error);
    res.status(500).json({status: 'ERROR'});
  }


}