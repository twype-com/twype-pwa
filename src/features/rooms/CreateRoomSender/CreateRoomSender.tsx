'use client'
import { FC } from 'react'
import cn from 'classnames'
import axios, { AxiosResponse } from 'axios'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { NewRoom } from '@/features/rooms/types'

type CreateRoomFormProps = {
  className?: string
  newRoom: NewRoom
}

export const CreateRoomSender: FC<CreateRoomFormProps> = ({ className, newRoom }) => {
  const token = '1234567890' // TODO: Ger real token

  const { isLoading, error, data } = useQuery({
    queryKey: ['createRoomQuery'],
    queryFn: async () => {
      return await axios
        .post<
          never,
          AxiosResponse<{
            room: {
              id: number
              sid: string
              name: string
              chatId: string
            }
            participant: {
              id: number
              roomId: number
              token: string
              userId: string
            }
          }>
        >(
          `https://twype-back-dgn2x.ondigitalocean.app/public/room`,
          {
            name: newRoom.name,
          },
          {
            headers: {
              Authorization: token as string,
            },
          },
        )
        .then((response) => response.data)
    },
  })

  return (
    <div className={cn(className)}>
      {isLoading ? (
        <div>Creating...</div>
      ) : (
        <div>
          {error ? (
            <p>Something went wrong :(</p>
          ) : (
            <p>
              Room{' '}
              <Link
                href={`/rooms/${data?.room.id}/?liveKitToken=${data?.participant.token}&sid=${data?.room.sid}&chatId=${data?.room.chatId}`}
              >
                <b>{data?.room.name}</b>
              </Link>{' '}
              is created!
            </p>
          )}
        </div>
      )}
    </div>
  )
}
