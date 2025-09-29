import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/FormField";
import { SkillsSelect } from "./SkillsSelect";
import { WorkExperienceForm } from "./WorkExperienceForm";
import type { State, WorkExperience } from "@/types/Mohamed/profile";
import { useSelector } from "react-redux";

export const Profile = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  useSelector((state: State) => console.log(state));
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([
    { id: "1", jobTitle: "", companyName: "", startDate: "", endDate: "" },
  ]);

  const skills = ["Dart", "Flutter", "Git", "Github", "UI/UX Design"];

  const addWorkExperience = () => {
    setWorkExperiences((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        jobTitle: "",
        companyName: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const removeWorkExperience = (id: string) => {
    if (workExperiences.length > 1) {
      setWorkExperiences(workExperiences.filter((exp) => exp.id !== id));
    }
  };

  const updateWorkExperience = (
    id: string,
    field: keyof WorkExperience,
    value: string
  ) => {
    setWorkExperiences(
      workExperiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  return (
    <>
      <div className="max-w-6xl m-auto min-h-screen my-24">
        <div>
          <form className="space-y-8">
            {/* Personal Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16">
              <FormField
                id="firstName"
                label="First Name"
                placeholder="Label"
              />
              <FormField id="lastName" label="Last Name" placeholder="Label" />
              <FormField id="headline" label="Headline" placeholder="Label" />
              <FormField
                id="about"
                label="About"
                type="textarea"
                placeholder="Label"
                className="md:col-span-2"
              />
              {/* Skills Section */}
              <SkillsSelect
                skills={skills}
                selectedSkills={selectedSkills}
                onChange={setSelectedSkills}
              />
            </div>

            {/* Work Experience Section */}
            <div className="space-y-6">
              {workExperiences.map((exp) => (
                <WorkExperienceForm
                  key={exp.id}
                  experience={exp}
                  onUpdate={updateWorkExperience}
                  onRemove={removeWorkExperience}
                  canRemove={workExperiences.length > 1}
                />
              ))}
              <div>
                <Button
                  type="button"
                  onClick={addWorkExperience}
                  className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add another Experience
                </Button>
              </div>
            </div>

            {/* Links Section */}
            <div className="space-y-6 border border-gray-200 p-4 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900">Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16">
                <FormField
                  placeholder="Label"
                  id="website"
                  label="Website"
                  type="url"
                  className="md:col-span-2"
                />
                <FormField
                  placeholder="Label"
                  id="twitter"
                  label="X (Formerly Twitter)"
                  type="url"
                  className="md:col-span-2"
                />
                <FormField
                  placeholder="Label"
                  id="linkedin"
                  label="LinkedIn"
                  type="url"
                  className="md:col-span-2"
                />
                <FormField
                  placeholder="Label"
                  id="youtube"
                  label="YouTube"
                  type="url"
                  className="md:col-span-2"
                />
                <FormField
                  placeholder="Label"
                  id="facebook"
                  label="Facebook"
                  type="url"
                  className="md:col-span-2"
                />
              </div>
            </div>
          </form>
          <div className=" w-full flex mt-12">
            <Button className="w-1/2 h-[75px] bg-green hover:bg-transparent border hover:border-green hover:text-green transition duration-200 text-white text-[32px] font-bold py-2.5 px-6 rounded-lg cursor-pointer">
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
