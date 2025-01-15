"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Button, ButtonProps } from "@nextui-org/button";
import SectionHeader from "@/components/admin/common/SectionHeader";
import { BedFilled } from "@/components/icons";
import ClassesCard from "@/components/rooms/ClassesCard";
import roomClasses from "@/data/classes.json";
import AllRoomsTable from "@/components/admin/rooms/AllRoomsTable";

export default function page() {
  const actionPrimary: ButtonProps = {
    variant: "solid",
    color: "primary",
    children: "Create a type",
  };

  const tab1Title = (
    <p className="flex items-center gap-2 font-bold">
      <BedFilled /> All rooms
    </p>
  );
  const tab2Title = (
    <p className="flex items-center gap-2 font-bold">
      <BedFilled /> Room types
    </p>
  );

  return (
    <div className="h-full overflow-y-auto">
      <Tabs className="px-6 mt-6">
        <Tab key="types" title={tab2Title} className="p-6 rounded-full">
          <div className="sticky top-2 z-50 p-4 my-6 rounded-xl border border-content2 bg-content1 flex justify-between items-center">
            <p className="font-semibold text-3xl">Room types</p>
            <Button color="primary">Create room type</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            {roomClasses?.map((item, index) => (
              <ClassesCard key={index} {...item} />
            ))}
          </div>
        </Tab>
        <Tab className="p-6 rounded-2xl" key="Inventory" title={tab1Title}>
          <div className="sticky top-2 z-50 p-4 my-6 rounded-xl border border-content2 bg-content1 flex justify-between items-center">
            <p className="font-semibold text-3xl">All Room</p>
            <Button color="primary">Add a room</Button>
          </div>
          <AllRoomsTable />
        </Tab>
      </Tabs>
    </div>
  );
}
