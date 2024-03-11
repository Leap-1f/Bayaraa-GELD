import { Logo, Geld } from "./icons/LogoIcons";
import { InputsSection, Button } from "./Inputs";
import { LoginHeader } from "./LogIn";
import { useState } from "react";
import { useRouter } from "next/navigation";
export const SignUpSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const router = useRouter();
  const addUser = async () => {
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, repassword }),
      });
      const newData = await response.json();
      console.log(newData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className=" flex w-screen h-screen">
      <div className=" flex justify-center items-center w-1/2 h-full">
        <div className="flex flex-col items-center gap-[40px] w-[35%]">
          <div className="flex justify-center items-center gap-[10px]">
            <Logo w={"25"} h={"25"} color={"#0166FF"} />
            <Geld w={"50"} h={"50"} color={"black"} />
          </div>
          <div className=" text-center">
            <LoginHeader
              header={"Create Geld account"}
              text={"Sign up below to create your Wallet account"}
            />
          </div>
          <div className="flex flex-col items-center gap-[15px] w-full">
            <InputsSection
              holdertext={"Name"}
              type={"text"}
              value={name}
              setState={setName}
            />
            <InputsSection
              holdertext={"Email"}
              type={"text"}
              value={email}
              setState={setEmail}
            />
            <InputsSection
              holdertext={"Password"}
              type={"password"}
              value={password}
              setState={setPassword}
            />
            <InputsSection
              holdertext={"Re-password"}
              type={"password"}
              value={repassword}
              setState={setRepassword}
            />
            <div className="w-full" onClick={() => router.push("/steps")}>
              <Button buttonValue={"Sign up"} func={addUser} />
            </div>
          </div>
          <div className="flex gap-[15px]">
            <div>Already have account?</div>
            <div
              className=" text-blue-600 cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Log in
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-600"></div>
    </div>
  );
};
