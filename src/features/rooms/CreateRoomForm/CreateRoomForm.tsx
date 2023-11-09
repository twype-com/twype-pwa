"use client";
import { FC, useCallback, useMemo, useState } from "react";
import cn from "classnames";
import { customAlphabet } from "nanoid";
import { nolookalikes } from "nanoid-dictionary";
import { useEffectOnce } from "react-use";
import * as Form from "@radix-ui/react-form";
import { Button } from "@radix-ui/themes";
import { Spinner } from "@/components/Spinner/Spinner";
import { NewRoom } from "../types";
import formStyles from "@/styles/form.module.scss";

type CreateRoomFormProps = {
  className?: string;
  onCreate: (room: NewRoom) => void;
};

export const CreateRoomForm: FC<CreateRoomFormProps> = ({
  className,
  onCreate,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [roomName, setRoomName] = useState<string>("");
  const [roomCode, setRoomCode] = useState<string>("");
  const [roomTimeout, setRoomTimeout] = useState<string>("");
  const [maxParticipants, setMaxParticipants] = useState<string>("");

  const generateRoomSlug = useCallback(() => {
    setIsLoading(true);
    const code = customAlphabet(nolookalikes.toLocaleLowerCase(), 4);
    // TODO: check if room with this code exists
    setTimeout(() => {
      setRoomCode(code());
      setIsLoading(false);
    }, 300);
  }, []);

  useEffectOnce(() => {
    generateRoomSlug();
  });

  const canSubmit = useMemo(() => {
    return !!roomName && !!roomCode;
  }, [roomCode, roomName]);

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
        <div className={formStyles.row}>
          <Form.Field name="roomName" className={formStyles.field}>
            <div>
              <Form.Label>Room name *</Form.Label>
              <Form.Message match="valueMissing">
                Please enter Room name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                type="text"
                value={roomName}
                required
                className={formStyles.input}
                onChange={(event) => setRoomName(event.target.value)}
              />
            </Form.Control>
          </Form.Field>
        </div>

        <div className={formStyles.row}>
          <Form.Field name="roomCode" className={formStyles.field}>
            <div>
              <Form.Label>Room code *</Form.Label>
              <Form.Message match="valueMissing">
                Please enter Room code
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                type="text"
                value={roomCode}
                className={formStyles.input}
                required
                onChange={(event) => setRoomCode(event.target.value)}
              />
            </Form.Control>
          </Form.Field>
          <div className={formStyles.field} />
        </div>

        <div className={formStyles.row}>
          <Form.Field name="roomTimeout" className={formStyles.field}>
            <div>
              <Form.Label>Room timeout (seconds)</Form.Label>
            </div>
            <Form.Control asChild>
              <input
                type="number"
                value={roomTimeout}
                className={formStyles.input}
                onChange={(event) => setRoomTimeout(event.target.value)}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field name="maxParticipants" className={formStyles.field}>
            <div>
              <Form.Label>Max participants</Form.Label>
            </div>
            <Form.Control asChild>
              <input
                type="number"
                value={maxParticipants}
                className={formStyles.input}
                onChange={(event) => setMaxParticipants(event.target.value)}
              />
            </Form.Control>
          </Form.Field>
        </div>

        <div className={formStyles.row}>
          <Form.Submit asChild>
            <Button
              disabled={isLoading || !canSubmit}
              onClick={(event) => handleSubmit(event)}
            >
              Create
            </Button>
          </Form.Submit>
          <div className={formStyles.field}>
            {isLoading && <Spinner size="small" />}
          </div>
        </div>
      </Form.Root>
    </div>
  );
};
