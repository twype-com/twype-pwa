import { Metadata } from 'next'
import { ProfileLoader } from '@/features/account/ProfileLoader/ProfileLoader'

export const metadata: Metadata = {
  title: 'Twype user',
  description: '...Description',
}

export default function DevPage() {
  return <ProfileLoader />
}
