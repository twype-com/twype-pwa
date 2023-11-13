import { Metadata } from "next";
import { RoomEditLoader } from "@/features/rooms/RoomEditLoader/RoomEditLoader";

export const metadata: Metadata = {
  title: "Create room in Twype",
  description: "...Description",
};

export default function CreateRoomPage() {
  return <RoomEditLoader />;
}
