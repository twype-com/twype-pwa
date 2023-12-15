import { Metadata } from 'next'
import { SettingsLoader } from '@/features/settings/SettingsLoader/SettingsLoader'

export const metadata: Metadata = {
  title: 'Settings',
  description: '...Description',
}

export default function Settings() {
  return <SettingsLoader />
}
