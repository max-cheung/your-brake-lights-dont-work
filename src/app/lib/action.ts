'use server'

import { z } from 'zod';
import { connectDB } from './database';

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

// Report License POST

const FormSchema = z.object({
  license_plate: z.string().regex(/^[a-zA-Z0-9]{1,7}$/, {
    message: "Please enter a valid license plate #."
  })
});

const ReportLicense = FormSchema;

export type State = {
  errors?: {
    license_plate?: string[];
  };
  message?: string | null;
}

export async function reportLicense(prevState: State, formData: FormData) {
  // connect to db
  const db = await connectDB();

  // brakes boolean set to 1 as default for reporting "brakes" as problem
  const brakes = 1;

  const validatedFields = ReportLicense.safeParse({
    license_plate: formData.get('license')
  })

  if(!validatedFields.success) {
    console.log("error")
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid Fields. Failed to Report License"
    }
  }
   
  const { license_plate } = validatedFields.data;

  const sql = 'INSERT INTO vehicles (license_plate, brakes) VALUES (?, ?)';

  console.log(license_plate);
  try {
    const rows = await db.execute(sql, [license_plate, brakes]);
    console.log(rows);
    // return JSON.parse(JSON.stringify(rows)); 
    return {
      errors: {},
      message: "success"
    }
  } catch (error) {
    console.error(error);
    return {
      // errors: {},
      message: 'failed'
    }
  }
}