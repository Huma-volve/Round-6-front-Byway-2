import type { ReactNode } from "react";

/**
 * Renders text inside a styled paragraph.
 *
 * @param props.children - The content to display.
 */
const Info = ({ children }: { children: ReactNode }) => {
  return (
    <p className="bg-white font-medium text-xl rounded-[10px] p-4 w-fit">
      {children}
    </p>
  );
};

export default Info;
