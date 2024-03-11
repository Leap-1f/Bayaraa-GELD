import { Logo } from "./icons/LogoIcons";
import { BsPlusLg } from "react-icons/bs";
import { useRouter } from "next/navigation";
export const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center w-full h-[8%]">
      <div className="flex justify-between container">
        <div className="flex justify-center items-center gap-[24px] *:cursor-pointer">
          <div>
            <Logo w={"28"} h={"28"} color={"#0166FF"} />
          </div>
          <div
            className=" text-[18px] text-slate-500"
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </div>
          <div
            className="text-[18px] text-slate-500"
            onClick={() => router.push("/records")}
          >
            Records
          </div>
        </div>
        <div className="flex justify-center items-center gap-[24px]">
          <div>
            <button className="btn bg-blue-500 text-white rounded-3xl hover:bg-blue-500">
              <BsPlusLg />
              Record
            </button>
          </div>
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
