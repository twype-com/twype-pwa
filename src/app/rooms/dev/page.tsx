import { Metadata } from 'next'
import { RoomDevLoader } from '@/features/rooms/RoomDevLoader/RoomDevLoader'

export const metadata: Metadata = {
  title: 'Create room in Twype',
  description: '...Description',
}

export default function CreateRoomPage() {
  return <RoomDevLoader />
}
