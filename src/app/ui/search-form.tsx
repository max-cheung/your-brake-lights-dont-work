'use client'

import { checkLicense, State} from "@/app/lib/action";
import { useActionState, useEffect } from "react";

export default function Form() {
  const initialState: State = { errors: {}, message: null };

  const [state, formAction] = useActionState(checkLicense, initialState);

  return (
    <div className="my-container mt-2">
    <form action={formAction}>
      <label hidden>Check Your License</label>
      <input
        type="text"
        id="checkLicense"
        name="checkLicense"
        className="border-2 rounded-md pl-2 font-[family-name:var(--font-geist-mono)]"
        placeholder="Check License #"
      />
      <button className="font-[family-name:var(--font-geist-mono)] border-2 rounded-md px-2 ml-2">Submit</button>
    </form>
    </div>
  );
}
