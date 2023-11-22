'use client'
import { FC } from 'react'
import cn from 'classnames'

import { GridLayout, ParticipantTile, useParticipants, useTracks } from '@livekit/components-react'

import styles from './MeetingCompanion.module.scss'
import { Track } from 'livekit-client'

type MeetingCompanionProps = {}

export const MeetingCompanion: FC<MeetingCompanionProps> = () => {
  const CompanionVideoConference = () => {
    const tracks = useTracks(
      [
        { source: Track.Source.Camera, withPlaceholder: true },
        { source: Track.Source.ScreenShare, withPlaceholder: false },
      ],
      { onlySubscribed: false },
    )
    // if (!result) return null
    return (
      <GridLayout tracks={tracks}>
        <ParticipantTile />
      </GridLayout>
    )
  }

  return (
    <div className={cn(styles.companion)}>
      <CompanionVideoConference />
    </div>
  )
}
