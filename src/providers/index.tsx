'use client'

import { FC, PropsWithChildren } from 'react'
import { QueryClientProvider } from './QueryClientProvider'
import { InternetIdentityProvider } from './InternetIdentityProvider'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider>
      <InternetIdentityProvider>{children}</InternetIdentityProvider>
    </QueryClientProvider>
  )
}
