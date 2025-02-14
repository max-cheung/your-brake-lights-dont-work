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