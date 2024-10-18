"use client";

import BookingsTable from "@/components/admin/bookings/table";
import { Button } from "@nextui-org/button";
import React from "react";

export default function page() {
  return (
    <div className="space-y-4">
      <div className="p-8 flex justify-between items-center">
        <p className="font-semibold text-3xl">My bookings</p>

        <Button variant="solid" color="primary">
          Create booking
        </Button>
      </div>
      <div className="px-8">
        <BookingsTable />
      </div>
    </div>
  );
}
