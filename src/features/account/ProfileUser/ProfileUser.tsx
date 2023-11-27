import { FC } from 'react'
import cn from 'classnames'
import { Avatar } from '@radix-ui/themes'
import { ProfileUserMain } from '../ProfileUserMain/ProfileUserMain'
import { ProfileUserActions } from '../ProfileUserActions/ProfileUserActions'
import { UserProfile } from '../types'
import styles from './ProfileUser.module.scss'

type ProfileUserProps = {
  className?: string
  profile: UserProfile
}

export const ProfileUser: FC<ProfileUserProps> = ({ className, profile }) => {
  return (
    <section className={cn(styles.profile, className)}>
      <Avatar size="8" src={profile.photoUrl} fallback="AT" radius="full" />
      <ProfileUserMain profile={profile} />
      <ProfileUserActions />
    </section>
  )
}
