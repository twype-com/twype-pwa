import { RoomLoader } from '@/features/rooms/RoomLoader/RoomLoader'

export async function generateStaticParams() {
  // const posts = await fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) =>
  //   res.json(),
  // )

  // return posts.map((post: any) => ({
  //   slug: post.slug,
  // }))

  return [{ room: 'test' }]
}

export default function RoomPage({ params }: { params: { room: string } }) {
  return <RoomLoader />
}
