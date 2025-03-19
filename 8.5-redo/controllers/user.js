import database from "../database/connection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function register (req, res){
    try {
        const data = req.body;
        // to hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(data.password,salt);

        const query = {
            text: 'INSERT INTO "Users" (email, password, username) VALUES($1,$2,$3) RETURNING *',
            values: [data.email,hashedPassword,data.username],
        }
        const dbRes = await database.query(query);
        
        return res.status(201).json(dbRes.rows[0]); 
        // return res.status(201).json(dbRes.rows[0]); 
        //explore query possibilities to check if user  already exists by email or username, after check then create user

    } catch (error) {
        console.error(error);
        return res.status(500).json({"message":"Internal Server Error123"});
    }
};

async function login (req, res){
    // Aunthentication
    // search email in db
    const data = req.body;

    const querySearchUserByEmail = {
        text: 'SELECT * FROM "Users" WHERE email = $1',
        values: [data.email],
    }
    const dbRes = await database.query(querySearchUserByEmail);
    // if email not exists, return error 404
    // string comparison method:
    const userNotFound = dbRes.rowCount === 0;
    if (userNotFound) {
        return res.status(404).json({"message":"User not found"});
    }

    // if password match, generate jwt token
    // inject data.id into jwt token
    const jwtSecret = process.env.JWT_SECRET;
    const token = jwt.sign({idUser:dbRes.rows[0].id},jwtSecret);
    // string comparison method:
    // if (dbRes.rows[0].password === data.password) {
        // if email exists, compare password
        if (bcrypt.compareSync(data.password, dbRes.rows[0].password)) {
        return res.status(200).json({"message":"Login successful",data:dbRes.rows[0],token});
    }
    else {
            // if password not match, return error 401
        return res.status(401).json({"message":"Invalid password"});
    }
}

// KENA STUDY!!
function privateRoute (req, res){
    const user = req.user;
    return res.status(200).json({"message":"Private content",data:user});

}

async function publicRoute (req, res){
    return res.status(200).json({"message":"Private content"});
}


const userController = {
    register,
    login,
    publicRoute,
    privateRoute,
}
export default userController;

