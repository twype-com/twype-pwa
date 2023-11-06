"use client";
import { FC, useCallback, useState } from "react";
import { MeetingVideoGrid } from "@/features/meeting/MeetingVideoGrid/MeetingVideoGrid";
import { MeetingBar } from "@/features/meeting/MeetingBar/MeetingBar";
import { MeetingChat } from "@/features/meeting/MeetingChat/MeetingChat";
import { MeetingActions } from "../MeetingActions/MeetingActions";
import { MessageItem } from "@/features/chat/types";
import styles from "./MeetingLayout.module.scss";

type MeetingLayoutProps = {
  messages: MessageItem[];
  followers?: number;
  likes?: number;
  onClose: () => void;
};

export const MeetingLayout: FC<MeetingLayoutProps> = ({
  messages,
  followers,
  likes,
  onClose,
}) => {
  const [isBarVisible, setIsBarVisible] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleMic = useCallback((micState: boolean) => {
    setIsMicOn(!micState);
  }, []);

  const handleCam = useCallback((camState: boolean) => {
    setIsCameraOn(!camState);
  }, []);

  const handleSubscribe = useCallback(() => {
    setIsSubscribed(!isSubscribed);
  }, [isSubscribed]);

  return (
    <div className={styles.meeting}>
      <MeetingVideoGrid onClick={() => setIsBarVisible(!isBarVisible)} />
      <MeetingBar
        isVisible={isBarVisible}
        isMicOn={isMicOn}
        isCameraOn={isCameraOn}
        isSubscribed={isSubscribed}
        followers={followers}
        toggleMic={handleMic}
        toggleCamera={handleCam}
        onSubscribe={handleSubscribe}
        onClose={onClose}
      />
      <div className={styles.content}>
        <MeetingChat
          messages={messages}
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
        />
        <MeetingActions
          commentsCounter={messages.length}
          likes={likes}
          isChatOpen={isChatOpen}
          onToggleChat={() => setIsChatOpen(!isChatOpen)}
        />
      </div>
    </div>
  );
};
