import pg from 'pg'
const { Client } = pg
 
const database = new Client({
  user: 'fawwazaqil',
  password: '',
  host: '127.0.0.1',
  port: 5432,
  database: 'bitly-clone',
});

export function checkdbConnection() {
  database.connect((err) => {
    if (err) {
      console.error('Database connection error', err.stack);
      process.exit(1);
    } else {
      console.log('Database connected');
    }
  });
};
export default database;