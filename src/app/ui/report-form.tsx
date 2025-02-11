'use client'

import { reportLicense, State } from '@/app/lib/database'
import { useActionState } from 'react';

export default function Form() {
  const initialState: State = { message: null, errors: {} };

  const [state, formAction] = useActionState(reportLicense, initialState);

  console.log(state);
  console.log("hello world");

  return (
    <form action={formAction} className="font-[family-name:var(--font-geist-mono)]">
      <label>Report</label>
      <input type="text" id="license" name="license" placeholder="License #" className="text-black" />
      <button type="submit">Submit</button>
    </form>
  );
}
