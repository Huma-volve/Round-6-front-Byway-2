export type Review = {
    id: number;
    rating: number;
    course_title: string;
    comment: string;
    student_name: string;
    created_at: string;
}

export type ReviewResponse = {
    data : Review[]
    success :boolean
    message : string
}