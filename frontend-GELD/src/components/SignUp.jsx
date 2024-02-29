import { Logo, Geld } from "./icons/LogoIcons";
import { InputsSection, Button } from "./Inputs";
import { LoginHeader } from "./LogIn";
import Link from "next/link";
export const SignUpSection = () => {
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
              header={"Create Geld account"}
              text={"Sign up below to create your Wallet account"}
            />
          </div>
          <div className="flex flex-col items-center gap-[15px] w-full">
            <InputsSection holdertext={"Name"} type={"text"} />
            <InputsSection holdertext={"Email"} type={"text"} />
            <InputsSection holdertext={"Password"} type={"password"} />
            <InputsSection holdertext={"Re-assword"} type={"password"} />
            <Button buttonValue={"Sign up"} />
          </div>
          <div className="flex gap-[15px]">
            <div>Already have account?</div>
            <Link href={"/login"}>
              <div className=" text-blue-600 cursor-pointer">Log in</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-600"></div>
    </div>
  );
};
