import database from '../database/connection.js';

const query = `
CREATE TABLE IF NOT EXISTS "Links" (
    id SERIAL PRIMARY KEY,
    actual_link TEXT,
    shortened_link VARCHAR(120),
    created_by INTEGER,
    FOREIGN KEY (created_by) REFERENCES "Users"(id)
);`

async function createLinkTable(){
    try {
        // RESOLVE
        // resolve the promise if the async operation is succesfull
        const dbRes =  await database.query(query);
        // console.log(dbRes);
        console.log("Link Table created");
    } catch (error) {
        
        // REJECT
        // reject the promise if the async operation fails
        console.error("Error  creating link table");
        console.error(error);
    } finally {
        // SETTLE
        // resolve the promise if the async operation is succesfull or fails
        console.log('function createLinkTable() has been called');
    }

}

export default createLinkTable;