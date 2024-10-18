import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import BookingsTable from "./BookingsTable";

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
  important?: boolean;
  children?: React.ReactNode;
  title?: string;
}

export default function CheckInOutModal({
  visible,
  setVisible,
  important = false,
  children,
  title,
}: Props) {
  const [show, setShow] = useState(visible);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [shouldRender, setShouldRender] = useState(visible);

  useEffect(() => {
    if (visible) {
      // Start showing the modal and enable the slide-in animation
      setShouldRender(true);
      setTimeout(() => setShow(true), 10);
    } else {
      // Trigger the slide-out animation
      setShow(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  function renderView() {
    switch (currentLevel) {
      case 0:
        return (
          <div className="flex justify-center">
            <div className="w-1/2">
              <BookingsTable />
            </div>
          </div>
        );

      default:
        break;
    }
  }

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed pt-16 inset-0 z-[999] flex flex-col bg-gray-500/10 bg-opacity-75`}
    >
      <div
        className={`flex-1 h-full flex flex-col transition-transform duration-300 transform ${show ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="h-full p-4 bg-background shadow-lg rounded-t-xl">
          <div className="w-full flex items-center justify-between">
            <h2 className="ml-4 text-2xl font-bold">Guest Check-in</h2>
            <Button
              onClick={() => setVisible(false)}
              color="danger"
              className="p-2 rounded-full transition-colors duration-150 hover:bg-gray-500/20"
            >
              Cancel
            </Button>
          </div>
          <div className="m-auto px-4 w-1/2">
            <div className="flex justify-between font-bold mb-2">
              <p>{levels[currentLevel]}</p>
              <p>
                {currentLevel + 1}/{levels.length}
              </p>
            </div>
            <div className="relative h-2 bg-gray-500/20 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
                style={{
                  width: `${((currentLevel + 1) / levels.length) * 100}%`,
                }}
              />
            </div>
          </div>
          <div className="p-8">{renderView()}</div>
        </div>
      </div>
    </div>
  );
}

const levels = [
  "Select booking",
  "Validate guest",
  "Confirm check-in",
  "Finish",
];
