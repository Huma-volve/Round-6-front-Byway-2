export interface User {
  id: number;
  role: "student" | "instructor";
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  profile_picture?: string;
  headline?: string;
  about?: string;
  x_link?: string;
  linkedin_link?: string;
  youtube_link?: string;
  facebook_link?: string;
  website_link?: string;
}
