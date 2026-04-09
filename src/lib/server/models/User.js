import { pool } from '$lib/server/db';
import bcrypt from 'bcrypt';

export const UserModel = {
    getByUsername: async (username) => {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE usuario = ?', [username]);
        return rows[0]; 
    },
    register: async (username, password) => {
        const hash = await bcrypt.hash(password, 10);
        return await pool.query('INSERT INTO usuarios (usuario, password) VALUES (?, ?)', [username, hash]);
    },
    comparePassword: async (password, hash) => {
        return await bcrypt.compare(password, hash);
    }
};