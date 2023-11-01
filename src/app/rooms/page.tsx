"use client";

import Link from "next/link";
import { Room } from "livekit-server-sdk";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@radix-ui/themes";
import { Article } from "@/components/Article/Article";

export default function RoomsListPage() {
  const {
    isLoading: isListLoading,
    error: roomsError,
    data: rooms,
  } = useQuery({
    queryKey: ["activeRoomsList"],
    queryFn: () =>
      fetch("/livekit/api/get-rooms-list").then((res) => res.json()),
  });

  return (
    <Article
      title="Rooms page"
      buttonUrl="/rooms/create"
      buttonText="Create new room"
    >
      {isListLoading && <div>Loading...</div>}
      {roomsError ? (
        <div>Something went wrong :(</div>
      ) : rooms?.length > 0 ? (
        <ul>
          {rooms.map((room: Room) => (
            <li key={room.sid}>
              <Link href={`/rooms/${room.sid}`}>{room.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        !isListLoading && <p>No rooms found</p>
      )}
    </Article>
  );
}
