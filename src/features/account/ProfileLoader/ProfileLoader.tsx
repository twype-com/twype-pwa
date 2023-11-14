"use client";
import { FC } from "react";
import { Article } from "@/components/Article/Article";
import { Loader } from "@/components/Loader/Loader";

type ProfileLoaderProps = {};

export const ProfileLoader: FC<ProfileLoaderProps> = () => {
  return (
    <Article title="Profile" backUrl="/">
      <Loader title="Getting profile..." />
    </Article>
  );
};
