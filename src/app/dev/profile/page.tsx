import { Metadata } from "next";
import { ProfileLoader } from "@/features/account/ProfileLoader/ProfileLoader";

export const metadata: Metadata = {
  title: "Twype room",
  description: "...Description",
};

export default function DevPage() {
  return <ProfileLoader />;
}
