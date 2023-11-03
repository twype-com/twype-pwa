"use client";
import { FC, useCallback, useState } from "react";
import { MeetingVideoGrid } from "@/features/meeting/MeetingVideoGrid/MeetingVideoGrid";
import { MeetingBar } from "@/features/meeting/MeetingBar/MeetingBar";
import styles from "./MeetingLayout.module.scss";

type MeetingLayoutProps = {
  onClose: () => void;
};

export const MeetingLayout: FC<MeetingLayoutProps> = ({ onClose }) => {
  const [isBarVisible, setIsBarVisible] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);

  const handleMic = useCallback((micState: boolean) => {
    setIsMicOn(!micState);
  }, []);

  const handleCam = useCallback((camState: boolean) => {
    setIsCameraOn(!camState);
  }, []);

  return (
    <div className={styles.meeting}>
      <MeetingVideoGrid onClick={() => setIsBarVisible(!isBarVisible)} />
      <MeetingBar
        isVisible={isBarVisible}
        isMicOn={isMicOn}
        isCameraOn={isCameraOn}
        toggleMic={handleMic}
        toggleCamera={handleCam}
        onClose={onClose}
      />
    </div>
  );
};
