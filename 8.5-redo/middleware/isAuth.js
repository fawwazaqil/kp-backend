import jwt from 'jsonwebtoken';
import database from "../database/connection.js";

async function isAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        
        const token = authHeader.split(' ')[1];
        const jwtSecret = process.env.JWT_SECRET;

        try {
            if (!token) {
                return res.status(401).json({"message":"Unauthorized"});
            }


            const decoded = jwt.verify(token,jwtSecret);

            console.log(decoded);
            const query = {
                text: 'SELECT id,username,email FROM "Users" WHERE id = $1',
                values: [decoded.idUser],
            }
            const dbRes = await database.query(query);

            // if user not found, return error 404
            const userNotFound = dbRes.rowCount === 0;
            if (userNotFound) {
                return res.status(404).json({"message":"User not found"});
            }

            const userData = dbRes.rows[0];
            if (!userData) {
                return res.status(401).json({"message":"Unauthorized"});
            }

            // inject user data into request object (IMPORTANT)
            req.user = userData;
            // call next function
            next();
        } catch (error) {
            return res.status(500).json({"message":"Internal server error"});
        }
    }
}
export default isAuthenticated;