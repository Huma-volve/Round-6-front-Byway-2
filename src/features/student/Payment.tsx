import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Fawry from "../../assets/images/atm.png";
import EWallet from "../../assets/images/e-wallet.png";
import Card from "../../assets/images/noto_credit-card.png";
import { useNavigate } from "react-router";

export default function Payment() {
    const CourseDetails = { id: 1, title: "React", price: "400" };

    const PaymentMethods = [
        { id: "fawry", method: "Fawry", image: Fawry },
        { id: "ewallet", method: "E-Wallet", image: EWallet },
        { id: "pm_card_visa", method: "Credit/Debit Card", image: Card },
    ];

    const [selectedMethod, setSelectedMethod] = useState<string>("pm_card_visa");

    const [fawryPhone, setFawryPhone] = useState("");
    const [ewalletAccount, setEwalletAccount] = useState("");
    const [card, setCard] = useState({
        number: "",
        expiry: "",
        cvc: "",
    });

    const navigate = useNavigate();


    const handlePayNow = () => {
        if (selectedMethod === "pm_card_visa") {
            if (!card.number || !card.expiry || !card.cvc) {
                alert("Please fill all card fields");
                return;
            }
            console.log("Paying with card:", card);
        } else if (selectedMethod === "fawry") {
            if (!fawryPhone) { alert("Enter phone for Fawry"); return; }
            console.log("Processing fawry with phone:", fawryPhone);
        } else if (selectedMethod === "ewallet") {
            if (!ewalletAccount) { alert("Enter e-wallet account"); return; }
            console.log("Processing e-wallet:", ewalletAccount);
        }

        alert("Payment done successfully!");
        navigate('/student/payment/success');
    };

    return (
        <div className="container mx-auto mt-20">
            <div className="p-6 border rounded-lg">
                <h2 className="font-semibold text-[#1C1C1E] text-2xl mb-2">
                    Course: <span className="text-blue-700">{CourseDetails.title}</span>
                </h2>
                <p className="font-semibold text-lg mb-6">
                    Price: <span className="text-green-600">{CourseDetails.price} EGP</span>
                </p>

                <h3 className="text-xl font-semibold text-[#1C1C1E] mb-2">
                    Choose your payment method:
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                    Select your preferred way to pay for your courses.
                </p>

                <div className="flex flex-col justify-center gap-5 mt-4">
                    {PaymentMethods.map((method) => (
                        <div key={method.id} className="flex gap-4 items-center">
                            <input
                                type="radio"
                                id={`pm-${method.id}`}
                                name="paymentMethod"
                                className="w-6 h-6"
                                value={method.id}
                                checked={selectedMethod === method.id}
                                onChange={() => setSelectedMethod(method.id)}
                            />
                            <div className="flex gap-2 items-center">
                                <img src={method.image} alt={method.method} className="w-6 h-6" />
                                <Label htmlFor={`pm-${method.id}`} className="text-lg cursor-pointer">
                                    {method.method}
                                </Label>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6">
                    {selectedMethod === "fawry" && (
                        <div className="mt-4 bg-gray-50 p-6 rounded-lg shadow-sm max-w-2xl">
                            <Label htmlFor="fawryPhone">Phone number for Fawry</Label>
                            <input
                                id="fawryPhone"
                                value={fawryPhone}
                                onChange={(e) => setFawryPhone(e.target.value)}
                                placeholder="e.g. 010xxxxxxxx"
                                className="w-full mt-2 p-3 border rounded"
                            />
                            <div className="flex justify-end mt-4">
                                <Button onClick={handlePayNow} className="bg-[#319F43]">Proceed</Button>
                            </div>
                        </div>
                    )}

                    {selectedMethod === "ewallet" && (
                        <div className="mt-4 bg-gray-50 p-6 rounded-lg shadow-sm max-w-2xl">
                            <Label htmlFor="ewalletAccount">E-Wallet account / ID</Label>
                            <input
                                id="ewalletAccount"
                                value={ewalletAccount}
                                onChange={(e) => setEwalletAccount(e.target.value)}
                                placeholder="E-wallet phone/email/ID"
                                className="w-full mt-2 p-3 border rounded"
                            />
                            <div className="flex justify-end mt-4">
                                <Button onClick={handlePayNow} className="bg-[#319F43]">Proceed</Button>
                            </div>
                        </div>
                    )}

                    {selectedMethod === "pm_card_visa" && (
                        <div className="mt-4 bg-white p-6 rounded-lg shadow-sm max-w-2xl border">
                            <div className="mb-4">
                                <Label htmlFor="cardNumber">Card Number</Label>
                                <input
                                    id="cardNumber"
                                    value={card.number}
                                    onChange={(e) => setCard((s) => ({ ...s, number: e.target.value }))}
                                    placeholder="Card Number"
                                    className="w-full mt-2 p-3 border rounded"
                                />
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <Label htmlFor="expiry">Expiry Date</Label>
                                    <input
                                        id="expiry"
                                        value={card.expiry}
                                        onChange={(e) => setCard((s) => ({ ...s, expiry: e.target.value }))}
                                        placeholder="MM/YY"
                                        className="w-full mt-2 p-3 border rounded"
                                    />
                                </div>

                                <div className="w-40">
                                    <Label htmlFor="cvc">CVC/CVV</Label>
                                    <input
                                        id="cvc"
                                        value={card.cvc}
                                        onChange={(e) => setCard((s) => ({ ...s, cvc: e.target.value }))}
                                        placeholder="123"
                                        className="w-full mt-2 p-3 border rounded"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end mt-4">
                                <Button onClick={handlePayNow} className="bg-[#319F43]">Pay Now</Button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}