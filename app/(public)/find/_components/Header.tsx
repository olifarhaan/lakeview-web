import React from "react";
import InputItem from "../../_components/InputItem";
import { EventIconFilled } from "@/components/icons";

interface Props {
  checkInDate: string;
  checkOutDate: string;
}

export default function Header({ checkInDate, checkOutDate }: Props) {
  return (
    <div className="w-full relative h-80">
      {/* Background Overlay */}
      <div className="absolute top-0 h-2/3 w-full bg-[#114d7e] z-0 overflow-hidden">
        <video
          className="h-full w-full object-cover animate-zoom-out"
          src="/hotelvideo.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 h-full w-full z-1 bg-gradient-to-b to-white via-black/50 from-black" />
      </div>

      {/* Foreground Content */}
      <div className="absolute top-1/3 w-full z-10">
        <div className="max-w-[900px] m-auto h-56 bg-white p-4 rounded-2xl border">
          <div className="flex gap-6">
            <div>
              <p className="font-bold opacity-50">Check-in</p>
              <InputItem
                label={"Check-in"}
                icon={<EventIconFilled />}
                value={checkInDate}
              />
            </div>
            <div>
              <p className="font-bold opacity-50">Check-out</p>
              <InputItem
                label={"Check-out"}
                icon={<EventIconFilled />}
                value={checkOutDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
