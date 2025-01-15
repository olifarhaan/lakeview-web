"use client";

import React from "react";
import { User } from "@nextui-org/user";
import SidebarButton from "./sidebarButton";
import menu from "./menu";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="h-full w-72 flex flex-col">
      <div className="flex items-center gap-2 py-4 px-7">
        <img src="/icon.svg" className="w-7 h-7" />
        <h2 className="text-sm mt-1 font-semibold">LakeView Admin</h2>
      </div>

      <div
        className="overflow-y-auto flex-grow px-5 py-2"
        style={{ direction: "rtl" }}
      >
        <div className="space-y-6" style={{ direction: "ltr" }}>
          {menu.map((group, index) => (
            <div key={index}>
              {group.title.trim() !== "" && (
                <p className="uppercase opacity-50 text-[.65rem]  font-bold mb-2">
                  {group.title}
                </p>
              )}
              {group.items.map((item, itemIndex) => (
                <SidebarButton
                  active={
                    index === 0 && itemIndex === 0
                      ? pathname === "/admin"
                      : pathname.includes("/admin" + item.href)
                  }
                  onClick={() => router.push("/admin" + item.href)}
                  key={itemIndex}
                  icon={<item.icon size={18} />}
                  label={item.name}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-500/25">
        <User
          name="Joi Doe"
          description="Receptionist"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
      </div>
    </div>
  );
}
