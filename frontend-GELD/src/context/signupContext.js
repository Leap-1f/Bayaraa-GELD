import { useState, useEffect, createContext } from "react";
export const SignUpDataContext = createContext([]);

export const SignUpAllData = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [currencyType, setCurrencyType] = useState("");
  const [balance, setBalance] = useState(null);
  const fetchSignUpData = async () => {
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          repassword,
          currencyType,
          balance,
        }),
      });
      const newData = await response.json();
      setName(newData.name);
      setEmail(newData.email);
      setPassword(newData.password);
      setRepassword(newData.repassword);
      setCurrencyType(newData.currencyType);
      setBalance(newData.balance);
      console.log(newData.newData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <SignUpDataContext.Provider
      value={{
        name,
        email,
        password,
        repassword,
        currencyType,
        balance,
        setName,
        setEmail,
        setPassword,
        setRepassword,
        setCurrencyType,
        setBalance,
        fetchSignUpData,
      }}
    >
      {children}
    </SignUpDataContext.Provider>
  );
};
