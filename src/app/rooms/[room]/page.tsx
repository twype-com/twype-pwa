import { Metadata } from "next";
import { RoomLoader } from "@/features/rooms/RoomLoader/RoomLoader";

export const metadata: Metadata = {
  title: "Twype room",
  description: "...Description",
};

export default function RoomPage() {
  return <RoomLoader />;
}
