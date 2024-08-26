type inputValueType = string | number;

const Box = <T extends inputValueType>({
  label,
  value,
  onChange,
}: {
  label: string;
  value: T;
  onChange: () => void;
}) => {
  return (
    <>
      <form>
        <label>{label}</label>
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Box;
