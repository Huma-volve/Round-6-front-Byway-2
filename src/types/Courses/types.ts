export interface Course {
    id:number;
    title : string;
    description : string;
    price : string;
    image : string;
    status : string;
    level : string;
    lessons_count : number;
    duration_hours : number;


};

interface CourseData {
    course: Course;
    enrollment_count : number;
    reviews : any[];
    average_rating : number;
}

export interface CourseResponse {
    success : boolean;
    message : string;
    data : CourseData;
}