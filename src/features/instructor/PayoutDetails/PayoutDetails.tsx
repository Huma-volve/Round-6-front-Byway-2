import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import useInputsRefs from "@/hooks/InputsRefs/useInputsRefs";
import { NavLink } from "react-router";

const PayoutDetails = () => {
  const { inputName, inputEmail, inputAccountNumber } = useInputsRefs();

  // ========== Hook للكليك برة العنصر ==========
  const useClickOutside = (handler: () => void) => {
    const domNode = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const maybeHandler = (event: MouseEvent) => {
        if (domNode.current && !domNode.current.contains(event.target as Node)) {
          handler();
        }
      };

      document.addEventListener("mousedown", maybeHandler);
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    }, [handler]);

    return domNode;
  };

  // ========== عنصر DropdownItem ==========
  const DropdownItem = ({
    label,
    onSelect,
  }: {
    label: string;
    name: string;
    onSelect: (value: string) => void;
  }) => (
    <label
      onClick={() => onSelect(label)}
      className="flex justify-between items-center gap-3 px-5 py-3 text-gray-700 cursor-pointer hover:bg-gray-300 transition"
    >
      {label}
    </label>
  );

  // ========== Dropdown للبنك ==========
  const BankNameDrop = ({ onBankSelect }: { onBankSelect: (bank: string) => void }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState<string>("");
    const domNode = useClickOutside(() => setDropdownOpen(false));

    const handleSelect = (value: string) => {
      setSelected(value);
      setDropdownOpen(false);
      onBankSelect(value);
    };

    return (
      <section className="flex justify-center">
        <div ref={domNode} className="relative w-64">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex w-full items-center justify-between rounded-lg bg-green-500 px-5 py-3 font-medium text-black shadow-md hover:bg-green-600 transition"
          >
            <span>{selected || "Please Select"}</span>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z"
                fill="black"
              />
            </svg>
          </button>

          <div
            className={`absolute left-0 right-0 mt-2 rounded-lg bg-white shadow-lg overflow-hidden transition-all duration-300 ${
              dropdownOpen
                ? "max-h-60 opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }`}
          >
            <DropdownItem label="CIB" name="bankName" onSelect={handleSelect} />
            <DropdownItem label="Al-Ahly" name="bankName" onSelect={handleSelect} />
            <DropdownItem label="Bank of Egypt" name="bankName" onSelect={handleSelect} />
          </div>
        </div>
      </section>
    );
  };

  // ========== Continue Section ==========
  const Continue = ({ onBankSelect }: { onBankSelect: (bank: string) => void }) => (
    <section className="flex flex-col gap-6 p-6 rounded-lg shadow-md bg-white border border-gray-200">
      <label htmlFor="AccountNumber" className="flex flex-col gap-2">
        <span className="text-lg font-medium">Account Number</span>
        <input
          type="text"
          id="AccountNumber"
          className="w-full max-w-md p-3 border-gray-300 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="123571625375"
          ref={inputAccountNumber}
        />
      </label>

      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Bank Name</h2>
        <BankNameDrop onBankSelect={onBankSelect} />
      </div>
    </section>
  );

  // ========== Dropdown Payment ==========
  const DropDownPayment = ({
    onPaymentSelect,
    onBankSelect,
  }: {
    onPaymentSelect: (payment: string) => void;
    onBankSelect: (bank: string) => void;
  }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState<string>("");
    const domNode = useClickOutside(() => setDropdownOpen(false));

    const handleSelect = (value: string) => {
      setSelected(value);
      setDropdownOpen(false);
      onPaymentSelect(value);
    };

    return (
      <section className="flex justify-center">
        <div ref={domNode} className="relative w-64">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex w-full items-center justify-between rounded-lg bg-green-500 px-5 py-3 font-medium text-black shadow-md hover:bg-green-600 transition"
          >
            <span>{selected || "Please Select"}</span>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z"
                fill="black"
              />
            </svg>
          </button>
          <div
            className={`absolute left-0 right-0 mt-2 rounded-lg bg-white shadow-lg overflow-hidden transition-all duration-300 ${
              dropdownOpen
                ? "max-h-60 opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }`}
          >
            <DropdownItem label="PayPal" name="payment" onSelect={handleSelect} />
            <DropdownItem label="Bank Transfer" name="payment" onSelect={handleSelect} />
            <DropdownItem label="Fawry" name="payment" onSelect={handleSelect} />
          </div>

          {selected === "Bank Transfer" && (
            <div className="mt-6">
              <Continue onBankSelect={onBankSelect} />
            </div>
          )}
        </div>
      </section>
    );
  };

  // ========== State عام للقيم ==========
  const [paymentMethod, setPaymentMethod] = useState("");
  const [bankName, setBankName] = useState("");

  // ========== زرار Continue ==========
  const handleClick = () => {
    console.log("Account Name:", inputName.current?.value);
    console.log("Account Email:", inputEmail.current?.value);
    console.log("Payment Method:", paymentMethod);
    console.log("Account Number:", inputAccountNumber.current?.value);
    console.log("Bank Name:", bankName);
  };

  // ========== الواجهة ==========
  return (
    <section className="mt-10 flex flex-col gap-5">
      <h1 className="text-4xl font-semibold">Enter Payout Details</h1>

      <div className="flex flex-col gap-5 items-baseline">
        <h2 className="text-2xl">Payment Method</h2>
        <DropDownPayment onPaymentSelect={setPaymentMethod} onBankSelect={setBankName} />
      </div>

      <label htmlFor="AccountName" className="flex flex-col gap-2">
        Account Name
        <input
          ref={inputName}
          type="text"
          id="AccountName"
          className="w-[20%] p-2 border-gray-400 border rounded-md"
        />
      </label>

      <label htmlFor="AccountEmail" className="flex flex-col gap-2">
        Account Email
        <input
          ref={inputEmail}
          type="text"
          id="AccountEmail"
          className="w-[20%] p-2 border-gray-400 border rounded-md"
        />
      </label>

      <label htmlFor="Save" className="flex gap-5 items-center">
        <input
          type="checkbox"
          id="Save"
          className="h-4 w-4 appearance-none rounded-full border border-gray-400 
          checked:border-amber-500 checked:bg-white relative
          before:content-[''] before:absolute before:top-1/2 before:left-1/2 
          before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 
          before:rounded-full before:bg-black before:opacity-0 
          checked:before:opacity-100 cursor-pointer"
        />
        Save these details
      </label>
      <NavLink to={"/instructors/WithDraw"}>
         <Button
        onClick={handleClick}
        className="w-[20%] bg-green-500 hover:bg-green-600 cursor-pointer font-semibold text-lg"
        >
        Continue
        </Button>
      </NavLink>
    </section>
  );
};

export default PayoutDetails;
