import { Star } from "lucide-react";


export default function ReportsAnalytics() {
  return (
    <>
    <h2 className="text-[#587DBD] mt-5 font-medium text-2xl">Reports & Analytics</h2>
    <p className="text-sm mt-2">Track platform performance with real-time insights and exportable reports.</p>
    <div className="flex items-center gap-5 m-5">
        <div className="bg-white rounded-lg border border-gray-200 p-2">
            <p>Learners: 1,450</p>
        </div>
        <div className="bg-white  rounded-lg border border-gray-200 p-2">
            <p>Instructors: 120</p>
        </div>
        <div className="bg-white  rounded-lg border border-gray-200 p-2">
            <p>Courses: 310</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-2">
            <p>Earnings: $24,000</p>
        </div>
    </div>
    <div className="bg-white border w-70 border-gray-300 m-5 p-2 rounded-lg">
        <div className="flex justify-between pt-2 items-center pb-2 border-b border-gray-300">
            <h3>Course</h3>
            <h3>Rating</h3>
        </div>
        <div className="flex justify-between pt-2 items-center pb-2 border-b border-gray-300">
            <h3>UI/UX Design</h3>
            <div className="flex gap-1 items-center">
                <Star className="text-yellow-400 fill-yellow-400"/>
                <h3>4.9</h3>
            </div>
        </div>
        <div className="flex justify-between pt-2 items-center  pb-2 ">
            <h3>JavaScript</h3>
            <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-yellow-400"/>
                <h3>4.8</h3>
            </div>
        </div>
    </div>
    <button className="border cursor-pointer hover:bg-[#6583b7] rounded-lg bg-[#587DBD] text-white m-5 p-2">Download as PDF</button>
    </>
  )
}
