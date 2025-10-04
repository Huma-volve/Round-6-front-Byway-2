/**
 * Avatar component
 *
 * Renders a circular avatar with the first letter of the provided username.
 * The background and text colors change depending on the `color` prop.
 *
 * @component
 * @param {Object} props
 * @param {string} props.username - The username whose first character will be displayed inside the avatar.
 * @param {"blue" | "gray"} props.color - Determines the avatar's color theme:
 *    - "blue": Blue background with blue text.
 *    - "gray": Light gray background with dark gray text.
 *
 * @example
 * <Avatar username="Nada" color="blue" />
 * // Renders a circular avatar with "N" on a blue background
 */

const Avatar = ({
  username,
  color,
}: {
  username: string;
  color: "blue" | "gray";
}) => {
  return (
    <div
      className={`md:h-32 md:w-32 h-24 w-24 rounded-full flex justify-center items-center select-none ${
        color == "blue" ? "bg-background-blue" : "bg-[#D2D2D2]/50"
      }`}
    >
      <p
        className={`font-semibold text-5xl md:text-6xl capitalize ${
          color == "blue" ? "text-blue-website" : "text-[#334155]"
        }`}
      >
        {username.slice(0, 1)}
      </p>
    </div>
  );
};

export default Avatar;
