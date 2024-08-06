import { useTheme } from "../../../context/theme/ThemeProvider";
import { Sun, HalfMoon } from "react-huge-icons/outline";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <div className="duration-500 z-50 ease-out">
      {theme === "dark" ? (
        <button
          className={`py-2 px-4 text-[#000] rounded`}
          onClick={toggleTheme}
        >
          <Sun fontSize={20} />
        </button>
      ) : (
        <button
          className={`py-2 px-4 text-[#000] rounded`}
          onClick={toggleTheme}
        >
          <HalfMoon fontSize={20} />
        </button>
      )}
    </div>
  );
}

export default ThemeButton;
