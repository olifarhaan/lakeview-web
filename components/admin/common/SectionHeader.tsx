"use client";

import {
  Button,
  ButtonProps,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  actions?: ButtonProps[];
  children?: React.ReactNode;
}

export default function SectionHeader(props: Props) {
  return (
    <Card className="sticky top-2 z-[99] m-8 p-2 flex justify-between items-center shadow-none border border-gray-500/20 rounded-2xl">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex items-center gap-2">
          {props.icon}
          <p className="mt-1 font-semibold text-2xl">{props.title}</p>
        </div>

        <div className="flex items-center gap-2">
          {props.actions?.map((item, index) => (
            <Button key={index} {...item}>
              {item.children}
            </Button>
          ))}
        </div>
      </CardHeader>
      {props.children && <CardBody>{props.children}</CardBody>}
    </Card>
  );
}
