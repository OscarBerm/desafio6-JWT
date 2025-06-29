import { createUserModel, getUserModel } from "../models/users.model.js";

export const createUser = async (req, res) => {
    try {
        const { email, password, rol, lenguage } = req.body
        const result = await createUserModel(email, password, rol, lenguage)
        res.status(201).json({message: 'User created', user: result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getUserData = async (req, res) => {
    try {
        const user = req.user
        const result = await getUserModel(user)
        if (!result) return res.status(404).json({ message: 'Usuario no encontrado' })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}