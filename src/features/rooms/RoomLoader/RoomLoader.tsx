'use client'
import { FC, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Room } from 'livekit-client'
import { Article } from '@/components/Article/Article'
import { RoomConnector } from '@/features/rooms/RoomConnector/RoomConnector'
import { Loader } from '@/components/Loader/Loader'

type RoomLoaderProps = {}

export const RoomLoader: FC<RoomLoaderProps> = () => {
  const { room: roomName } = useParams()
  const userName = 'twype-user'
  const [token, setToken] = useState('')

  const [roomOnline, setRoomOnline] = useState<Room | null>(null)

  return (
    <Article title={`Room ${roomName}`} backUrl="/rooms">
      {token === '' ? (
        <Loader title="Getting token..." />
      ) : (
        <>
          <div>Room online: {roomOnline?.name}</div>
          <Link href={`./${roomOnline?.name}/call`}>Call</Link>{' '}
          <Link href={`./${roomOnline?.name}/edit`}>Edit</Link>
          {roomOnline && <RoomConnector room={roomOnline} />}
        </>
      )}
    </Article>
  )
}
