'use client'
import { FC, PropsWithChildren, createContext, useEffect, useState } from 'react'
import { NFID } from '@nfid/embed'

export const NfIdContext = createContext<null | NFID>(null)

export const NfidProvider: FC<PropsWithChildren> = ({ children }) => {
  const [nfid, setNfid] = useState<null | NFID>(null)

  useEffect(() => {
    NFID.init({
      application: {
        name: 'My Sweet App',
        logo: 'https://dev.nfid.one/static/media/id.300eb72f3335b50f5653a7d6ad5467b3.svg',
      },
    }).then((nfid) => setNfid(nfid))
  }, [])

  return <NfIdContext.Provider value={nfid}>{children}</NfIdContext.Provider>
}
