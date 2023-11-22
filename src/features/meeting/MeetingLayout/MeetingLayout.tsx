'use client'
import { FC, useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MeetingBar } from '@/features/meeting/MeetingBar/MeetingBar'
import { MeetingChat } from '@/features/meeting/MeetingChat/MeetingChat'
import { MeetingParticipants } from '@/features/meeting/MeetingParticipants/MeetingParticipants'
import { MeetingActions } from '@/features/meeting/MeetingActions/MeetingActions'
import { MeetingLiveKit } from '@/features/meeting/MeetingLiveKit/MeetingLiveKit'
import { MessageItem } from '@/features/chat/types'
import { Person } from '@/components/User/User'
import styles from './MeetingLayout.module.scss'

type MeetingLayoutProps = {
  participants: Person[]
  messages: MessageItem[]
  followers?: number
  likes?: number
}

export const MeetingLayout: FC<MeetingLayoutProps> = ({
  participants,
  messages,
  followers,
  likes,
}) => {
  const router = useRouter()
  const [isBarVisible, setIsBarVisible] = useState(true)
  const [isMicOn, setIsMicOn] = useState(true)
  const [isCamOn, setIsCamOn] = useState(true)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleMic = useCallback((micState: boolean) => {
    setIsMicOn(!micState)
  }, [])

  const handleCam = useCallback((camState: boolean) => {
    setIsCamOn(!camState)
  }, [])

  const handleClose = useCallback(() => {
    router.push('.')
  }, [router])

  const handleSubscribe = useCallback(() => {
    setIsSubscribed(!isSubscribed)
  }, [isSubscribed])

  const token = new URLSearchParams(window.location.search).get('liveKitToken') as string

  return (
    <div className={styles.meeting}>
      <MeetingLiveKit token={token}>
        <MeetingBar
          isVisible={isBarVisible}
          isMicOn={isMicOn}
          isCamOn={isCamOn}
          isSubscribed={isSubscribed}
          followers={followers}
          toggleMic={handleMic}
          toggleCam={handleCam}
          onSubscribe={handleSubscribe}
          onClose={handleClose}
        />

        {participants.length > 1 && <MeetingParticipants participants={participants} />}
      </MeetingLiveKit>

      <div className={styles.content}>
        <MeetingChat
          messages={messages}
          isOpen={isChatOpen}
          hasParticipants={participants.length > 1}
          onClose={() => setIsChatOpen(false)}
        />
        <MeetingActions
          commentsCounter={messages.length}
          likes={likes}
          isChatOpen={isChatOpen}
          onToggleChat={() => setIsChatOpen(!isChatOpen)}
        />
      </div>
    </div>
  )
}
