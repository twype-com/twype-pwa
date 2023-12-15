'use client'
import { FC } from 'react'
import { Article } from '@/components/Article/Article'
import { RoomInfo } from '@/features/rooms/RoomInfo/RoomInfo'

type RoomDevLoaderProps = {}

export const RoomDevLoader: FC<RoomDevLoaderProps> = () => {
  return (
    <Article title="Static development room" backUrl="/rooms" isProtected>
      <RoomInfo />
    </Article>
  )
}
