import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ViewEye from "../../../assets/images/ViewEye.png";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router";
function CourseManagement() {
  const navigate = useNavigate();
  const [showList, setShowList] = useState(false);
  return (
    <div className="container mt-10 ">
      <h1 className="text-[#587DBD] font-medium text-3xl mb-5">
        Courses Management
      </h1>
      <p className="text-[#0F172A] text-xl ">
        View, filter, and manage all published and pending courses on the
        platform.
      </p>
      <div className="border-1 rounded-lg overflow-hidden pt-5 mt-5 bg-[#ffffff] ">
        <Table className="border-separate border-spacing-x-4">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-xl border-1  rounded-lg border-[#8787875C] ">
                Course Title
              </TableHead>
              <TableHead className="font-semibold text-xl border-1  rounded-lg border-[#8787875C] ">
                Instructor
              </TableHead>
              <TableHead className="font-semibold text-xl border-1  rounded-lg border-[#8787875C]">
                Category
              </TableHead>
              <TableHead className=" font-semibold text-xl border-1 rounded-lg border-[#8787875C]">
                Status
              </TableHead>
              <TableHead className="font-semibold text-xl border-1 rounded-lg border-[#8787875C]">
                Created Date
              </TableHead>
              <TableHead className="font-semibold text-xl border-1 rounded-lg border-[#8787875C]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-lg">UI/UX Design Basics</TableCell>
              <TableCell className="text-lg ">Nour Ali</TableCell>
              <TableCell className="text-lg ">Design</TableCell>
              <TableCell className="text-lg text-[#5BAE61]  ">
                Published
              </TableCell>
              <TableCell className="text-lg ">10 Jul 2024</TableCell>
              <TableCell className="text-lg ">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      onClick={() => {
                        setShowList(!showList);
                      }}
                      className="  bg-[#587DBD]/45 pl-2.5 rounded-lg w-20 h-7 mt-2"
                    >
                      <img src={ViewEye} alt="eye-img" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-3">
                    <DropdownMenuItem>
                      <button
                        onClick={() =>
                          navigate("/courseManagement/course-details")
                        }
                        className="font-semibold"
                      >
                        View Course
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <button className="text-[#5BAE61] font-semibold">
                        Edit Course
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <button className="text-[#DB3B3B] font-semibold">
                        Delete Course
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-lg">UI/UX Design Basics</TableCell>
              <TableCell className="text-lg ">Nour Ali</TableCell>
              <TableCell className="text-lg ">Design</TableCell>
              <TableCell className="text-lg text-[#5BAE61]  ">
                Published
              </TableCell>
              <TableCell className="text-lg ">10 Jul 2024</TableCell>
              <TableCell className="text-lg ">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      onClick={() => {
                        setShowList(!showList);
                      }}
                      className="  bg-[#587DBD]/45 pl-2.5 rounded-lg w-20 h-7 mt-2"
                    >
                      <img src={ViewEye} alt="eye-img" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-3">
                    <DropdownMenuItem>
                      <button className="font-semibold">View Course</button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <button className="text-[#5BAE61] font-semibold">
                        Edit Course
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <button className="text-[#DB3B3B] font-semibold">
                        Delete Course
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      {showList}
      {/* // <div className="relative ">
        //   <div className="absolute bottom-0 right-0 flex flex-col items-center justify-evenly  bg-[#ffffff] border-1 border-[#87878782] w-52 h-50 rounded-xl">
        //     <button className="font-semibold">View Course</button>
        //     <button className="text-[#5BAE61] font-semibold">
        //       Edit Course
        //     </button>
        //     <button className="text-[#DB3B3B] font-semibold">
        //       Delete Course
        //     </button>
        //   </div>
        // </div> */}
    </div>
  );
}

export default CourseManagement;
