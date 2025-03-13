import database from '../database/connection.js';

const query = `
CREATE TABLE IF NOT EXISTS "Users" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(120) UNIQUE,
    password VARCHAR(120),
    username VARCHAR(120) UNIQUE
);`

const queryAlter = `ALTER TABLE "Users" ADD COLUMN 
IF NOT EXISTS "nickname" VARCHAR(120);`

async function createUserTable(){
    try {
        // RESOLVE
        // resolve the promise if the async operation is succesfull
        const dbRes =  await database.query(query);
        const dbResAlter =  await database.query(queryAlter);
        // console.log(dbRes);
        console.log("Table created");
    } catch (error) {
        
        // REJECT
        // reject the promise if the async operation fails
        console.error("Error  creating user table");
        console.error(error);
    } finally {
        // SETTLE
        // resolve the promise if the async operation is succesfull or fails
        console.log('function createUserTable() has been called');
    }

}

export default createUserTable;