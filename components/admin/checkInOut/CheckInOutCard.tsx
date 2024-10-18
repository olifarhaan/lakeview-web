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
    <Card isFooterBlurred radius="lg" className="border-none">
      <div className="h-56 aspect-square p-4 bg-primary/10"></div>
      <CardFooter className="absolute bottom-0">
        <Button
          className="font-medium text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="lg"
          onClick={props.action.onClick}
        >
          Check in
        </Button>
      </CardFooter>
    </Card>
  );
}
