"use client";
import { FC, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Room } from "livekit-client";
import { Article } from "@/components/Article/Article";
import { environments } from "@/app/livekit/api/constants";
import { RoomConnector } from "@/features/rooms/RoomConnector/RoomConnector";

type RoomLoaderProps = {};

export const RoomLoader: FC<RoomLoaderProps> = () => {
  const { room: roomName } = useParams();
  const userName = "twype-user";
  const [token, setToken] = useState("");

  const [roomOnline, setRoomOnline] = useState<Room | null>(null);

  const { wsUrl } = environments;

  const connectToRoom = useCallback(
    async (tkn: string) => {
      const room = new Room();
      const result = await room.connect(wsUrl, tkn || token);
      setRoomOnline(room);
    },
    [token, wsUrl]
  );

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(
          `/livekit/api/get-participant-token?room=${roomName}&username=${userName}`
        );
        const data = await resp.json();
        setToken(data.token);
        connectToRoom(data.token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [connectToRoom, roomName]);

  if (token === "") {
    return <div>Getting token...</div>;
  }

  return (
    <Article title={`Room ${roomName}`} backUrl="/rooms">
      <div>Room online: {roomOnline?.name}</div>
      <Link href={`./${roomOnline?.name}/call`}>Call</Link>
      {roomOnline && <RoomConnector room={roomOnline} />}
    </Article>
  );
};
