import { Metadata } from "next";
import { RoomsListLoader } from "@/features/rooms/RoomsListLoader/RoomsListLoader";

export const metadata: Metadata = {
  title: "Twype rooms list",
  description: "...Description",
};

export default function RoomsListPage() {
  return <RoomsListLoader />;
}
