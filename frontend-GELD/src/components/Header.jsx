import { Logo } from "./icons/LogoIcons";
import { BsPlusLg } from "react-icons/bs";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex justify-center items-center w-full h-[8%]">
      <div className="flex justify-between container">
        <div className="flex justify-center items-center gap-[24px] *:cursor-pointer">
          <div>
            <Logo w={"28"} h={"28"} />
          </div>
          <Link href={"/dashboard"}>
            <div className=" text-[18px] text-slate-500">Dashboard</div>
          </Link>
          <Link href={"/records"}>
            <div className="text-[18px] text-slate-500">Records</div>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-[24px]">
          <div>
            <button className="btn bg-blue-500 text-white rounded-3xl hover:bg-blue-500">
              <BsPlusLg />
              Record
            </button>
          </div>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
