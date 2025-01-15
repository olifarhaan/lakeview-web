import {
  EventIconFilled,
  BedFilled,
  BillFilled,
  UsersFilled,
  ProfileFilled,
  SettingsFilled,
  InfoFilled,
  SidebarFilled,
} from "../icons";

const menu = [
  {
    title: "",
    items: [
      {
        name: "Dashboard",
        icon: SidebarFilled,
        href: "/",
      },
    ],
  },
  {
    title: "Reservations",
    items: [
      {
        name: "Bookings",
        icon: EventIconFilled,
        href: "/bookings",
      },
      {
        name: "Rooms",
        icon: BedFilled,
        href: "/rooms",
      },
      {
        name: "Invoices",
        icon: BillFilled,
        href: "/financials/invoices",
      },
      {
        name: "Guest directory",
        icon: UsersFilled,
        href: "/guests/directory",
      },
    ],
  },
  {
    title: "Others",
    items: [
      {
        name: "Profile",
        icon: ProfileFilled,
        href: "/profile",
      },
      {
        name: "Settings",
        icon: SettingsFilled,
        href: "/settings",
      },
      {
        name: "Help",
        icon: InfoFilled,
        href: "/help",
      },
    ],
  },
];

export default menu;
