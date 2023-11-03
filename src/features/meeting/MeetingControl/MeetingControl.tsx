"use client";
import { FC } from "react";
import cn from "classnames";
import {
  CameraRotate,
  Microphone,
  MicrophoneSlash,
  Phone,
  VideoCamera,
  VideoCameraSlash,
} from "@phosphor-icons/react";
import styles from "./MeetingControl.module.scss";

type MeetingIcon =
  | "phone"
  | "videoCamera"
  | "microphone"
  | "microphoneSlash"
  | "cameraRotate"
  | "videoCameraSlash";

type MeetingControlProps = {
  icon: MeetingIcon;
  color?: "white" | "red";
  isActive?: boolean;
  text: string;
  onClick: () => void;
};

export const MeetingControl: FC<MeetingControlProps> = ({
  icon,
  color = "white",
  isActive,
  text,
  onClick,
}) => {
  const icons = {
    cameraRotate: <CameraRotate weight="fill" />,
    microphone: <Microphone weight="fill" />,
    microphoneSlash: <MicrophoneSlash weight="fill" />,
    phone: <Phone weight="fill" />,
    videoCamera: <VideoCamera weight="fill" />,
    videoCameraSlash: <VideoCameraSlash weight="fill" />,
  };

  return (
    <button
      title={text}
      className={cn(styles.control, styles[color], {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      {icons[icon]}
    </button>
  );
};
