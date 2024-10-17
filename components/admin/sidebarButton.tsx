import React from "react";

interface SidebarButtonProps {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  label,
  onClick,
  icon,
  active = true,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex gap-2 items-center w-full px-4 py-2 my-1 text-left transition duration-200 rounded-lg
        ${active ? "dark:bg-primary/20 bg-primary dark:text-primary text-white" : "hover:bg-gray-500/15 grayscale opacity-70"}
        `}
    >
      <span className={`${!active && "opacity-50"}`}> {icon}</span>
      <p className="font-semibold text-sm">{label}</p>
    </button>
  );
};

export default SidebarButton;
