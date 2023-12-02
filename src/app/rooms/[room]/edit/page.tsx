import { RoomEditLoader } from '@/features/rooms/RoomEditLoader/RoomEditLoader'

export async function generateStaticParams() {
  return [{ room: 'test' }]
}

export default function CreateRoomPage({ params }: { params: { room: string } }) {
  return <RoomEditLoader />
}
