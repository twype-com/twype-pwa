"use client";
import { FC, useState } from "react";
import { NewRoom } from "@/features/rooms/types";
import { RoomForm } from "@/features/rooms/RoomForm/RoomForm";
import { CreateRoomSender } from "@/features/rooms/CreateRoomSender/CreateRoomSender";
import { Article } from "@/components/Article/Article";

type RoomCreateLoaderProps = {};

export const RoomCreateLoader: FC<RoomCreateLoaderProps> = () => {
  const [newRoom, setNewRoom] = useState<NewRoom | null>(null);

  return (
    <Article title="Create new room" backUrl="/rooms">
      {!newRoom ? (
        <RoomForm onSubmit={(room) => setNewRoom(room)} />
      ) : (
        <CreateRoomSender newRoom={newRoom} />
      )}
    </Article>
  );
};
