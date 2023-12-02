import { Article } from '@/components/Article/Article'
import { MeetingLayout } from '@/features/meeting/MeetingLayout/MeetingLayout'

export async function generateStaticParams() {
  return [{ room: 'test' }]
}

export default function RoomCallPage({ params }: { params: { room: string } }) {
  return (
    <Article title="Room" backUrl="/rooms">
      <MeetingLayout />
    </Article>
  )
}
