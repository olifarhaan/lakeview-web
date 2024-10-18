import ClassesCard from "@/components/rooms/ClassesCard";
import { Button } from "@nextui-org/button";
import React from "react";
import roomClasses from "@/data/classes.json";
import { BedFilled } from "@/components/icons";

export default function Classes() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="p-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BedFilled size={32}/>
          <p className="mt-1 font-semibold text-3xl">Room classes</p>
        </div>

        <Button variant="solid" color="primary">
          Add a class
        </Button>
      </div>
      <div className="px-8 pb-8 flex flex-1 flex-wrap gap-4">
        {roomClasses?.map((item, index) => (
          <ClassesCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
