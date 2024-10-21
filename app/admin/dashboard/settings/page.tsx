import SectionHeader from "@/components/admin/common/SectionHeader";
import { SettingsFilled } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import React from "react";

export default function Settings() {
  return (
    <div>
      <SectionHeader icon={<SettingsFilled size={32} />} title="Settings" />
      <div className="mx-8 p-4 rounded-xl bg-content1 border border-content2 divide-y-1 divide-content2">
        <div className="flex gap-2 divide-x-1 divide-content2">
          <div className="w-1/2">
            <p className="font-semibold">Dark mode</p>
            <p className="opacity-50">
              Reduces eye strain by using a darker color
              palette, especially in low-light environments.
            </p>
          </div>
          <div className="pl-2">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </div>
  );
}
