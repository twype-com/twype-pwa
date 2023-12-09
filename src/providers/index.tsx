'use client'

import { FC, PropsWithChildren } from 'react'
import { QueryClientProvider } from './QueryClientProvider'
import { NfidProvider } from './NfidProvider'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider>
      <NfidProvider>{children}</NfidProvider>
    </QueryClientProvider>
  )
}
