import { useRef, useState } from "react";

const useInputsRefs = () => {
  // useState
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");
  // useRef
  const inputEmail = useRef<HTMLInputElement | null>(null);
  const inputName = useRef<HTMLInputElement | null>(null);
  const inputAccountNumber = useRef<HTMLInputElement | null>(null);
  const inputBankName = useRef<HTMLInputElement | null>(null);
  const inputSelect = useRef<HTMLInputElement | null>(null);

  return {
    inputEmail,
    inputName,
    email,
    setEmail,
    name,
    setName,
    select,
    setSelect,
    accountNumber,
    setAccountNumber,
    inputAccountNumber,
    bankName,
    setBankName,
    inputBankName,
    inputSelect,
  };
};

export default useInputsRefs;
