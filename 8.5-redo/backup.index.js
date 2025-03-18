import express from 'express';
import database,{ dbCheck } from './database/connection.js';

const env = process.env.NODE_ENV;
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

dbCheck();

app.post('/register', async function(req, res){
    try {
        const data = req.body;
    
        const emailQuery = {
            text: 'SELECT 1 FROM "Users" WHERE email = $1',
            values: [data.email],
        }
        const emailRes = await database.query(emailQuery);

        const usernameQuery = {
            text: 'SELECT 1 FROM "Users" WHERE username = $1',
            values: [data.username],
        }
        const usernameRes = await database.query(usernameQuery);

        if (emailRes.rows.length > 0 && usernameRes.rows.length > 0){
            return res.status(400).json({"message":"Email and username already exists"});
        } else if (emailRes.rows.length > 0){
            return res.status(400).json({"message":"Email already exists"});
        } else if (usernameRes.rows.length > 0){
            return res.status(400).json({"message":"Username already exists"});
        }
        // Insert the new user
        const insertQuery = {
            text: 'INSERT INTO "Users" (email, password, username) VALUES ($1, $2, $3) RETURNING *',
            values: [data.email, data.password, data.username],
        };
        const dbRes = await database.query(insertQuery);
        return res.status(201).json(dbRes.rows[0]); // Return the newly inserted user
    
    } catch (error) {
        console.error(error);
        return res.status(500).json({"message":"Internal Server Error"});
    }
});

app.listen(port, function(){
    console.log(`Server is running on port ${port}, env: ${env}`);
});
