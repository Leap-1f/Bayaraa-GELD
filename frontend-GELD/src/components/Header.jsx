import { Logo } from "./icons/LogoIcons";
import { BsPlusLg } from "react-icons/bs";
export const Header = () => {
  return (
    <div className="flex justify-center items-center w-full h-[15%]">
      <div className="flex justify-between container">
        <div className="flex justify-center items-center gap-[24px] *:cursor-pointer">
          <div>
            <Logo w={"28"} h={"28"} />
          </div>
          <div className="">Dashboard</div>
          <div>Records</div>
        </div>
        <div className="flex justify-center items-center gap-[24px]">
          <div>
            <button className="btn bg-blue-500 text-white rounded-3xl hover:bg-blue-500">
              <BsPlusLg />
              Record
            </button>
          </div>
          <div>Ava</div>
        </div>
      </div>
    </div>
  );
};
