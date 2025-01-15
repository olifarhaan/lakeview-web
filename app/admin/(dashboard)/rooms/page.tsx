"use client";
import React, { Key, useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";
import { BedFilled } from "@/components/icons";
import ClassesCard from "@/components/rooms/ClassesCard";
import roomClasses from "@/data/classes.json";
import AllRoomsTable from "@/components/admin/rooms/AllRoomsTable";

export default function Page() {
  const [currentTab, setCurrentTab] = useState<any>("category");

  const tab1Title = (
    <p className="flex items-center gap-2 font-bold">
      <BedFilled /> All rooms
    </p>
  );
  const tab2Title = (
    <p className="flex items-center gap-2 font-bold">
      <BedFilled /> Room category
    </p>
  );

  const handleTabChange = (key?: Key) => {
    setCurrentTab(key);
  };

  return (
    <div className="relative h-full overflow-y-auto">
      <Tabs
        selectedKey={currentTab}
        onSelectionChange={handleTabChange}
        className="px-6 mt-6"
      >
        <Tab key="category" title={tab2Title} className="p-6 rounded-full">
          <div className="flex flex-wrap gap-4">
            {roomClasses?.map((item) => (
              <ClassesCard key={item.id} {...item} />
            ))}
          </div>
        </Tab>
        <Tab key="list" title={tab1Title} className="p-6 rounded-2xl">
          <AllRoomsTable />
        </Tab>
      </Tabs>
      <Button
        className="absolute right-0 top-0 m-8"
        color="primary"
        onClick={() => {} /* Action for button */}
      >
        {currentTab === "category" ? "Create room type" : "Create Room"}
      </Button>
    </div>
  );
}
