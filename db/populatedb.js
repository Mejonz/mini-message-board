#! /usr/bin/env node
import { loadEnvFile } from 'node:process';
import { Client } from 'pg';

loadEnvFile('./.env.local')

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message TEXT,
  date DATE 
);

INSERT INTO messages (username, message, date) 
VALUES
  ('Amando', 'Hi There', CURRENT_DATE),
  ('Charles', 'Hello World!', CURRENT_DATE);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
