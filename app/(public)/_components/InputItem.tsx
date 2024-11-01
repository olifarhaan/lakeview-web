interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: any;
}

export default function InputItem({
  label,
  icon,
  value,
  onClick,
  onChange,
  contentEditable,
}: Input) {
  return (
    <div
      onClick={onClick}
      className="flex items-center px-3 border-1.5 border-black/20 rounded-2xl focus-within:border-black hover:border-black cursor-pointer transition-colors duration-150"
    >
      <span>{icon}</span>
      <p
        onChange={onChange}
        contentEditable={contentEditable}
        className={`p-3 bg-transparent outline-none ${!value && "opacity-50"}`}
      >
        {value || label}
      </p>
    </div>
  );
}
