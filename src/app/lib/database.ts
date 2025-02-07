'use server'

import mysql, { ConnectionOptions } from 'mysql2/promise';
import { NextResponse } from 'next/server';


const dbConfig: ConnectionOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
}

export async function connectDB() {
  const dbConnection = await mysql.createConnection(dbConfig);
  console.log(`Connected to MYSQL Database: ${process.env.DB_NAME}`);
  return dbConnection;
}

export async function GET() {
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
  const license = formData.get('license');

  console.log(license);
}