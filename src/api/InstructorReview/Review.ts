import axios from "axios";
import { API } from "../api";
import type { ReviewResponse } from "@/khaled/ReviewType";

export async function getReview(): Promise<ReviewResponse> {
  const { data } = await axios.get<ReviewResponse>(`${API}/instructor/reviews?page=2`);
  return data;
}
