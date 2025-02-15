export default function Form() {
  return (
    <form>
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
  );
}
