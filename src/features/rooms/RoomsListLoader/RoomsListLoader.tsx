'use client'
import { FC, useCallback } from 'react'
import Link from 'next/link'
import axios, { AxiosResponse } from 'axios'
import { Room } from 'livekit-server-sdk'
import { useQuery } from '@tanstack/react-query'
import useUserStore from '@/features/user/store'
import { Article } from '@/components/Article/Article'
import { Loader } from '@/components/Loader/Loader'
import { Feed } from '@/features/explore/Feed/Feed'
import { PostPreview } from '@/features/explore/PostPreview/PostPreview'
import { useRouter } from 'next/navigation'

type RoomsListLoaderProps = {}

export const RoomsListLoader: FC<RoomsListLoaderProps> = () => {
  const token = useUserStore((state) => state.livekitToken)
  const { push } = useRouter()
  // TODO: Use real vars
  const isListLoading = false
  const rooms: any = []
  const roomsError = false

  const { data } = useQuery({
    queryKey: ['roomsListQuery'],
    queryFn: async () => {
      return await axios
        .get(`https://twype-back-dgn2x.ondigitalocean.app/public/room`, {
          headers: {
            Authorization: token as string,
          },
        })
        .then((response) => response.data)
    },
  })

  const joinRoom = useCallback(
    (item: any) => {
      return async () => {
        const room = await axios
          .post<
            never,
            AxiosResponse<{
              room: {
                id: number
                sid: string
                name: string
              }
              participant: {
                id: number
                roomId: number
                token: string
                userId: string
              }
            }>
          >(
            `https://twype-back-dgn2x.ondigitalocean.app/public/room/join`,
            {
              roomId: item.id,
            },
            {
              headers: {
                Authorization: token as string,
              },
            },
          )
          .then((response) => response.data)

        push(
          `/rooms/${room.room.id}/call?liveKitToken=${room.participant.token}&sid=${room.room.sid}`,
        )
      }
    },
    [push, token],
  )

  return (
    <Article title="Rooms page" buttonUrl="/rooms/create" buttonText="Create new room" isProtected>
      {isListLoading && <Loader title="Loading..." />}
      {roomsError ? (
        <div>Something went wrong :(</div>
      ) : rooms?.length > 0 ? (
        <ul>
          {rooms.map((room: Room) => (
            <li key={room.sid}>
              <Link href={`/rooms/${room.name}`}>{room.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        !isListLoading && (
          <Feed>
            {data &&
              data.rooms.map((item: any) => (
                <PostPreview onClick={joinRoom(item)} key={item.id} title={item.name} isOnline />
              ))}
          </Feed>
        )
      )}
    </Article>
  )
}
