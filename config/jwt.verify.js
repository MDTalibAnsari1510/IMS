import { SECRET } from './config.js';
import jwt from 'jsonwebtoken';
const { verify } = jwt;

//verifeing JWT token.
export const verifyToken = (req, res, next) => {
  let token =  req.headers["authorization"] || req.headers["Authorization"]
  token = token?.replace("Bearer ", "");
  if (!token)
    return res.status(403).send({ success: false, message: "No token provided." });

  const secret = SECRET;
  verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        success: false, message: 'Unauthorized access.'
      });
    } else {
      req.userId = decoded.userId;
      next()
    }
  });
}
