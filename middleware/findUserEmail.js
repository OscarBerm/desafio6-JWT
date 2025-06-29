import format from 'pg-format'
import pool from '../db/config.js'

const findUserEmail = async (email) => {
  const query = format(
      'SELECT * FROM usuarios WHERE email = %L',
      email
  )
  const res = await pool.query(query)
  return res.rows[0]
}

export { findUserEmail }