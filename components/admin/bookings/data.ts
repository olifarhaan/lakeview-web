const columns = [
  { name: "BOOKING ID", uid: "id" },
  { name: "GUEST NAME", uid: "name" },
  { name: "BOOKING STATUS", uid: "status" },
  { name: "PAYMENT STATUS", uid: "payment-status" },
  { name: "", uid: "actions" },
];

const users = [
  {
    id: 15645,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "pending",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 20980,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "checked-in",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 18093,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "checked-out",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 87984,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "booked",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 59870,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "declined",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

export { columns, users };
