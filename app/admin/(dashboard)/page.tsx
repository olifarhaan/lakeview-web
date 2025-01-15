"use client";

import { BedFilled, EventIconFilled } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col gap-8 py-8 px-8 md:py-10 h-full">
      <div className="flex gap-8 w-full items-center">
        <div>
          <p className="text-2xl font-semibold">Dashboard</p>
          <p className="text-sm opacity-80">Quick links</p>
        </div>
        <div className="">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 rounded-full text-sm p-4 bg-green-500/10 hover:bg-green-500/15 text-green-500 font-semibold transition-colors duration-150">
              <EventIconFilled className="w-5 -translate-y-0.5" />
              Check in
            </button>
            <button className="flex items-center gap-1 rounded-full text-sm p-4 bg-orange-500/10 hover:bg-orange-500/15 text-orange-500 font-semibold transition-colors duration-150">
              <EventIconFilled className="w-5 -translate-y-0.5" />
              Check out
            </button>
            <button className="flex items-center gap-1 rounded-full text-sm p-4 bg-violet-500/10 hover:bg-violet-500/15 text-violet-500 font-semibold transition-colors duration-150">
              <BedFilled className="w-5 -translate-y-0.5" />
              Rooms vacant
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-8 w-full">
        <div className="w-full p-4 rounded-xl border h-40">
          <p>Rooms occupied</p>
          <p>10/65</p>
        </div>
        <div className="w-full p-4 rounded-xl border h-40">
          <p>Bookings</p>
          <p>10/65</p>
        </div>
        <div className="w-full p-4 rounded-xl border h-40">
          <p>Bookings</p>
          <p>10/65</p>
        </div>
      </div>

      <div className="flex gap-8 w-full flex-1 h-full">
        <div className="flex-1 h-full border rounded-xl p-4">
          <p>Recent bookings</p>
        </div>
        <div className="flex-1 h-full border rounded-xl p-4">
          <p>Recent invoices</p>
        </div>
      </div>
    </section>
  );
}
