'use client'

import { reportLicense, State } from '@/app/lib/action'
import { useActionState, useEffect } from 'react';

export default function Form() {
  const initialState: State = { errors: {}, message: null };

  const [state, formAction] = useActionState(reportLicense, initialState);

  useEffect(() => {
    console.log(JSON.stringify(state));
  }, [state]);

  return (
    <form action={formAction} className="font-[family-name:var(--font-geist-mono)]">
      <label>Report</label>
      <input type="text" id="license" name="license" placeholder="License #" className="text-black" />
      <button type="submit">Submit</button>
    </form>
  );
}