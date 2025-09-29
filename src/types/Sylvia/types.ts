// Enrolled courses page

export type coursesList = enrolledCourse[];


export type enrolledCourse = {
    id: number;
    title: string;
    category: string;
    status: string;
    price: string;
    compare_price: string;
    totalHours: number;
    level: string;
    lessons_count: number;
    image: string;
    created_at: string;
};

export type lesson = {
    id: number;
    title: string;
    video_url: string;
    done: boolean;
}

export type enrolledCourseDetails = {
    id: number;
    title: string;
    description: string;
    status: string;
    progress: number;
    lessons: lesson[];
}
        
