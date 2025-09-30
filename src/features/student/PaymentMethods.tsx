import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import Fawry from "../../assets/images/atm.png";
import EWallet from "../../assets/images/e-wallet.png";
import Card from "../../assets/images/noto_credit-card.png";
import { Checkbox } from "@/components/ui/checkbox";
export default function PaymentMethods() {
  const PaymentMethods = [
    { id: "", method: "Fawry", image: Fawry },
    { id: "", method: "E-Wallet", image: EWallet },
    { id: "pm_card_visa", method: "Credit/Debit Card", image: Card },
  ];
  return (
    <div className="container mx-auto mt-[15%]">
      <div>
        <h1 className="font-semibold text-[#1C1C1E] text-3xl">
          Choose your payment method:
        </h1>
        <p className="font-medium text-[#727272] text-lg">
          Select your preferred way to pay for your courses.
        </p>
        <div className="flex flex-col justify-center gap-5 mt-10">
          {PaymentMethods.map((method) => (
            <div key={method.id} className="flex gap-4 items-center ">
              <Checkbox id={method.id} className="w-6 h-6 border-black" />
              <div className="flex gap-2 items-center">
                <img
                  src={method.image}
                  alt={method.image}
                  className="w-5 h-5"
                />
                <Label className="text-xl">{method.method}</Label>
              </div>
            </div>
          ))}

          <Button className="w-80 h-15 bg-[#319F43] text-xl">
            Save Payment Method
          </Button>
        </div>
      </div>
    </div>
  );
}
