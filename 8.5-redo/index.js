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
        const query = {
            text: 'INSERT INTO "Users" (email, password, username) VALUES($1,$2,$3) RETURNING *',
            values: [data.email,data.password,data.username],
        }
        const dbRes = await database.query(query);
        
        return res.status(201).json(dbRes); 
        // return res.status(201).json(dbRes.rows[0]); 
        //explore query possibilities to check if user  already exists by email or username, after check then create user

    } catch (error) {
        console.error(error);
        return res.status(500).json({"message":"Internal Server Error123"});
    }
});

app.listen(port, function(){
    console.log(`Server is running on port ${port}, env: ${env}`);
});
