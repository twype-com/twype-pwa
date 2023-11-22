'use client'
import { FC, PropsWithChildren } from 'react'
import { Button } from '@radix-ui/themes'
import styles from './ProtectContent.module.scss'

type ProtectContentProps = {}

export const ProtectContent: FC<PropsWithChildren<ProtectContentProps>> = ({ children }) => {
  const address = '1234567890' // TODO: Ger real token

  return (
    <>
      {!address ? (
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>Please, connect wallet</h2>
            <div className={styles.wallet}>
              <Button variant="outline">Connect wallet</Button>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  )
}
