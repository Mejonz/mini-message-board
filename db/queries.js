import { pool } from './pool.js';

export async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    // console.log(rows);
    return rows;
}

export async function insertNewMessage(username, message) {
    await pool.query("INSERT INTO messages (username, message, date) VALUES($1, $2, CURRENT_DATE)", [username, message]);
}

export async function searchForMessage(targetId) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [targetId]);
    // console.log("message details: ", rows);
    return rows;
}