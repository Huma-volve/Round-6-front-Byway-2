import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormFieldProps } from "@/types/Mohamed/profile";

export const FormField = ({
  id,
  label,
  children,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
}: FormFieldProps) => {
  return (
    <div className={`${className} grid w-full items-center gap-2`}>
      <Label htmlFor={id}>{label}</Label>
      {children ? (
        children
      ) : type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`min-h-[120px] w-full rounded-lg border border-gray-200 bg-transparent p-4 text-base transition outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] resize-none`}
        />
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
        />
      )}
    </div>
  );
};
