"use client";
import { FC, useState } from "react";
import { NewRoom } from "@/features/rooms/types";
import { CreateRoomSender } from "@/features/rooms/CreateRoomSender/CreateRoomSender";
import { Article } from "@/components/Article/Article";
import { SettingsForm } from "../SettingsForm/SettingsForm";

type SettingsLoaderProps = {};

export const SettingsLoader: FC<SettingsLoaderProps> = () => {

  return (
    <Article title="Settings" backUrl="/">
        <SettingsForm />
    </Article>
  );
};
