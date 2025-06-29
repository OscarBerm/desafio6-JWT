import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import 'dotenv/config'
import { findUserEmail } from "../../middleware/findUserEmail.js"

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await findUserEmail(email)
        if (!user) {
            return res.status(401).json({ message: 'User not authorized' })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid password' })
        }
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: '120s'
        })
        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { loginUser }