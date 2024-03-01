import { Logo, Geld } from "../components/icons/LogoIcons";
import { Money } from "../components/icons/LogoIcons";
import { Button } from "../components/Inputs";
// import DropDown from "../components/icons/MUI";
export default function Home() {
  return (
    <div className="flex flex-col items-center gap-[100px]">
      <div className="flex flex-col items-center gap-[50px] mt-[80px]">
        <div className="flex flex-col">
          <div className="flex justify-center items-center gap-[10px]">
            <Logo w={"30"} h={"30"} />
            <Geld w={"60"} h={"60"} />
          </div>
          <div></div>
        </div>
        <div className="">
          <ul className="steps w-[400px] fill-blue-500">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[15px] w-[25%]">
        <div className="">
          <Money />
        </div>
        <div className=" font-bold text-[25px]">Select base currency</div>
        <div className="">{/* <DropDown /> */}</div>
        <div className="">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </div>
        <div className="w-full">
          <Button buttonValue={"Confirm"} />
        </div>
      </div>
    </div>
  );
}
