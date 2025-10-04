import { ChevronRight, Fullscreen, Video } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

export default function AddCourse() {


  const [video, setVideo] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [deleted, setDeleted] = useState(false);


  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
       setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleDelete = () => {
    setDeleted(!deleted);
  };

  const confirmDelete = () => {
    setVideo(null);
    setPreview(null);
    setDeleted(false);
  }

  const handleSubmit = () => {
    if (!video) return;


  const formData = new FormData();
    formData.append("video", video);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Upload success:", data);
      })
      .catch((err) => console.error("Upload error:", err));
  };



  return (
    <>
    <div>
      <div className="flex gap-5 w-full items-center mb-20">
      <ul className="flex items-center justify-between">
        <NavLink to={"/myCourses"} className={({isActive}) => (isActive? "text-blue-700": "")}>
        <li className="font-normal text-xs">My Courses</li>
        </NavLink>
        <ChevronRight className="text-gray-300 text-xs" />
        <NavLink to={"/instructor/courses/:id/lessons"} className={({isActive}) => (isActive? "text-blue-700": "")}>
        <li className="font-normal text-xs">Course Details</li>
        </NavLink>
        <ChevronRight className="text-gray-300 text-xs" />
        <NavLink to={"/AddCourse"} className={({isActive}) => (isActive? "text-blue-700": "")}>
        <li className="font-normal text-xs">Add Course</li>
        </NavLink>
      </ul>
      <h2 className="text-center pl-14 ml-12 font-semibold text-2xl">Add course</h2>

      </div>

      <label htmlFor="Course name" className="font-semibold  mb-5 mt-5">
        Course Name
      </label>
      <br/>
      <input type="text" id="Course name" className="p-3 mb-4 mt-4  w-full rounded-lg border text-gray-500 border-gray-300" placeholder="UI/UX Design for Beginners"/>
      <br/>
      <label htmlFor="Course category" className="font-semibold  my-5">
        Course category
      </label>
      <br/>
      <input type="text" id="Course category" className="p-3 mb-5  mt-4 w-full rounded-lg border text-gray-500 border-gray-300" placeholder="UI/UX Design"/>
      <br/>
      <label htmlFor="Course level" className="font-semibold  my-5">
        Course level
      </label>
      <br/>


      <div className="bg-white max-w-fit rounded-lg border mt-3 border-gray-300 p-4"> 
        <div className="flex gap-5 justify-between items-center">
          <h4>Beginner</h4>
          <input type="radio"name="course level" value={"Beginner"}/>
        </div>
        <div className="flex gap-5 justify-between items-center">
          <h4>Intermediate</h4>
          <input type="radio"  name="course level" value={"Intermediate"}/>
        </div>
        <div className="flex justify-between items-center">
          <h4>Advanced</h4>
          <input type="radio"  name="course level" value={"Advanced"} />
        </div>
      </div>
      <br/>
      <label htmlFor="description" className="font-semibold mb-4" >
        Description
      </label>
      <br/>
      <textarea rows={2} placeholder="Learn how to design interfaces and user flows" className="text-gray-500 mb-5 mt-2 w-full p-5 border rounded-lg border-gray-300" ></textarea>
      <br/>
      <label htmlFor="Video title" className="font-semibold mb-4">
        Video title
      </label>
      <input type="text" placeholder="Introduction Lesson" id="Video title" className="p-3 mt-2 mb-5 rounded-lg border w-full border-gray-300 text-gray-500"/>
      <br/>
      <label htmlFor="Course Price" className="font-semibold mb-4" >
        Course Price
      </label>
      <br/>
      <input id="Course Price" placeholder="400 EGP" type="text" className="p-3 mt-2 mb-5 w-full border border-gray-300 text-gray-500 rounded-lg"/>
      <br/>
      <div className="w-full flex justify-center items-center">
        <div>

        <label  htmlFor="video-upload" className="cursor-pointer">
      <div className="bg-gray-200 w-70 h-70 mt-4 border rounded-lg flex justify-center items-center">
        {preview ? (
          <video src={preview} controls className="w-full h-full object-cover" />
        ):(
          <>
          <input  type="file" id="video-upload" accept="video/*" className="hidden" onChange={handleUpload} />
            <Video className="fill-black w-13 h-10" />

          </>

        )}
      </div>
      <button  className="p-2 m-5 bg-[#587DBD] flex right-0 hover:bg-[#4867a5] transition cursor-pointer text-white border rounded-lg" onClick={handleSubmit}>+ Upload Video</button>
      {preview ? (
        <>
        <div className="">

        <button className="bg-[#5BAE61] hover:bg-green-600 transition-colors text-white border py-2 px-4 w-60 mt-4 cursor-pointer rounded-sm mb-5">Save</button>
        <br/>
        <button className="border hover:bg-gray-200 transition-colors border-gray-300 rounded-sm py-2  w-60 cursor-pointer  px-4 mb-5">Move to Draft </button>
        <br/>
        <button onClick={handleDelete} className="bg-[#EA4335] hover:bg-red-700 transition-colors text-white border py-2 px-4 cursor-pointer w-60 rounded-sm mt-5 mb-5">Delete</button>
        </div>
        
        
        </>
      ) : (

      <p className="text-gray-500">Upload course video (mp4, max 500MB)</p>
      ) }
      
        </label>
     
        </div>

      </div>

      {deleted &&(
        <>
        <div onClick={handleDelete} className="bg-black/50 flex justify-center fixed items-center z-50 inset-0">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-4 rounded-xl m-auto w-[300px] text-center space-y-5">
            <h2>Are you sure you wanted to delete this video</h2>
            <button onClick={confirmDelete} className="text-red cursor-pointer">Yes</button>
            <br/>
            <button onClick={() => setDeleted(false)} className="text-green cursor-pointer">No</button>
          </div>
        </div>
        </>
      )}
      
    </div>
    </>
  )
}
