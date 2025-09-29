export type Course = {
  id: number;
  title: string;
  category: string;
  status: string;
  price: string;
  compare_price: string;
  level: string;
  lessons_count: number;
  image: string;
  created_at: string;
};

export type Review = {
  id: number;
  course_title: string;
  rating: number;
  comment: string;
  student_name: string;
  created_at: string;
};

export type RatingStats = {
  totalRatings: number;
  averageRating: number;
  percentages: Record<number, number>; 
};
