import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarInput } from "@/components/ui/CalendarInput";
import { Trash2 } from "lucide-react";
import type { WorkExperienceFormProps } from "@/types/Mohamed/profile";

export const WorkExperienceForm = ({
  experience,
  onUpdate,
  onRemove,
  canRemove,
}: WorkExperienceFormProps) => (
  <>
    <div className="flex flex-col gap-y-5 gap-x-16 ">
      <Label className="text-gray-900">Work Experience</Label>

      <div className="w-[47%] flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Job Title"
          value={experience.jobTitle}
          onChange={(e) => onUpdate(experience.id, "jobTitle", e.target.value)}
        />

        <Input
          type="text"
          placeholder="Company Name"
          value={experience.companyName}
          onChange={(e) =>
            onUpdate(experience.id, "companyName", e.target.value)
          }
        />
      </div>

      <div className="flex gap-4">
        <div className="w-1/3 flex flex-col gap-2">
          <Label>Start Date</Label>
          <CalendarInput />
        </div>
        <div className="w-1/3 flex flex-col gap-2">
          <Label>End Date</Label>
          <CalendarInput />
        </div>
      </div>
    </div>
    {canRemove && (
      <div>
        <Button
          type="button"
          variant="outline"
          onClick={() => onRemove(experience.id)}
          className="text-red-600 hover:text-red-700 hover:bg-red-50 cursor-pointer"
        >
          <Trash2 className="w-4 h-4 mr-2" /> Remove Experience
        </Button>
      </div>
    )}
  </>
);
