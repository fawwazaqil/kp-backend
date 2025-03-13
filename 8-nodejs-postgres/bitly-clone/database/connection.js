import pg from 'pg';
const { Client } = pg;
 
const database = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
})

// Connect immediately
// this is a promise, using .tech() and .catch to handle success and failure
data

export function dbCheck() {
database.connect(function (err) {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected to db')
    }
    });
}
export default database;