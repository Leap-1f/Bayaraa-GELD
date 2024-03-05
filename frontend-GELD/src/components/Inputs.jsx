export const InputsSection = ({ holdertext, type, setState, value }) => {
  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <input
      type={type}
      placeholder={holdertext}
      className="input input-bordered w-full bg-slate-100"
      onChange={handleChange}
      value={value}
    />
  );
};
export const Button = ({ buttonValue, func }) => {
  return (
    <button
      className="btn text-white bg-blue-500 rounded-3xl text-[20px] hover:bg-blue-500 w-full"
      onClick={func}
    >
      {buttonValue}
    </button>
  );
};
