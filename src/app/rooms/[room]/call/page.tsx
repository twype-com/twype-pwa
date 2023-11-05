"use client";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useEffectOnce } from "react-use";
import { MeetingLayout } from "@/features/meeting/MeetingLayout/MeetingLayout";
import { MessageItem } from "@/features/chat/types";
import chat from "@/mocks/chat.json";

const chatList = chat as MessageItem[];

export default function RoomCallPage() {
  const { room: roomName } = useParams();
  const router = useRouter();

  const [messagesList, setMessagesList] = useState<MessageItem[]>([]);

  const [increment, dispatch] = useReducer((num: number) => num + 1, 0);

  const timer = () => {
    if (increment > 120) return;
    dispatch();
    setTimeout(() => {
      timer();
    }, Math.floor(Math.random() * 10) * 1000);
  };

  useEffectOnce(() => {
    timer();
  });

  useEffect(() => {
    if (increment < 1) return;
    const nextMessage = chatList[messagesList.length];
    if (!nextMessage || messagesList.some((msg) => msg.id === nextMessage.id)) {
      return;
    }
    setMessagesList((prev) => [...prev, nextMessage]);
  }, [increment]);

  const handleClose = useCallback(() => {
    router.push(".");
  }, [router]);

  return (
    <MeetingLayout
      messages={messagesList}
      followers={385}
      likes={42}
      onClose={handleClose}
    />
  );
}
