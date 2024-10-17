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
import { columns, users } from "./data";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { SearchIcon } from "@/components/icons2";
import { useRouter } from "next/navigation";

const statusColorMap: Record<string, ChipProps["color"]> = {
  booked: "success",
  declined: "danger",
  "checked-in": "secondary",
};

type User = (typeof users)[0];

export default function BookingsTable() {
  const [searchString, setSearchString] = useState<string>("");
  const [filteredData, setFileredData] = useState<any[]>([]);

  const router = useRouter();

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
    <div>
      <div className="w-2/5 mb-4">
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
      <Table
        shadow="none"
        color={"primary"}
        selectionMode="multiple"
        aria-label="Example table with custom cells"
        className="border border-gray-500/20 rounded-xl"
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
