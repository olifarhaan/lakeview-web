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
  Tooltip,
  ChipProps,
  Input,
} from "@nextui-org/react";
import rooms from "@/data/rooms.json";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { SearchIcon } from "@/components/icons2";
import { useRouter } from "next/navigation";

const statusColorMap: Record<string, ChipProps["color"]> = {
  booked: "success",
  declined: "danger",
  "checked-in": "secondary",
};

const columns = [
  { name: "ROOM NO.", uid: "number" },
  { name: "FLOOR", uid: "floor" },
  { name: "STATUS", uid: "status" },
  { name: "", uid: "actions" },
];

type Room = (typeof rooms)[0];

export default function AllRoomsTable() {
  const [searchString, setSearchString] = useState<string>("");
  const [filteredData, setFileredData] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    if (!searchString || searchString === "") {
      setFileredData(rooms);
      return;
    }

    const ft = rooms?.filter(
      (item) =>
        item.id.toString().includes(searchString?.toLocaleLowerCase()) ||
        item.occupant_name
          ?.toLowerCase()
          .includes(searchString?.toLocaleLowerCase()) ||
        item.booking_reference
          ?.toLowerCase()
          .includes(searchString?.toLocaleLowerCase())
    );
    setFileredData(ft);
  }, [searchString]);

  const renderCell = React.useCallback((room: Room, columnKey: React.Key) => {
    const cellValue = room[columnKey as keyof Room];

    switch (columnKey) {
      case "number":
        return (
          <div className="my-2">
            <p className="opacity-80">{room.room_number}</p>
          </div>
        );
      case "floor":
        return (
          <div className="my-2">
            <p>{room.floor}</p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[room.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-5">
            <Tooltip color="foreground" content="Details">
              <span
                onClick={() => router.push("/admin/dashboard/booking")}
                className="text-lg cursor-pointer active:opacity-50"
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="foreground" content="Edit booking">
              <span
                onClick={() =>
                  router.push("/admin/dashboard/booking?edit=true")
                }
                className="text-lg cursor-pointer active:opacity-50"
              >
                <EditIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="py-4 border border-gray-500/20 rounded-xl bg-content1">
      <div className="w-2/5 mb-4 mx-4">
        <Input
          isClearable
          onClear={() => setSearchString("")}
          radius="lg"
          placeholder="Seach room"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
      <Table
        shadow="none"
        color={"primary"}
        selectionMode="multiple"
        aria-label="Example table with custom cells"
      >
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
        <TableBody items={filteredData} emptyContent={"No guests to display."}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
