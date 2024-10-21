"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  ChipProps,
  Input,
  ScrollShadow,
} from "@nextui-org/react";
import { users } from "../bookings/data";
import { SearchIcon } from "@/components/icons2";

const statusColorMap: Record<string, ChipProps["color"]> = {
  booked: "success",
  declined: "danger",
  "checked-in": "secondary",
};

const columns = [
  { name: "BOOKING ID", uid: "id" },
  { name: "GUEST NAME", uid: "name" },
  { name: "ROOM TYPE", uid: "type" },
];

type User = (typeof users)[0];

export default function BookingsTable() {
  const [searchString, setSearchString] = useState<string>("");
  const [filteredData, setFileredData] = useState<any[]>([]);

  useEffect(() => {
    if (!searchString || searchString === "") {
      setFileredData(users);
      return;
    }

    const ft = users?.filter(
      (item) =>
        item.id.toString().includes(searchString?.toLocaleLowerCase()) ||
        item.name.toLowerCase().includes(searchString?.toLocaleLowerCase()) ||
        item.email.toLowerCase().includes(searchString?.toLocaleLowerCase())
    );
    setFileredData(ft);
  }, [searchString]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "id":
        return (
          <div className="my-2">
            <p className="italic opacity-80">{user.id}</p>
          </div>
        );
      case "name":
        return (
          <div className="my-2">
            <p>{user.name}</p>
            <p className="opacity-50 text-sm">{user.email}</p>
          </div>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="py-4 border border-gray-500/20 rounded-xl bg-content1">
      <div className="mb-1 px-4">
        <Input
          isClearable
          onClear={() => setSearchString("")}
          radius="lg"
          placeholder="Seach booking"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
      <ScrollShadow className="max-h-[26rem]">
        <Table shadow="none" color={"primary"} selectionMode="single">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody
            items={filteredData}
            emptyContent={"No guests to display."}
          >
            {(item) => (
              <TableRow key={item.id} className="cursor-pointer">
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollShadow>
    </div>
  );
}
