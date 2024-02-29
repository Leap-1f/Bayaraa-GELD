import { Header } from "../components/Header";
import { GoDotFill } from "react-icons/go";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className=" flex justify-center w-full h-[92%] bg-slate-100">
        <div className="flex flex-col gap-[3%] container mt-[2%]">
          <div className="flex h-[20%] w-full gap-[2%] *:bg-white *:rounded-2xl">
            <div className="w-[32%] h-full "></div>
            <div className="w-[32%] h-full ">
              <div className="flex justify-center items-center h-[25%] border-b-[2px]">
                <div className="flex w-[80%] gap-[10px]">
                  <div className=" flex justify-center items-center">
                    <GoDotFill className=" fill-green-500" />
                  </div>
                  <div className=" font-bold text-[18px]">Your income</div>
                </div>
              </div>
              <div className=" flex flex-col gap-[10px] h-[75%] pl-[45px]">
                <div className=" font-bold text-[30px] mt-[10px]">
                  1,200,000 &#8366;
                </div>
                <div className=" text-gray-400">Your Income Amount</div>
                <div className="flex gap-[10px]">
                  <div className="flex justify-center items-center">
                    <FaCircleArrowUp className=" fill-green-600" />
                  </div>
                  <div className="">32% from last month</div>
                </div>
              </div>
            </div>
            <div className="w-[32%] h-full ">
              <div className="flex justify-center items-center h-[25%] border-b-[2px]">
                <div className="flex w-[80%] gap-[10px]">
                  <div className=" flex justify-center items-center">
                    <GoDotFill className=" fill-blue-500" />
                  </div>
                  <div className=" font-bold text-[18px]">Total Expenses</div>
                </div>
              </div>
              <div className=" flex flex-col gap-[10px] h-[75%] pl-[45px]">
                <div className=" font-bold text-[30px] mt-[10px]">
                  - 1,200,000 &#8366;
                </div>
                <div className=" text-gray-400">Your Income Amount</div>
                <div className="flex gap-[10px]">
                  <div className="flex justify-center items-center">
                    <FaCircleArrowDown className=" fill-green-600" />
                  </div>
                  <div className="">32% from last month</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[30%] w-full gap-[2%] *:bg-white *:rounded-2xl">
            <div className=" w-[49%] h-full">
              <div className="flex justify-center items-center h-[25%] border-b-[2px]">
                <div className="flex w-[80%] gap-[10px]">
                  <div className=" font-bold text-[18px]">Income - Expense</div>
                </div>
              </div>
              <div className="h-[75%]"></div>
            </div>
            <div className=" w-[49%] h-full"></div>
          </div>
          <div className="w-full bg-white rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}
