import pg from 'pg';
const { Client } = pg
 
const database = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
})

// Connect immediately
//
database.connect()
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('connection error', err.stack));

export function dbCheck() {
    database.connect(function(err){
    if (err) {
        console.error('connection error', err.stack);
    } else {
        console.log(`connected to db: ${process.env.DB_NAME}`);
    }
    });
}

export default database;