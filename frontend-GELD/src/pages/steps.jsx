import { useState, useContext } from "react";
import {
  Logo,
  Geld,
  Money,
  Balance,
  GoodJob,
} from "../components/icons/LogoIcons";
import { Button, InputsSection } from "../components/Inputs";
import { useRouter } from "next/navigation";
import { SignUpDataContext } from "../context/signupContext";
export default function Home() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showBalanceSetup, setShowBalanceSetup] = useState(false);
  const {
    currencyType,
    balance,
    setCurrencyType,
    setBalance,
    fetchSignUpData,
  } = useContext(SignUpDataContext);

  const router = useRouter();
  const handleConfirm = () => {
    if (!showConfirmation) {
      setShowConfirmation(true);
    } else if (!showBalanceSetup) {
      setShowBalanceSetup(true);
    }
  };
  return (
    <div className="flex flex-col items-center gap-[100px]">
      <div className="flex flex-col items-center gap-[50px] mt-[80px]">
        <div className="flex flex-col">
          <div className="flex justify-center items-center gap-[10px]">
            <Logo w={"30"} h={"30"} />
            <Geld w={"60"} h={"60"} />
          </div>
        </div>
        <div className="">
          <ul className="steps w-[400px]">
            <li
              className={`step transition-transform duration-300 ease-in-out ${
                !showConfirmation ? "step-info" : ""
              }`}
            >
              Currency
            </li>
            <li
              className={`step transition-transform duration-300 ease-in-out ${
                showConfirmation && !showBalanceSetup ? "step-info" : ""
              }`}
            >
              Balance
            </li>
            <li
              className={`step transition-transform duration-300 ease-in-out ${
                showBalanceSetup ? "step-info" : ""
              }`}
            >
              Finish
            </li>
          </ul>
        </div>
      </div>
      {!showConfirmation && (
        <div className="flex flex-col items-center gap-[15px] w-[21%]">
          <div className="">
            <Money />
          </div>
          <div className=" font-semibold text-[25px]">Select base currency</div>
          <div className="flex justify-center items-center w-full">
            <select
              className="select select-bordered w-full max-w-xs bg-slate-100 h-[60px]"
              onChange={(e) => setCurrencyType(e.target.value)}
              value={currencyType}
            >
              <option selected>Currency?</option>
              <option value="MNT">MNT </option>
              <option value="USD">USD </option>
              <option value="EUR">EUR </option>
            </select>
          </div>
          <div className=" text-slate-400 text-[13px] w-[90%] text-center">
            Your base currency should be the one you use most often. All
            transactions in other currencies will be calculated based on this
            one
          </div>
          <div onClick={handleConfirm} className="w-[80%] mt-[20px]">
            <Button buttonValue={"Confirm"} />
          </div>
        </div>
      )}
      {showConfirmation && !showBalanceSetup && (
        <div className="flex flex-col items-center gap-[15px] w-[21%]">
          <div className="">
            <Balance />
          </div>
          <div className=" font-semibold text-[25px]">
            Set up your cash Balance
          </div>
          <div className="flex justify-center items-center w-[80%]">
            <InputsSection
              holdertext={"Amount"}
              value={balance}
              setState={setBalance}
            />
          </div>
          <div className=" text-slate-400 text-[13px] w-[90%] text-center">
            How much cash do you have in your wallet?
          </div>
          <div onClick={handleConfirm} className="w-[80%] mt-[20px]">
            <Button buttonValue={"Confirm"} />
          </div>
        </div>
      )}
      {showBalanceSetup && (
        <div className="flex flex-col items-center gap-[15px] w-[21%]">
          <div className="">
            <GoodJob />
          </div>
          <div className=" font-semibold text-[25px]">Good Job!</div>
          <div className=" text-slate-600 text-[20px] w-[90%] text-center">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </div>
          <div onClick={fetchSignUpData} className="w-[80%] mt-[20px]">
            <Button
              buttonValue={"Go to Dashboard"}
              func={() => router.push("/dashboard")}
            />
          </div>
        </div>
      )}
    </div>
  );
}
