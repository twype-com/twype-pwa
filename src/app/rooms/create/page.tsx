"use client";

import { useState } from "react";
import { NewRoom } from "@/features/rooms/types";
import { CreateRoomForm } from "@/features/rooms/CreateRoomForm/CreateRoomForm";
import { CreateRoomSender } from "@/features/rooms/CreateRoomSender/CreateRoomSender";

export default function Home() {
  const [newRoom, setNewRoom] = useState<NewRoom | null>(null);

  return (
    <div>
      <h1>Create new room</h1>

      {!newRoom ? (
        <CreateRoomForm onCreate={(room) => setNewRoom(room)} />
      ) : (
        <CreateRoomSender newRoom={newRoom} />
      )}
    </div>
  );
}
