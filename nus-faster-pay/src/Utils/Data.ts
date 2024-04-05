import { PaymentItem } from "./Types";

export const paymentItems: PaymentItem[] = [
  {
    title: "Education Records System Tuition Fees",
    description: "AY23/24 Semester 1 Tuition Fees",
    price: 6287.2,
    quantity: 1,
    deadline: "2024-01-30",
  },
  {
    title: "Library Fees",
    description: "Library Book Loan Fees",
    price: 0.0,
    quantity: 1,
    deadline: "2024-02-01",
  },
  {
    title: "Student Housing Fees",
    description: "AY23/24 Semester 1 Housing Fees",
    price: 1000.00,
    quantity: 1,
    deadline: "2024-02-10",
  },
  {
    title: "Season Parking Fees",
    description: "Student Open (KRC)",
    price: 35.00,
    quantity: 1,
    deadline: "2024-02-15",
  }
];

export const sortedPaymentItems: PaymentItem[] = [
  {
    title: "Education Records System Tuition Fees",
    description: "AY23/24 Semester 1 Tuition Fees",
    price: 6287.2,
    quantity: 1,
    deadline: "2024-01-30",
  },
  {
    title: "Student Housing Fees",
    description: "AY23/24 Semester 1 Housing Fees",
    price: 1000.00,
    quantity: 1,
    deadline: "2024-02-10",
  },
  {
    title: "Season Parking Fees",
    description: "Student Open (KRC)",
    price: 35.00,
    quantity: 1,
    deadline: "2024-02-15",
  },
  {
    title: "Library Fees",
    description: "NUS Mug",
    price: 0.0,
    quantity: 1,
    deadline: "2024-02-01",
  }
];
