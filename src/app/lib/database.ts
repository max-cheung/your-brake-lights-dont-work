'use server';

import mysql, { ConnectionOptions } from 'mysql2/promise';

const dbConfig: ConnectionOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
}

let dbConnection: any;

export async function connectDB() {
  if(!dbConnection) {
    dbConnection = await mysql.createConnection(dbConfig);
    console.log(`Connected to MYSQL Database: ${process.env.DB_NAME}`);
  }
  return dbConnection;
}

export async function GET() {
  // connect to db
  const db = await connectDB();

  try {
    const query = "SELECT * FROM vehicles"
    const result = await db.execute(query);

    console.log(result[0]);
  } catch (error) {
    console.error(error);
  }
}

export async function createPost(formData: FormData) {
  // connect to db
  const db = await connectDB();

  // brakes boolean set to 1 as default for reporting "brakes" as problem
  const brakes = 1;
  const license_plate = formData.get('license');

  const sql = 'INSERT INTO vehicles (license_plate, brakes) VALUES (?, ?)';

  console.log(license_plate);
  try {
    const result = await db.execute(sql, [license_plate, brakes]);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}