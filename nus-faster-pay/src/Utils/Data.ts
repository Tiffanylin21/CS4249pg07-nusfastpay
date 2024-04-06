import { PaymentItem, Trial } from "./Types";

export const paymentItems: PaymentItem[] = [
  {
    title: "Education Records System Tuition Fees",
    description: "AY23/24 Semester 1 Tuition Fees",
    price: 4000.0,
    quantity: 1,
    deadline: "2024-01-30",
  },
  {
    title: "Library Fees",
    description: "Library Book Loan Fees",
    price: 2.0,
    quantity: 1,
    deadline: "2024-02-01",
  },
  {
    title: "Student Housing Fees",
    description: "AY23/24 Semester 1 Housing Fees",
    price: 3000.00,
    quantity: 1,
    deadline: "2024-02-10",
  },
  {
    title: "Season Parking Fees",
    description: "Student Open (KRC)",
    price: 350.00,
    quantity: 1,
    deadline: "2024-02-15",
  }
];

const trialATitles: string[] = ["Education Records System Tuition Fees"];
const trialBTitles: string[] = ["Student Housing Fees"];
const trialCTitles: string[] = ["Season Parking Fees"];
const trialDTitles: string[] = ["Education Records System Tuition Fees", "Student Housing Fees", "Season Parking Fees"];
const trialETitles: string[] = ["Library Fees", "Student Housing Fees", "Season Parking Fees"];
const trialFTitles: string[] = ["Education Records System Tuition Fees", "Library Fees", "Student Housing Fees"];

const trialADescription: string = 'Make payment for “Education Records System Tuition Fees” ($4000.00) via PayNow QR Code.';
const trialBDescription: string = 'Make payment for "Student Housing Fees" ($3000.00) via PayNow QR Code.';
const trialCDescription: string = 'Make payment for "Season Parking Fees" ($350.00) via PayNow QR Code.';
const trialDDescription: string = 'Make payment for “Education Records System Tuition Fees” ($4000.00), "Student Housing Fees" ($3000.00) and "Season Parking Fees" ($350.00) via PayNow QR Code.';
const trialEDescription: string = 'Make payment for “Library Fees” ($2.00), "Student Housing Fees" ($3000.00) and "Season Parking Fees" ($350.00) via PayNow QR Code.';
const trialFDescription: string = 'Make payment for “Education Records System Tuition Fees” ($4000.00), "Library Fees" ($2.00) and "Student Housing Fees" ($3000.00) via PayNow QR Code.';

export const getTrial = (code: string): Trial => {
  switch (code) {
  case "A":
    return { paymentTitles: trialATitles, description: trialADescription };
  case "B":
    return { paymentTitles: trialBTitles, description: trialBDescription };
  case "C":
    return { paymentTitles: trialCTitles, description: trialCDescription };
  case "D":
    return { paymentTitles: trialDTitles, description: trialDDescription };
  case "E":
    return { paymentTitles: trialETitles, description: trialEDescription };
  default:
    return { paymentTitles: trialFTitles, description: trialFDescription };
  };
}
