import { Article } from '@/components/Article/Article'
import { MeetingLayout } from '@/features/meeting/MeetingLayout/MeetingLayout'

export default function RoomOnlinePage({ params }: { params: { room: string } }) {
  return (
    <Article title={`Room ${params.room}`} backUrl="/rooms">
      <MeetingLayout />
    </Article>
  )
}
