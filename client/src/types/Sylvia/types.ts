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

// cart 

export type courseDetails = {
    id: number,
    instructor_id: number,
    category_id: null,
    title: string,
    description: string,
    price: string,
    compare_price: string,
    image: string,
    cover_public_id: string,
    lessons_count: number,
    level: string,
    duration_hours: number,
    total_minutes: number,
    video_provider: null,
    status: string,
    created_at: string,
    updated_at: string,
}

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
        


// review popup

export type ReviewPopupProps = {
    open: boolean
    onClose: () => void
    onSubmitSuccess: () => void
}



// payment 

export type PaymentCourseDetails = {
    id: number,
    title: string,
    price: string
}