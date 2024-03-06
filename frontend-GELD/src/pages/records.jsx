import { Header } from "../components/Header";
import { BsPlusLg } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { RangeSlider } from "../components/icons/RangeSlider";
export default function Home() {
  const [isRecordOpen, setIsRecordOpen] = useState(false);
  const openRecord = () => {
    setIsRecordOpen(true);
  };
  const closeRecord = () => {
    setIsRecordOpen(false);
  };
  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <div className="flex justify-center h-[92%] w-full bg-gray-100">
          <div className=" flex justify-center container h-full w-full gap-[2%]">
            <div className="flex flex-col w-[25%] p-[20px] gap-[20px] bg-white rounded-2xl mt-[30px]">
              <div className="flex flex-col gap-[10px]">
                <div className=" font-semibold text-[25px] ">Records</div>
                <div className=" flex justify-center">
                  <button
                    onClick={() => openRecord()}
                    className="btn bg-blue-500 text-white hover:bg-blue-500 hover:shadow-lg w-[80%] rounded-3xl text-[17px] font-normal"
                  >
                    <BsPlusLg />
                    Add
                  </button>
                </div>
              </div>
              <div className="">
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
              <div className="">
                <div className="flex flex-col gap-[20px] w-1/2">
                  <div className=" font-semibold">Types</div>
                  <div className="ml-[10px]">
                    <div className="flex gap-[15px]">
                      <div className=" flex justify-center items-center">
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio w-[17px] h-[17px]"
                        />
                      </div>
                      <div>All</div>
                    </div>
                    <div className="flex gap-[15px]">
                      <div className=" flex justify-center items-center">
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio w-[17px] h-[17px]"
                        />
                      </div>
                      <div>Income</div>
                    </div>
                    <div className="flex gap-[15px]">
                      <div className=" flex justify-center items-center">
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio w-[17px] h-[17px]"
                        />
                      </div>
                      <div>Expense</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between">
                  <div className=" font-semibold">Category</div>
                  <div className=" text-gray-400">Clear</div>
                </div>
                <div className="flex flex-col gap-[10px] mt-[20px]">
                  <div className=" flex justify-between ml-[10px]">
                    <div className="flex justify-center items-center gap-[10px]">
                      <IoEyeSharp className=" w-[20px] h-[20px] fill-slate-400" />
                      Food & Drinks
                    </div>
                    <div className="flex justify-center items-center">
                      <BiSolidRightArrow className=" w-[12px] h-[12px]" />
                    </div>
                  </div>
                  <div className=" flex justify-between ml-[10px]">
                    <div className="flex justify-center items-center gap-[10px]">
                      <IoEyeSharp className=" w-[20px] h-[20px] fill-slate-400" />{" "}
                      Shopping
                    </div>
                    <div className="flex justify-center items-center">
                      <BiSolidRightArrow className=" w-[12px] h-[12px]" />
                    </div>
                  </div>
                  <div className=" flex justify-between ml-[10px]">
                    <div className="flex justify-center items-center gap-[10px]">
                      <IoEyeSharp className=" w-[20px] h-[20px] fill-slate-400" />{" "}
                      Housing
                    </div>
                    <div className="flex justify-center items-center">
                      <BiSolidRightArrow className=" w-[12px] h-[12px]" />
                    </div>
                  </div>
                  <div className=" flex justify-between ml-[10px]">
                    <div className="flex justify-center items-center gap-[10px]">
                      <IoEyeSharp className=" w-[20px] h-[20px] fill-slate-400" />{" "}
                      Transportation
                    </div>
                    <div className="flex justify-center items-center">
                      <BiSolidRightArrow className=" w-[12px] h-[12px]" />
                    </div>
                  </div>
                  <div className=" flex justify-between ml-[10px]">
                    <div className="flex justify-center items-center gap-[10px]">
                      <IoEyeSharp className=" w-[20px] h-[20px] fill-slate-400" />{" "}
                      Vehicle
                    </div>
                    <div className="flex justify-center items-center">
                      <BiSolidRightArrow className=" w-[12px] h-[12px]" />
                    </div>
                  </div>
                  <div className=" flex justify-between ml-[10px]">
                    <div className="flex justify-center items-center gap-[10px]">
                      <IoEyeSharp className=" w-[20px] h-[20px] fill-slate-400" />{" "}
                      Life & Entertainment
                    </div>
                    <div className="flex justify-center items-center">
                      <BiSolidRightArrow className=" w-[12px] h-[12px]" />
                    </div>
                  </div>
                  <div className=" flex justify-between ml-[10px]">
                    <div className="flex justify-center items-center gap-[10px]">
                      <IoEyeSharp className=" w-[20px] h-[20px] fill-slate-400" />{" "}
                      Communication, PC
                    </div>
                    <div className="flex justify-center items-center">
                      <BiSolidRightArrow className=" w-[12px] h-[12px]" />
                    </div>
                  </div>
                  <div className=" flex justify-between ml-[10px]">
                    <div className="flex justify-center items-center gap-[10px]">
                      <IoEyeSharp className=" w-[20px] h-[20px] fill-slate-400" />{" "}
                      Financial expenses
                    </div>
                    <div className="flex justify-center items-center">
                      <BiSolidRightArrow className=" w-[12px] h-[12px]" />
                    </div>
                  </div>
                  <div className=" flex justify-between ml-[10px]">
                    <div className="flex justify-center items-center gap-[10px]">
                      <IoEyeSharp className=" w-[20px] h-[20px] fill-slate-400" />{" "}
                      Investments
                    </div>
                    <div className="flex justify-center items-center">
                      <BiSolidRightArrow className=" w-[12px] h-[12px]" />
                    </div>
                  </div>
                  <div className=" flex justify-between ml-[10px]">
                    <div className="flex justify-center items-center gap-[10px]">
                      <IoEyeSharp className=" w-[20px] h-[20px] fill-slate-400" />
                      Income
                    </div>
                    <div className="flex justify-center items-center">
                      <BiSolidRightArrow className=" w-[12px] h-[12px]" />
                    </div>
                  </div>
                  <div className=" flex justify-between ml-[10px]">
                    <div className="flex justify-center items-center gap-[10px]">
                      <IoEyeSharp className=" w-[20px] h-[20px] fill-slate-400" />{" "}
                      Others
                    </div>
                    <div className="flex justify-center items-center">
                      <BiSolidRightArrow className=" w-[12px] h-[12px]" />
                    </div>
                  </div>
                  <div className=" flex ml-[10px] cursor-pointer w-fit gap-[10px]">
                    <div className=" flex justify-center items-center">
                      <FaPlus className="fill-blue-500" />
                    </div>
                    <div className="">Add Category</div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" font-semibold">Amount Range</div>
                <div className="flex gap-[30px] mt-[20px]">
                  <div>
                    <input
                      type="text"
                      placeholder="0"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="1000"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="w-[73%] border-solid border-[1px] border-black"></div>
          </div>
        </div>
      </div>
      {isRecordOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md shadow-lg w-[50%] h-[50%]">
            <div className=" flex justify-between items-center border-b-[2px] h-[13%] ml-[20px] mr-[20px]">
              <div className=" font-bold text-[25px]">Add Record</div>
              <div onClick={closeRecord}>
                <label className="btn btn-circle bg-white">
                  <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="w-full h-[87%]">
              <div className=" w-[50%] h-full">
                <div>
                  <div className="join">
                    <input
                      className="join-item btn w-full rounded-3xl h-[10%]"
                      type="radio"
                      name="options"
                      aria-label="Expense"
                      checked
                    />
                    <input
                      className="join-item btn w-full rounded-3xl"
                      type="radio"
                      name="options"
                      aria-label="Income"
                    />
                  </div>
                </div>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className=" w-[50%] h-full"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
