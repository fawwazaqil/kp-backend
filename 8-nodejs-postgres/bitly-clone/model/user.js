import database from '../database/connection.js';

const query = `
CREATE TABLE IF NOT EXISTS "Users" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(120),
    password VARCHAR(120),
    username VARCHAR(120)
);`

async function createUserTable(){
    try {
        // resolve the promise if the table exists
        const dbRes = await database.query(query);
        console.log(dbRes);
        console.log("Table created successfully");
    } catch (error) {
        // REJECT
        // reject the promise if there is an error
        console.error("Error creating table");
        console.error(error);
    } finally {
        //  SETTLE
        // resolve the promise if async operation is pass or fail
    }
}

export default createUserTable;