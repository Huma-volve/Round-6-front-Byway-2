import axios from "axios";
import { API } from "../api";
import type { ReviewResponse } from "@/types/Review/ReviewType";

export async function getReview(): Promise<ReviewResponse> {
  const res = await axios.get<ReviewResponse>(`${API}/instructor/reviews?page=2`,{
    headers : {
        Authorization : `Bearer 1|j3IPuNDhhGpW1bRefkRYzZW9oQXhDwg2gyocyDuF1ae5f0a3`
    }
  });
  return res.data;
}
