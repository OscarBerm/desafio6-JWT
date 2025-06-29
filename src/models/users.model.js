import format from 'pg-format'
import pool from '../../db/config.js'
import bcrypt from 'bcryptjs'

export const createUserModel = async (email, password, rol, lenguage) => {
    const hashedPassword = bcrypt.hashSync(password)
    const query = format(
        'INSERT INTO usuarios (email, password, rol, lenguage) VALUES (%L, %L, %L, %L) RETURNING email, rol, lenguage', 
        email, 
        hashedPassword, 
        rol, 
        lenguage)
    const res = await pool.query(query)
    return res.rows[0]
}

export const getUserModel = async (email) => {
    const query = format(
        'SELECT email, rol, lenguage FROM usuarios WHERE email = %L',
        email
    )
    const res = await pool.query(query)
    return res.rows
}