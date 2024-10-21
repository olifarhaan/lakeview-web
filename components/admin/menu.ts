import {
  EventIconFilled,
  BedFilled,
  TransactionFilled,
  BillFilled,
  HandMoneyFilled,
  UsersFilled,
  DocsFilled,
  GiftFilled,
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
        href: "/home",
      },
    ],
  },
  {
    title: "Reservations",
    items: [
      {
        name: "Check-in/Out",
        icon: EventIconFilled,
        href: "/check-in-out",
      },
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
    ],
  },
  {
    title: "Financials",
    items: [
      {
        name: "Transactions",
        icon: TransactionFilled,
        href: "/financials/transactions",
      },
      {
        name: "Invoices",
        icon: BillFilled,
        href: "/financials/invoices",
      },
      {
        name: "Refund Management",
        icon: HandMoneyFilled,
        href: "/financials/refund-management",
      },
    ],
  },
  {
    title: "Guests",
    items: [
      {
        name: "Guest Directory",
        icon: UsersFilled,
        href: "/guests/directory",
      },
      {
        name: "Feedback Center",
        icon: DocsFilled,
        href: "/guests/feedback",
      },
      {
        name: "Loyalty Program",
        icon: GiftFilled,
        href: "/guests/loyalty-program",
      },
    ],
  },
  {
    title: "More",
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
