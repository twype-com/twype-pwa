import type { Metadata } from 'next'
import { Feed } from '@/features/explore/Feed/Feed'
import { PostPreview } from '@/features/explore/PostPreview/PostPreview'

export const metadata: Metadata = {
  title: 'Twype - Speak Freely',
  description: '...Description',
}

export default function Home() {
  const fakeContent = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <Feed>
      {fakeContent.map((item) => (
        <PostPreview key={item} title="Name of the stream" />
      ))}
    </Feed>
  )
}
