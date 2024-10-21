"use client";
import React from "react";
import { Card, CardFooter, Button } from "@nextui-org/react";

interface Props {
  title?: string;
  imgUrl: string;
  action: {
    onClick: () => void;
    label: string;
  };
}

export default function CheckInOutCard(props: Props) {
  return (
    <Card isFooterBlurred radius="lg" shadow="sm" className="border-none">
      <div className="h-56 aspect-square p-4"></div>
      <CardFooter className="absolute bottom-0">
        <Button
          className="font-medium"
          color="primary"
          radius="full"
          size="lg"
          onClick={props.action.onClick}
        >
          {props.action.label}
        </Button>
      </CardFooter>
    </Card>
  );
}
