import { useEffect, useRef, useState } from "react";

// Hook: Detect outside click
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

const DropdownBankName = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const domNode = useClickOutside(() => setDropdownOpen(false));

  return (
    <section className="flex justify-center">
      <div ref={domNode} className="relative w-64">
        {/* Button */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex w-full items-center justify-between rounded-lg bg-green-500 px-5 py-3 font-medium text-black shadow-md hover:bg-green-600 cursor-pointer transition"
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

        {/* Dropdown */}
        <div
          className={`absolute left-0 right-0 mt-2 rounded-lg bg-white shadow-lg overflow-hidden transition-all duration-300 ${
            dropdownOpen
              ? "max-h-60 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <DropdownItem label="CIB" name="bankName" onSelect={setSelected} />
          <DropdownItem label="Al-Ahly" name="bankName" onSelect={setSelected} />
          <DropdownItem label="Bank OF Egypt" name="bankName" onSelect={setSelected} />
        </div>
      </div>
    </section>
  );
};

export default DropdownBankName;

const DropdownItem = ({
  label,
  name,
  onSelect,
}: {
  label: string;
  name: string;
  onSelect: (value: string) => void;
}) => {
  return (
    <label className="flex justify-between items-center gap-3 px-5 py-3 text-sm text-gray-700 cursor-pointer transition">
      <span>{label}</span>
      <input
        type="radio"
        name={name}
        onChange={() => onSelect(label)}
        className="h-4 w-4 appearance-none rounded-full border border-gray-400 checked:border-amber-500 checked:bg-white relative
        before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-black before:opacity-0 checked:before:opacity-100"
      />
    </label>
  );
};
