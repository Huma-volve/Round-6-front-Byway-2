import type { ReactNode } from "react";

export type State = {
    firstName: string;
    lastName: string;
    headline: string;
    about: string;
    skills: string;
};

export type FormProps = {
    firstName: string;
    lastName: string;
    headline: string;
    about: string;
    skills: string;
};

export type SkillsSelectProps = {
    skills: string[];
    selectedSkills: string[];
    onChange: (skills: string[]) => void;
};

export type WorkExperience = {
    id: string;
    jobTitle: string;
    companyName: string;
    startDate: string;
    endDate: string;
};

export type WorkExperienceFormProps = {
    experience: WorkExperience;
    onUpdate: (id: string, field: keyof WorkExperience, value: string) => void;
    onRemove: (id: string) => void;
    canRemove: boolean;
};

// export type LinksProps ={
//     id: string;
//     jobTitle: string;
//     companyName: string;
//     startDate: string;
//     endDate: string;
// }

export type FormFieldProps = {
    id: string;
    label: string;
    children?: ReactNode;
    type?: string;
    value?: string;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    placeholder?: string;
    className?: string;
};

export type Course = {
    id: string;
    title: string;
    author: string;
    rating: number;
    totalRatings: number;
    image: string;
};
