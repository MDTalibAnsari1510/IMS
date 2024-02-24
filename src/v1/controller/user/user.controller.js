import { fetchUser, createUser } from '../../service/user.service.js';
import { validationResult } from 'express-validator';
import { TOKENEXPIRETIME, SECRET } from '../../../../config/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Creation of Default User.
const createDefaultUser = async (userName, password) => {
    try {
        const existUser = await fetchUser(userName);
        if (!existUser) {
            const userObj = {
                userName: userName,
                password: bcrypt.hashSync(password, 10)
            }
            const created = createUser(userObj);
            if (created) {
                console.log('Default user created')
            }
        }
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: JSON.stringify(err)
        });
    }
}

//User Login
const userLogIn = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        const user = await fetchUser(req.body.userName);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            let token = jwt.sign({ userId: user._id, userName: user.userName }, SECRET, { expiresIn: TOKENEXPIRETIME });

            return res.status(200).json({
                success: true,
                userName: user.userName,
                token,
            });
        } else {
            return res.status(401).json({ message: "password is wrong" });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: JSON.stringify(err)
        });
    }
}

export { createDefaultUser, userLogIn }