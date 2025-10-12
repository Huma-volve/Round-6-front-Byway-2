import { useState, useRef, useEffect } from "react";
import { Label } from "@/components/ui/label";
import type { SkillsSelectProps } from "@/types/Mohamed/profile";

export const SkillsSelect = ({
  skills,
  selectedSkills,
  onChange,
}: SkillsSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSkill = (skill: string) => {
    onChange(
      selectedSkills.includes(skill)
        ? selectedSkills.filter((s) => s !== skill)
        : [...selectedSkills, skill]
    );
  };

  return (
    <div className="grid w-full items-center gap-2">
      <Label htmlFor="skills" className="text-gray-900">
        Skills
      </Label>
      <div className="relative" ref={dropdownRef}>
        <div
          className="w-full h-14 px-4 py-3 border border-gray-300 rounded-lg bg-white cursor-pointer flex items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={
              selectedSkills.length === 0 ? "text-gray-400" : "text-gray-700"
            }
          >
            {selectedSkills.length === 0
              ? "please select"
              : selectedSkills.join(", ")}
          </span>
          <svg
            className={`w-4 h-4 text-gray-600 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-4 py-3 flex items-center hover:bg-gray-50 cursor-pointer"
                onClick={() => toggleSkill(skill)}
              >
                <div className="flex-1 text-gray-700">{skill}</div>
                <div
                  className={`w-4 h-4 border-2 rounded ${
                    selectedSkills.includes(skill)
                      ? "bg-blue-600 border-blue-600"
                      : "border-gray-300"
                  } flex items-center justify-center`}
                >
                  {selectedSkills.includes(skill) && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 
                      0l-4-4a1 1 0 011.414-1.414L8 
                      12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
