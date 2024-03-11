import { Logo, Geld } from "./icons/LogoIcons";
import { InputsSection, Button } from "./Inputs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LogIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login response:", data);
        router.push("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="flex justify-center items-center w-1/2 h-full">
        <div className="flex flex-col items-center gap-[40px] w-[35%]">
          <div className="flex justify-center items-center gap-[10px]">
            <Logo w={"25"} h={"25"} color={"#0166FF"} />
            <Geld w={"50"} h={"50"} color={"black"} />
          </div>
          <div className="text-center">
            <LoginHeader
              text={"Welcome back, Please enter your details"}
              header={"Welcome Back"}
            />
          </div>
          <div className="flex flex-col items-center gap-[15px] w-full">
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
            {error && <div className=" text-red-500">{error}</div>}
            <div className="w-full" onClick={handleSubmit}>
              <Button buttonValue={"Log in"} />
            </div>
          </div>
          <div className="flex gap-[15px]">
            <div>Don’t have an account?</div>
            <div
              className="text-blue-600 cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </div>
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
      <h1 className="text-[30px] font-bold">{header}</h1>
      <div>{text}</div>
    </div>
  );
};
