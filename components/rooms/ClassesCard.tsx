"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { BedFilled, BoxFilled, UsersFilled } from "../icons";

export default function ClassesCard(props: RoomClass) {
  return (
    <Card className="py-4 w-fit cursor-pointer shadow-sm border border-content2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="w-full flex justify-between items-center">
          {/* <p className="p-1 px-2 border border-gray-500/20 rounded-full text-tiny font-medium bg-success/10 text-success">
            {props.roomsAvailable} Rooms available
          </p> */}
          <div className="my-2 flex gap-3">
            <div className="flex gap-1 items-center opacity-70">
              <BedFilled size={17} />
              <small className="mt-[1.75px] font-bold">
                {props.roomsAssociated}
              </small>
            </div>
            <div className="flex gap-1 items-center opacity-70">
              <UsersFilled size={18} />
              <small className="mt-[1.75px] font-bold">
                {props.maxCapacity}
              </small>
            </div>
          </div>
          <Button color="primary" className="w-fit h-fit rounded-full py-2 border bg-transparent text-primary-500">
            <BoxFilled size={16} />
            Manage
          </Button>
        </div>
        <div className="my-1">
          <h4 className="font-bold text-large">
            <span className="mr-2 text-sm opacity-70 font-medium">
              Starts from
            </span>
            ₹ {props.basePrice}
          </h4>
          <h4 className="font-bold text-md">{props.title}</h4>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl aspect-video"
          src={
            props?.thumbnailUrl ||
            "https://thumbs.dreamstime.com/b/web-324830775.jpg"
          }
          height={180}
        />
      </CardBody>
      {/* <CardFooter className="flex flex-col items-start">
        <div className="my-2 w-full flex gap-3">
          <div className="flex gap-1 items-center opacity-70">
            <BedFilled size={17} />
            <small className="mt-[1.75px] font-bold">
              {props.roomsAssociated} Rooms
            </small>
          </div>
          <div className="flex gap-1 items-center opacity-70">
            <UsersFilled size={18} />
            <small className="mt-[1.75px] font-bold">
              {props.maxCapacity} Adults
            </small>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}
