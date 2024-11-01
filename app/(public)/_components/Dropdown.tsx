export default function Dropdown({
  visible,
  setVisible,
  children,
}: {
  visible: boolean;
  setVisible: (value: boolean) => void;
  children?: React.ReactNode;
}) {
  if (!visible) return null;
  return (
    <div className="absolute z-50 top-24 left-0 rounded-2xl">{children}</div>
  );
}
