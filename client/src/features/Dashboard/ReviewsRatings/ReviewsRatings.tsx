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
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id:'1',
    courseName: "UI/UX Design Basics",
    reviewer: "mohamed",
    rating: 4,
    commint: "The course was really helpful..",
    status: "normal",
    date: "22 jul 2024",
  },
  {
    id:'2',
    courseName: "FrontEnd",
    reviewer: "sara",
    rating: 1,
    commint: "The course was really helpful..",
    status: "reported",
    date: "22 jul 2024",
  },
];

export default function ReviewsRatings() {
  const navigate = useNavigate();
  const [showList, setShowList] = useState(false);
  return (
    <div className="container mx-auto px-5 mt-10 ">
      <h1 className="text-[#587DBD] font-medium text-3xl mb-5">
        Reviews & Ratings
      </h1>
      <p className="text-[#0F172A] text-xl ">
        Manage student feedback and monitor course ratings.
      </p>
      <div className="border-1 rounded-lg overflow-hidden pt-5 mt-5 bg-[#ffffff] ">
        <Table className="border-separate border-spacing-x-4">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-xl border-1  rounded-lg border-[#8787875C] ">
                Course Name
              </TableHead>
              <TableHead className="font-semibold text-xl border-1  rounded-lg border-[#8787875C] ">
                Reviewer
              </TableHead>
              <TableHead className="font-semibold text-xl border-1  rounded-lg border-[#8787875C]">
                Rating
              </TableHead>
              <TableHead className=" font-semibold text-xl border-1 rounded-lg border-[#8787875C]">
                Comment Preview
              </TableHead>
              <TableHead className=" font-semibold text-xl border-1 rounded-lg border-[#8787875C]">
                Date
              </TableHead>
              <TableHead className="font-semibold text-xl border-1 rounded-lg border-[#8787875C]">
                Status
              </TableHead>
              <TableHead className="font-semibold text-xl border-1 rounded-lg border-[#8787875C]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((review) => (
              <TableRow>
                <TableCell className="text-lg">{review.courseName}</TableCell>
                <TableCell className="text-lg ">{review.reviewer}</TableCell>
                <TableCell className="text-lg flex">
                  {Array.from({ length:5}).map((_, index) => (
                    <FaStar 
                      key={index}
                      className={
                        index < review.rating
                          ? "fill-yellow-400"
                          : "fill-gray-300"
                      }
                    />
                  ))}
                </TableCell>
                <TableCell className="text-lg">{review.commint}</TableCell>
                <TableCell className="text-lg">{review.date}</TableCell>
                <TableCell
                  className={`text-lg ${
                    review.status === "normal"
                      ? "text-[#5BAE61]"
                      : "text-[#FF0000]"
                  }`}
                >
                  {review.status}
                </TableCell>
                <TableCell className="text-lg ">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        onClick={() => {
                          setShowList(!showList);
                        }}
                        className="  bg-[#587DBD]/45 pl-2.5 rounded-lg w-20 h-7 mt-2 hover:bg-[#587DBD]/65"
                      >
                        <img src={ViewEye} alt="eye-img" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-3">
                      <DropdownMenuItem>
                        <Button
                          variant="ghost"
                          onClick={() =>
                            navigate(`/reviewsRatings/viewFullReview/id=${review.id}`)
                          }
                          className="font-semibold"
                        >
                          View Full Review
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Button
                          variant="ghost"
                          className="text-[#DB3B3B] font-semibold hover:text-[#DB3B3B]"
                        >
                          Delete Review
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Button variant="ghost">Report</Button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {showList}
    </div>
  );
}
