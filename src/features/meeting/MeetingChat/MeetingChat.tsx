"use client";
import { FC, useCallback, useEffect, useState } from "react";
import cn from "classnames";
import { MessageItem } from "@/features/chat/types";
import styles from "./MeetingChat.module.scss";
import { Avatar } from "@radix-ui/themes";

type MeetingChatProps = {
  messages: MessageItem[];
};

export const MeetingChat: FC<MeetingChatProps> = ({ messages }) => {
  const [chatMessages, setChatMessages] = useState<MessageItem[]>([]);
  const [newMessagesIds, setNewMessagesIds] = useState<number[]>([]);

  const updateMessages = useCallback(() => {
    const oldIds = chatMessages.map((message) => message.id);
    messages.forEach((message) => {
      if (!oldIds.includes(message.id)) {
        setChatMessages((prev) => [...prev, message]);
        setNewMessagesIds((prev) => [...prev, message.id]);
      }
    });
    setTimeout(() => {
      setNewMessagesIds([]);
    }, 300);
  }, [chatMessages, messages]);

  useEffect(() => {
    updateMessages();
  }, [messages, updateMessages]);

  return (
    <div className={styles.chat}>
      <ul className={styles.list}>
        {chatMessages.map((message, index) => (
          <li
            key={index}
            className={cn(styles.item, {
              [styles.new]: newMessagesIds.includes(message.id),
            })}
          >
            <div className={styles.message}>
              <Avatar
                size="1"
                src={message.photoUrl}
                fallback="AT"
                radius="full"
                className={styles.avatar}
              />
              <div className={styles.content}>
                <div className={styles.nickname}>{message.nickname}</div>
                <div className={styles.text}>{message.text}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
