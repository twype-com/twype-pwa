"use client";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import cn from "classnames";
import { NewRoom } from "../types";

type CreateRoomFormProps = {
  className?: string;
  newRoom: NewRoom;
};

export const CreateRoomSender: FC<CreateRoomFormProps> = ({
  className,
  newRoom,
}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["activeRoomsList"],
    queryFn: () =>
      fetch(
        `/livekit/api/create-room?name=${newRoom.name}&empty-timeout=${newRoom.emptyTimeout}&max-participants=${newRoom.maxParticipants}`
      ).then((res) => res.json()),
  });

  return (
    <div className={cn(className)}>
      {isLoading ? (
        <div>Creating...</div>
      ) : (
        <div>{error ? <p>Something went wrong :(</p> : <p>{data.name}</p>}</div>
      )}
    </div>
  );
};
