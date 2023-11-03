"use client";
import { useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { MeetingLayout } from "@/features/meeting/MeetingLayout/MeetingLayout";

export default function RoomCallPage() {
  const { room: roomName } = useParams();
  const router = useRouter();

  const handleClose = useCallback(() => {
    router.push(".");
  }, [router]);

  return <MeetingLayout onClose={handleClose} />;
}
