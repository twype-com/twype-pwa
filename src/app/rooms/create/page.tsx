"use client";

import { useState } from "react";
import { NewRoom } from "@/features/rooms/types";
import { CreateRoomForm } from "@/features/rooms/CreateRoomForm/CreateRoomForm";
import { CreateRoomSender } from "@/features/rooms/CreateRoomSender/CreateRoomSender";
import { Article } from "@/components/Article/Article";

export default function CreateRoomPage() {
  const [newRoom, setNewRoom] = useState<NewRoom | null>(null);

  return (
    <Article title="Create new room" backUrl="/rooms">
      {!newRoom ? (
        <CreateRoomForm onCreate={(room) => setNewRoom(room)} />
      ) : (
        <CreateRoomSender newRoom={newRoom} />
      )}
    </Article>
  );
}
