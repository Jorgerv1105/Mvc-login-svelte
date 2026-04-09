import { pool } from '$lib/server/db';

export const ProductModel = {
    getAll: async () => {
        const [rows] = await pool.query('SELECT * FROM productos');
        return rows;
    },
    create: async ({ nombre, precio, categoria, stock }) => {
        return await pool.query(
            'INSERT INTO productos (nombre, precio, categoria, stock) VALUES (?, ?, ?, ?)', 
            [nombre, precio, categoria, stock]
        );
    },
    update: async (id, { nombre, precio, categoria, stock }) => {
        return await pool.query(
            'UPDATE productos SET nombre = ?, precio = ?, categoria = ?, stock = ? WHERE id = ?',
            [nombre, precio, categoria, stock, id]
        );
    },
    delete: async (id) => {
        return await pool.query('DELETE FROM productos WHERE id = ?', [id]);
    }
};