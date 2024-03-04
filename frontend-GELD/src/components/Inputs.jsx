export const InputsSection = ({ holdertext, type }) => {
  return (
    <input
      type={type}
      placeholder={holdertext}
      className="input input-bordered w-full bg-slate-100"
    />
  );
};
export const Button = ({ buttonValue }) => {
  return (
    <button className="btn text-white bg-blue-500 rounded-3xl text-[20px] hover:bg-blue-500 w-full">
      {buttonValue}
    </button>
  );
};
