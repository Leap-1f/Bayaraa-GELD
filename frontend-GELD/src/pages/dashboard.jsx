import { Header } from "../components/Header";
import { GoDotFill } from "react-icons/go";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import { BarChart } from "../components/BarChart";
import { DoughnutChart } from "../components/BarChart";
import { Logo } from "../components/icons/LogoIcons";
import { Geld } from "../components/icons/LogoIcons";
export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className=" flex justify-center w-full h-[92%] bg-slate-100">
        <div className="flex flex-col gap-[3%] container mt-[2%]">
          <div className="flex h-[20%] w-full gap-[2%] *:rounded-2xl">
            <div className="flex flex-col gap-[10px] w-[32%] h-full bg-blue-600 p-[20px]">
              <div className="flex gap-[10px]">
                <div className="flex justify-center items-center">
                  <Logo w={"25"} h={"25"} color={"#ffffff"} />
                </div>
                <div className="flex justify-center items-center">
                  <Geld w={"50"} h={"50"} color={"#ffffff"} />
                </div>
              </div>
              <div className="text-gray-300">Cash</div>
              <div className="text-white text-[30px]">1,000,000</div>
            </div>
            <div className="w-[32%] h-full bg-white">
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
            <div className="w-[32%] h-full bg-white">
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
              <div className="flex justify-center h-[75%]">
                <BarChart />
              </div>
            </div>
            <div className=" w-[49%] h-full">
              <div className="flex justify-center items-center h-[25%] border-b-[2px]">
                <div className="flex justify-between w-[80%] gap-[10px]">
                  <div className=" font-bold text-[18px]">Income - Expense</div>
                  <div className=" text-gray-400">Jun 1 - Nov 30</div>
                </div>
              </div>
              <div className="flex justify-between h-[75%] p-[20px]">
                <div className="">
                  <DoughnutChart />
                </div>
                <div className="grid gap-4 grid-cols-3 grid-rows-5 w-[60%]">
                  <div className="">Bills</div>
                  <div className="">5'000'000 &#8366;</div>
                  <div className=" text-center">15.50%</div>
                  <div className="">Food</div>
                  <div className="">5'000'000 &#8366;</div>
                  <div className="text-center">15.50%</div>
                  <div className="">Shopping</div>
                  <div className="">5'000'000 &#8366;</div>
                  <div className="text-center">15.50%</div>
                  <div className="">Insurance</div>
                  <div className="">5'000'000 &#8366;</div>
                  <div className="text-center">15.50%</div>
                  <div className="">Clothing</div>
                  <div className="">5'000'000 &#8366;</div>
                  <div className="text-center">15.50%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-2xl h-[100px] p-[25px]">
            <div className="flex justify-center items-center border-b-[2px]">
              <div className="flex w-[90%] gap-[10px]">
                <div className=" font-bold text-[18px] mb-[20px]">
                  Last Records
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
