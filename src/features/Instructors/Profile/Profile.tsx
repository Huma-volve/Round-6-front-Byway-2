import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface WorkExperience {
  id: string;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
}

export const Profile = () => {
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([
    { id: "1", jobTitle: "", companyName: "", startDate: "", endDate: "" },
  ]);

  const addWorkExperience = () => {
    const newExperience: WorkExperience = {
      id: Date.now().toString(),
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
    };
    setWorkExperiences([...workExperiences, newExperience]);
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
      <div className="max-w-5xl m-auto min-h-screen mt-24">
        <div className="p-4">
          <form className="space-y-8">
            {/* Personal Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16">
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="firstName">First Name</Label>
                <Input type="text" id="firstName" placeholder="Label" />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input type="text" id="lastName" placeholder="Label" />
              </div>
              <div className="grid w-full items-center gap-1 md:col-span-2">
                <Label htmlFor="headline">Headline</Label>
                <Input type="text" id="headline" placeholder="Label" />
              </div>
              <div className="grid w-full items-center gap-1 md:col-span-2">
                <Label htmlFor="about">About</Label>
                <textarea
                  id="about"
                  placeholder="Label"
                  className="min-h-[120px] w-full rounded-lg border border-gray-200 bg-transparent p-4 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] resize-none"
                />
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <Label htmlFor="skills">Skills</Label>
              <select
                id="skills"
                className="w-full h-14 rounded-lg border border-gray-200 bg-transparent p-4 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
              >
                <option value="">please select</option>
                <option value="javascript">JavaScript</option>
                <option value="react">React</option>
                <option value="typescript">TypeScript</option>
                <option value="nodejs">Node.js</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="csharp">C#</option>
                <option value="php">PHP</option>
                <option value="ruby">Ruby</option>
                <option value="go">Go</option>
              </select>
            </div>

            {/* Work Experience Section */}
            <div className="space-y-6">
              <Label className="text-lg font-semibold">Work Experience</Label>

              {workExperiences.map((experience) => (
                <div
                  key={experience.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16"
                >
                  <div className="grid w-full items-center gap-1">
                    <Label htmlFor={`jobTitle-${experience.id}`}>
                      Job Title
                    </Label>
                    <Input
                      type="text"
                      id={`jobTitle-${experience.id}`}
                      value={experience.jobTitle}
                      onChange={(e) =>
                        updateWorkExperience(
                          experience.id,
                          "jobTitle",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="grid w-full items-center gap-1">
                    <Label htmlFor={`companyName-${experience.id}`}>
                      Company Name
                    </Label>
                    <Input
                      type="text"
                      id={`companyName-${experience.id}`}
                      value={experience.companyName}
                      onChange={(e) =>
                        updateWorkExperience(
                          experience.id,
                          "companyName",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="grid w-full items-center gap-1">
                    <Label htmlFor={`startDate-${experience.id}`}>
                      Start date
                    </Label>
                    <div className="relative">
                      <Input
                        type="date"
                        id={`startDate-${experience.id}`}
                        value={experience.startDate}
                        onChange={(e) =>
                          updateWorkExperience(
                            experience.id,
                            "startDate",
                            e.target.value
                          )
                        }
                        className="pr-10"
                      />
                      <svg
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1">
                    <Label htmlFor={`endDate-${experience.id}`}>End date</Label>
                    <div className="relative">
                      <Input
                        type="date"
                        id={`endDate-${experience.id}`}
                        value={experience.endDate}
                        onChange={(e) =>
                          updateWorkExperience(
                            experience.id,
                            "endDate",
                            e.target.value
                          )
                        }
                        className="pr-10"
                      />
                      <svg
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  {workExperiences.length > 1 && (
                    <div className="md:col-span-2 flex justify-end">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => removeWorkExperience(experience.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        Remove Experience
                      </Button>
                    </div>
                  )}
                </div>
              ))}
              <Button
                type="button"
                onClick={addWorkExperience}
                className="bg-blue-600 hover:bg-blue-700 text-white"
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

            {/* Links Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16">
                <div className="grid w-full items-center gap-1">
                  <Label htmlFor="website">Website</Label>
                  <Input type="url" id="website" placeholder="Label" />
                </div>
                <div className="grid w-full items-center gap-1">
                  <Label htmlFor="twitter">X (Formerly twitter)</Label>
                  <Input type="url" id="twitter" placeholder="Label" />
                </div>
                <div className="grid w-full items-center gap-1">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input type="url" id="linkedin" placeholder="Label" />
                </div>
                <div className="grid w-full items-center gap-1">
                  <Label htmlFor="youtube">Youtube</Label>
                  <Input type="url" id="youtube" placeholder="Label" />
                </div>
                <div className="grid w-full items-center gap-1">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input type="url" id="facebook" placeholder="Label" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
