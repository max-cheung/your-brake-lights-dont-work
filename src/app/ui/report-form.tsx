import { createPost } from '@/app/lib/database'

export default function Form() {
  return (
    <form action={createPost} className="font-[family-name:var(--font-geist-mono)]">
      <label>Report</label>
      <input type="text" id="license" name="license" placeholder="License #" className="text-black" />
      <button type="submit">Submit</button>
    </form>
  );
}
