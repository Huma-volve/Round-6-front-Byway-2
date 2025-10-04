
import type { courseDetails } from "@/types/Sylvia/types";

export default function CartDetails({ courseDetails }: { courseDetails: courseDetails }) {

    return (
        < div className="border-[1px] border-gray-300 bg-gray-200 p-5 rounded-xl" >
            <li className="flex justify-between">
                <p className="text-gray-700">Price</p>
                <p className="font-semibold">{courseDetails.price} EGP</p>
            </li>
            <li className="flex justify-between">
                <p className="text-gray-700">Discount</p>
                <p className="font-semibold">0 EGP</p>
            </li>
            <li className="flex justify-between mt-10 pt-5 border-t-[1px] border-gray-300">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">{courseDetails.price} EGP</p>
            </li>
        </div >
    )
}