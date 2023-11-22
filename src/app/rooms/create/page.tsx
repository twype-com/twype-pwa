import { Metadata } from 'next'
import { RoomCreateLoader } from '@/features/rooms/RoomCreateLoader/RoomCreateLoader'

export const metadata: Metadata = {
  title: 'Create room in Twype',
  description: '...Description',
}

export default function CreateRoomPage() {
  return <RoomCreateLoader />
}
