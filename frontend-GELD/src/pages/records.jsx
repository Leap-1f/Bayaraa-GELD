import { Header } from "../components/Header";
import { BsPlusLg } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { Button } from "../components/Inputs";
import { Categories } from "../components/icons/Category";
import { RangeSlider } from "../components/icons/RangeSlider";
export default function Home() {
  const [isRecordOpen, setIsRecordOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [recordType, setRecordType] = useState("Expense");
  const openRecord = () => {
    setIsRecordOpen(true);
  };
  const closeRecord = () => {
    setIsRecordOpen(false);
  };
  const openCategory = () => {
    setIsCategoryOpen(true);
  };
  const closeCategory = () => {
    setIsCategoryOpen(false);
  };
  const handleRecordTypeChange = (type) => {
    setRecordType(type);
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
                  <input
                    type="text"
                    className="grow border-none"
                    placeholder="Search"
                  />
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
                  <div className="flex flex-col gap-[10px] mt-[20px]">
                    {Categories.map((category, index) => (
                      <div
                        className=" flex justify-between ml-[10px]"
                        key={index}
                      >
                        <div className="flex justify-center items-center gap-[10px]">
                          <IoEyeSharp className=" w-[20px] h-[20px] fill-slate-400" />
                          {category.name}
                        </div>
                        <div className="flex justify-center items-center">
                          <BiSolidRightArrow className=" w-[12px] h-[12px]" />
                        </div>
                      </div>
                    ))}
                    <div
                      className="flex ml-[10px] cursor-pointer w-fit gap-[10px]"
                      onClick={() => openCategory()}
                    >
                      <div className="flex justify-center items-center">
                        <FaPlus className="fill-blue-500" />
                      </div>
                      <div>Add Category</div>
                    </div>
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
          <div className="bg-white rounded-md shadow-lg w-[40%] h-[50%]">
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
            <div className="flex w-full h-[87%]">
              <div className="flex flex-col gap-[30px] w-[50%] h-full p-[20px]">
                <div className="flex justify-between  *:text-center h-[10%] bg-gray-200 rounded-3xl *:cursor-pointer">
                  <div
                    className={`flex justify-center items-center w-1/2 h-full rounded-3xl ${
                      recordType === "Expense"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={() => handleRecordTypeChange("Expense")}
                  >
                    Expense
                  </div>
                  <div
                    className={`flex justify-center items-center w-1/2 h-full rounded-3xl ${
                      recordType === "Income"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={() => handleRecordTypeChange("Income")}
                  >
                    Income
                  </div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <div className="w-full">
                    <div className="">Amount</div>
                    <input
                      placeholder="&#8366; 000.0"
                      className="input input-bordered w-full bg-gray-100"
                    />
                  </div>
                  <div>
                    <div>Category</div>
                    <div></div>
                  </div>
                  <div className="flex">
                    <div className="w-1/2">
                      <div>Date</div>
                    </div>
                    <div className="w-1/2">
                      <div>Time</div>
                    </div>
                  </div>
                  <div className="w-full">
                    <button
                      className={`btn w-full text-white ${
                        recordType === "Expense"
                          ? "bg-blue-500 hover:bg-blue-600"
                          : "bg-green-500 hover:bg-green-400"
                      }`}
                    >
                      Add Record
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] w-[50%] h-full p-[20px]">
                <div>
                  <div>Payee</div>
                  <div className="mt-[15px]">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full bg-gray-100"
                    />
                  </div>
                </div>
                <div className="h-full">
                  <div>Note</div>
                  <div className="h-[80%] w-full mt-[15px]">
                    <textarea
                      placeholder="Write here"
                      className="textarea textarea-bordered h-full w-full bg-gray-100 "
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCategoryOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md shadow-lg w-[25%] h-[25%]">
            <div className=" flex justify-between items-center border-b-[2px] h-[23%] ml-[20px] mr-[20px]">
              <div className=" font-light text-[23px]">Add Category</div>
              <div onClick={closeCategory}>
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
            <div className="flex w-full h-[77%]"></div>
          </div>
        </div>
      )}
    </>
  );
}
