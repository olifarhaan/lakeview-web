"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useState } from "react";
import { EventIconFilled, UsersFilled } from "@/components/icons";
import { Calendar, DateValue } from "@nextui-org/react";
import InputItem from "./InputItem";
import Dropdown from "./Dropdown";
import { useRouter } from "next/navigation";

type CheckInOutDate = {
  checkIn: DateValue | null;
  checkOut: DateValue | null;
};

const prompts = [
  "Select your check-in date",
  "When check-out?",
  "How many of you?",
];

export default function LandingPage() {
  const { push } = useRouter();

  const [dates, setDates] = useState<CheckInOutDate>({
    checkIn: null,
    checkOut: null,
  });
  const [persons, setPersons] = useState(1);
  const [modalVisible, setModalVisible] = useState<string | null>(null);

  const handleDateChange = (type: "checkIn" | "checkOut", value: DateValue) => {
    setDates((state) => ({ ...state, [type]: value }));
    setModalVisible(null);
  };

  const toggleModal = (value: string | null) => {
    setModalVisible(value);
  };

  function renderItem(type: "checkIn" | "checkOut" | "personInput" | "submit") {
    switch (type) {
      case "checkIn":
        return renderAnimated(true, renderDatePicker("checkIn", 0));

      case "checkOut":
        return renderAnimated(
          dates?.checkIn !== null,
          renderDatePicker("checkOut", 1)
        );

      case "personInput":
        return renderAnimated(dates?.checkOut !== null, renderPersonInput());

      case "submit":
        return renderAnimated(dates?.checkOut !== null, renderSubmit());

      default:
        break;
    }
  }

  function renderAnimated(visible: boolean, children: ReactNode) {
    return (
      <AnimatePresence>
        {visible && (
          <motion.div
            className="relative mt-4"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  const renderDatePicker = (
    dateType: "checkIn" | "checkOut",
    index: number
  ) => {
    const dateValue = dates[dateType];
    const label = prompts[index];

    return (
      <div className="relative">
        <p className="my-3 text-lg">{label}</p>
        <InputItem
          label="dd/mm/yyyy"
          icon={<EventIconFilled />}
          onClick={() => toggleModal(dateType)}
          value={dateValue ? dateValue.toString() : ""}
        />
        <Dropdown
          visible={modalVisible === dateType}
          setVisible={(value) => setModalVisible(!value ? dateType : null)}
        >
          <div className="min-w-56">
            <Calendar
              value={dateValue}
              onChange={(value) => handleDateChange(dateType, value)}
            />
          </div>
        </Dropdown>
      </div>
    );
  };

  function renderSubmit() {
    return (
      <button
        onClick={() =>
          push(
            `/find?date_in=${encodeURI(dates.checkIn?.toString() || "NA")}&date_out=${encodeURIComponent(dates.checkOut?.toString() || "NA")}&p_total=${encodeURIComponent(persons)}`
          )
        }
        className="bg-black hover:opacity-90 rounded-2xl text-white font-bold text-lg px-10 py-2.5 w-fit mt-8"
      >
        Find rooms
      </button>
    );
  }

  function renderPersonInput() {
    return (
      <div className="relative">
        <p className="my-3 text-lg">{prompts[2]}</p>
        <div className="flex items-center px-3 border-1.5 border-black/20 rounded-2xl hover:border-black cursor-pointer transition-colors duration-150">
          <UsersFilled />
          <p
            className={`flex-1 p-3 bg-transparent outline-none ${persons === 0 && "opacity-50"}`}
          >
            {persons}
          </p>
          <div className="flex items-center">
            <button
              onClick={() => setPersons(Math.max(persons - 1, 1))}
              disabled={persons <= 1}
              className={`p-2 px-4 bg-black text-white font-bold rounded-xl ${persons <= 1 ? "opacity-50" : "opacity-90 hover:opacity-100"}`}
            >
              -
            </button>
            <div className="w-divider h-8 bg-black/20 mx-4" />
            <button
              onClick={() => setPersons(persons + 1)}
              className="p-2 px-4 bg-black text-white font-bold rounded-xl opacity-90 hover:opacity-100"
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:h-screen w-full max-w-[1300px] m-auto">
        <div className="flex-1">
          <div className="rounded-3xl bg-gray-700/0 backdrop-blur-lg max-w-[1100px] w-full p-8 text-black transition-all duration-150">
            <p className="text-8xl font-black mb-8">Book your stay.</p>
            <div className="flex max-w-[550px] space-y-4">
              <div className="flex-1 transition-all duration-150">
                <div className="relative">
                  {renderItem("checkIn")}
                  {renderItem("checkOut")}
                  {renderItem("personInput")}
                  {renderItem("submit")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 h-[calc(100%-8rem)] m-16 overflow-hidden rounded-b-2xl">
          <div className="absolute bottom-12 z-10 text-center text-white w-full">
            <p>
              <span className="text-8xl font-black">Lakeview</span>
              <span className="italic text-md font-medium">ressorts</span>
            </p>
            <p className="opacity-70">
              Experience the Magic of Lakeside Living
            </p>
          </div>
          <video
            className="h-full w-full object-cover animate-zoom-out"
            src="/hotelvideo.mp4"
            autoPlay
            loop
            muted
          />
          <div className="absolute top-0 left-0 h-full w-full z-1 bg-gradient-to-b from-white via-black/50 to-black" />
        </div>
      </div>
    </section>
  );
}
