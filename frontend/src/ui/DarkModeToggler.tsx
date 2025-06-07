import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useDarkMode } from "@/hooks/useDarkMode";

function DarkModeToggler() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={() => toggleDarkMode()}>
      {isDarkMode ? (
        <IoMdMoon className="size-5 hover:text-primary-700" />
      ) : (
        <MdOutlineWbSunny className="size-5 hover:text-primary-700" />
      )}
    </button>
  );
}

export default DarkModeToggler;
