import { Logo, Geld } from "./icons/LogoIcons";
import { InputsSection, Button } from "./Inputs";
import Link from "next/link";
export const LogIn = () => {
  return (
    <div className=" flex w-screen h-screen">
      <div className=" flex justify-center items-center w-1/2 h-full">
        <div className="flex flex-col items-center gap-[40px] w-[35%]">
          <div className="flex justify-center items-center gap-[10px]">
            <Logo w={"25"} h={"25"} />
            <Geld w={"50"} h={"50"} />
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

            <div className="w-full">
              <Link href={"/dashboard"}>
                <Button buttonValue={"Log in"} />
              </Link>
            </div>
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
