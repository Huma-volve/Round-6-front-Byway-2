// API goes here
import type { CourseResponse } from "@/types/Courses/types";
import axios from "axios";

export const API = "http://round6-byway.huma-volve.com";
const api = axios.create({
  baseURL: "http://round6-byway.huma-volve.com/api",
});

export async function fetchCourseDetails(courseId: number) {
  const response = await api.get<CourseResponse>(
    `/instructor/courses/${courseId}/lessons`
  );
  return response.data;
}
