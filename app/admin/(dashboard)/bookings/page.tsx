"use client";

import BookingsTable from "@/components/admin/bookings/table";
import SectionHeader from "@/components/admin/common/SectionHeader";
import { EventIconFilled } from "@/components/icons";
import { ButtonProps } from "@nextui-org/button";
import React from "react";

export default function page() {
  const actionPrimary: ButtonProps = {
    variant: "solid",
    color: "primary",
    children: "Create a type",
  };
  return (
    <div className="space-y-4">
      <SectionHeader
        icon={<EventIconFilled size={32} />}
        title="Bookings"
        actions={[actionPrimary]}
      />
      <div className="px-8">
        <BookingsTable />
      </div>
    </div>
  );
}
