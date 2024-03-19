import { useState, useEffect, createContext } from "react";
export const SignUpDataContext = createContext([]);

export const SignUpAllData = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [currencyType, setCurrencyType] = useState("");
  const [balance, setBalance] = useState(null);
  const [recordName, setRecordName] = useState("");
  const [amount, setAmount] = useState("");
  const [transaction_type, setTransaction_type] = useState("");
  const [description, setDescription] = useState("");
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
      const recordResponse = await fetch(
        "http://localhost:3001/transaction/transaction",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recordName,
            amount,
            transaction_type,
            description,
          }),
        }
      );
      const recordData = await recordResponse.json();
      const newData = await response.json();
      setName(newData.name);
      setEmail(newData.email);
      setPassword(newData.password);
      setRepassword(newData.repassword);
      setCurrencyType(newData.currencyType);
      setBalance(newData.balance);
      setRecordName(recordData.recordName);
      setAmount;
      setTransaction_type;
      setDescription;
      console.log(newData);
      console.log(recordData);
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
