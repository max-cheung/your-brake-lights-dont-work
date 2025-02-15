"use client";

import { reportLicense, State } from "@/app/lib/action";
import { useActionState, useEffect } from "react";

export default function Form() {
  const initialState: State = { errors: {}, message: null };

  const [state, formAction] = useActionState(reportLicense, initialState);
  const str: string = 'hello world'

  useEffect(() => {
    console.log(JSON.stringify(state));
  }, [state]);

  return (
    <>
      <form
        action={formAction}
        className="font-[family-name:var(--font-geist-mono)]"
      >
        <label hidden>Report</label>
        <input
          type="text"
          id="license"
          name="license"
          placeholder="Report License #"
          className="border-2 pl-2 rounded-md"
          // pattern="^(?!\s)(?!.*\s$)[a-zA-Z0-9 ]{1,7}$"
          required
          title="Input a valid license plate."
        />
        <button type="submit" className="border-2 rounded-md px-2 ml-2">Submit</button>
      </form>
      <div>
        {!state.errors && state.message==="Database: Post Request Successful!" && <p className="mt-2 font-[family-name:var(--font-geist-mono)]">Thank you for helping make the roads safer!</p>}
      </div>
      <div className="font-[family-name:var(--font-geist-mono) mt-2 text-red-600">
        {state.errors?.license_plate && <p>{state.errors.license_plate}</p>}
      </div>
    </>
  );
}
