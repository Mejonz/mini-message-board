#! /usr/bin/env node

import { Client } from 'pg';

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
    connectionString: "postgresql://neondb_owner:npg_MC2f7dYntgRD@ep-aged-salad-a7h070zq-pooler.ap-southeast-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
