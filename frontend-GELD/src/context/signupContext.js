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
  const [transaction_type, setTransaction_type] = useState("EXP");
  const [description, setDescription] = useState("");
  const [recordData, setRecordData] = useState([]);
  const fetchSignUpData = async () => {
    try {
      const response = await fetch("https://backend-geld.vercel.app/users", {
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
      console.log(newData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const addRecords = async () => {
    console.log(recordName, amount, transaction_type, description);
    try {
      const recordResponse = await fetch(
        "https://backend-geld.vercel.app/transaction/transactions",
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
      setRecordName(recordData.recordName);
      setAmount(recordData.amount);
      setTransaction_type(recordData.transaction_type);
      setDescription(recordData.description);
      console.log(recordData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const fetchRecords = async () => {
    try {
      const response = await fetch(
        "https://backend-geld.vercel.app/transaction",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const recordsData = await response.json();
      setRecordData(recordsData);
      console.log(recordsData);
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
        recordName,
        amount,
        transaction_type,
        description,
        setRecordName,
        setAmount,
        setTransaction_type,
        setDescription,
        addRecords,
        recordData,
        fetchRecords,
      }}
    >
      {children}
    </SignUpDataContext.Provider>
  );
};
