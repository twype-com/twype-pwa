'use client'
import { FC } from 'react'
import { Article } from '@/components/Article/Article'
import { SettingsForm } from '../SettingsForm/SettingsForm'

type SettingsLoaderProps = {}

export const SettingsLoader: FC<SettingsLoaderProps> = () => {
  return (
    <Article title="Settings" backUrl="/">
      <SettingsForm />
    </Article>
  )
}
