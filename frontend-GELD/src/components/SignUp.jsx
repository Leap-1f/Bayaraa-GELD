import { Logo, Geld } from "./icons/LogoIcons";
import { InputsSection, Button } from "./Inputs";
import { LoginHeader } from "./LogIn";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { SignUpDataContext } from "../context/signupContext";
// import { basicSchema } from "../schemas";
export const SignUpSection = () => {
  const {
    name,
    email,
    password,
    repassword,
    setName,
    setEmail,
    setPassword,
    setRepassword,
  } = useContext(SignUpDataContext);
  const router = useRouter();
  console.log(name, email, password, repassword);
  // const BasicForm = () => {
  //   const {
  //     values,
  //     errors,
  //     touched,
  //     isSubmitting,
  //     handleBlur,
  //     handleChange,
  //     handleSubmit,
  //   } = useFormik({
  //     initialValues: {
  //       email: "",
  //       age: "",
  //       password: "",
  //       confirmPassword: "",
  //     },
  //     validationSchema: basicSchema,
  //     onSubmit,
  //   });

  //   console.log(errors);
  // };
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
              // onChange={handleChange}
              // onBlur={handleBlur}
              // className={errors.name && touched.name ? "input-error" : ""}
            />
            {/* {errors.name && touched.name && (
              <p className="error">{errors.name}</p>
            )} */}
            <InputsSection
              holdertext={"Email"}
              type={"text"}
              value={email}
              setState={setEmail}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // className={errors.email && touched.email ? "input-error" : ""}
            />
            {/* {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )} */}
            <InputsSection
              holdertext={"Password"}
              type={"password"}
              value={password}
              setState={setPassword}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // className={
              //   errors.password && touched.password ? "input-error" : ""
              // }
            />
            {/* {errors.password && touched.password && (
              <p className="error">{errors.password}</p>
            )} */}
            <InputsSection
              holdertext={"Re-password"}
              type={"password"}
              value={repassword}
              setState={setRepassword}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // className={
              //   errors.confirmPassword && touched.confirmPassword
              //     ? "input-error"
              //     : ""
              // }
            />
            {/* {errors.confirmPassword && touched.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )} */}
            <div className="w-full" onClick={() => router.push("/steps")}>
              <Button buttonValue={"Sign up"} />
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
