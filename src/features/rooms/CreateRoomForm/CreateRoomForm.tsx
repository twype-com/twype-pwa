"use client";
import { FC, useState } from "react";
import cn from "classnames";
import * as Form from "@radix-ui/react-form";
import { Button } from "@radix-ui/themes";
import { NewRoom } from "../types";

type CreateRoomFormProps = {
  className?: string;
  onCreate: (room: NewRoom) => void;
};

export const CreateRoomForm: FC<CreateRoomFormProps> = ({
  className,
  onCreate,
}) => {
  const [roomName, setRoomName] = useState<string>("");
  const [roomTimeout, setRoomTimeout] = useState<string>("");
  const [maxParticipants, setMaxParticipants] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onCreate({
      name: roomName,
      emptyTimeout: roomTimeout ? Number(roomTimeout) : undefined,
      maxParticipants: maxParticipants ? Number(maxParticipants) : undefined,
    });
  };

  return (
    <div className={cn(className)}>
      <Form.Root>
        <Form.Field name="Room name">
          <div>
            <Form.Label>Room name</Form.Label>
            <Form.Message match="valueMissing">
              Please enter Room name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="text"
              value={roomName}
              onChange={(event) => setRoomName(event.target.value)}
              required
            />
          </Form.Control>
        </Form.Field>

        <br />

        <Form.Field name="Room timeout (seconds)">
          <div>
            <Form.Label>Room timeout (seconds)</Form.Label>
          </div>
          <Form.Control asChild>
            <input
              type="number"
              value={roomTimeout}
              onChange={(event) => setRoomTimeout(event.target.value)}
            />
          </Form.Control>
        </Form.Field>

        <br />

        <Form.Field name="Max participants">
          <div>
            <Form.Label>Max participants</Form.Label>
          </div>
          <Form.Control asChild>
            <input
              type="number"
              value={maxParticipants}
              onChange={(event) => setMaxParticipants(event.target.value)}
            />
          </Form.Control>
        </Form.Field>

        <br />

        <Form.Submit asChild>
          <Button onClick={(event) => handleSubmit(event)}>Create</Button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};
