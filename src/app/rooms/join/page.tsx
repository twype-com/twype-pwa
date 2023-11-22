'use client'
import { FC, useEffect } from 'react'

type CreateRoomFormProps = {}

export const JoinRoomPage: FC<CreateRoomFormProps> = () => {
  useEffect(() => {
    new Promise((resolve) => setTimeout(resolve, 20000)).then(() => {})
  }, [])

  return (
    <div>
      <div>Creating...</div>
    </div>
  )
}

export default JoinRoomPage
