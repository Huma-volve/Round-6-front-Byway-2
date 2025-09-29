
import { FaStar } from "react-icons/fa";

const Review = () => {



  return <>
  <div className="container mt-10">
    <h2 className="text-2xl font-bold">Reviews(12)</h2>
    <div className="parent border p-3 rounded-2xl mt-3">
    <div className="flex gap-3">
      <h3 className="text-gray-900">Course Name:</h3>
      <p className="font-bold">Beginner’s Guide to UI UX </p>
    </div>
    <div className="flex gap-3 items-center">
      <h3 className="text-gray-900">Rating:</h3>
      <p><FaStar className="text-yellow-300" /></p>
      <p><FaStar className="text-yellow-300" /></p>
      <p><FaStar className="text-yellow-300" /></p>
      <p><FaStar className="text-yellow-300" /></p>
      <p><FaStar className="text-yellow-300" /></p>
    </div>
    <div className="flex gap-3">
      <h3 className="text-gray-900">Review:</h3>
      <p>I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.</p>
    </div>
    </div>
  </div>
  </>
}

export default Review