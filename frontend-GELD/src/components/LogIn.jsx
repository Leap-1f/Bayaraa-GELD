import { Logo, Geld } from "./icons/LogoIcons";
import { InputsSection, Button } from "./Inputs";
import Link from "next/link";
export const LogIn = () => {
  return (
    <div className=" flex w-screen h-screen">
      <div className=" flex justify-center items-center w-1/2 h-full">
        <div className="flex flex-col items-center gap-[40px] w-[35%]">
          <div className="flex">
            <Logo w={"25"} h={"25"} />
            <Geld />
          </div>
          <div className=" text-center">
            <LoginHeader
              text={"Welcome back, Please enter your details"}
              header={"Welcome Back"}
            />
          </div>
          <div className="flex flex-col items-center gap-[15px] w-full">
            <InputsSection holdertext={"Email"} type={"text"} />
            <InputsSection holdertext={"Password"} type={"password"} />
            <Button buttonValue={"Log in"} />
          </div>
          <div className="flex gap-[15px]">
            <div>Don’t have account?</div>
            <Link href={"/signup"}>
              <div className=" text-blue-600 cursor-pointer">Sign up</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-600"></div>
    </div>
  );
};
export const LoginHeader = ({ text, header }) => {
  return (
    <div>
      <h1 className=" text-[30px] font-bold">{header}</h1>
      <div>{text}</div>
    </div>
  );
};
