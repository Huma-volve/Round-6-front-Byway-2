import type { ReactNode } from "react";

export type FormProps = {
  firstName: string;
  lastName: string;
  headline: string;
  about: string;
  skills: string;
};
export type WorkExperience = {
  id: string;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
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
