"use client";

import React, { useState } from "react";
import CheckInOutCard from "./CheckInOutCard";
import { useRouter } from "next/navigation";
import CheckInOutModal from "./CheckInOutModal";

export default function CheckInOutView() {
  const [isModalOpen, setModelOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex-1 w-full px-8 flex gap-6 items-center justify-center">
      <CheckInOutCard
        imgUrl={""}
        action={{
          onClick: () => {
            setModelOpen(true);
          },
          label: "",
        }}
      />
      <CheckInOutCard
        imgUrl={""}
        action={{
          onClick: () => {
            setModelOpen(true);
          },
          label: "",
        }}
      />

      <CheckInOutModal
        visible={isModalOpen}
        setVisible={(value) => setModelOpen(value)}
        title="Modal Title"
      >
        <p>This is the content of the full-screen modal.</p>
      </CheckInOutModal>
    </div>
  );
}
