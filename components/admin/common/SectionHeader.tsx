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
    <Card className="sticky top-2 z-[99] m-6 py-2 px-0 flex justify-between items-center bg-transparent shadow-none rounded-2xl">
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
