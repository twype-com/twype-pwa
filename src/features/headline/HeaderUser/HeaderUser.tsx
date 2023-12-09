'use client'
import { FC, useCallback } from 'react'
import { Avatar, Button } from '@radix-ui/themes'
import { Envelope } from '@phosphor-icons/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import useUserStore from '@/features/user/store'
import { TMP_WALLET_ADDRESS } from '@/features/user/constants'
import { UserMenuItem } from '../types'
import styles from './HeaderUser.module.scss'
import { useNfid } from '@/hooks'

type HeaderUserProps = {
  className?: string
}

export const HeaderUser: FC<HeaderUserProps> = ({ className }) => {
  const address = useUserStore((state) => state.walletAddress)
  const login = useUserStore((state) => state.updateWalletAddress)
  const nfid = useNfid()

  const menu: UserMenuItem[] = [
    {
      text: 'View profile',
      slug: '#profile',
      icon: <Envelope />,
    },
    {
      text: 'Favorites',
      slug: '#favorites',
      icon: <Envelope />,
    },
    {
      text: 'Settings',
      slug: '#settings',
      icon: <Envelope />,
    },
  ]

  const handleLogin = useCallback(async () => {
    if (nfid) {
      const delegationIdentity = await nfid.getDelegation({
        // optional targets ICRC-28 implementation, but required to support universal NFID Wallet auth
        targets: ['irshc-3aaaa-aaaam-absla-cai'],
        // optional derivationOrigin in case you're running on a custom domain
        derivationOrigin: 'https://localhost:5500',
        // optional maxTimeToLive defaults to 8 hours in nanoseconds;
        maxTimeToLive: BigInt(8) * BigInt(3_600_000_000_000),
      })

      console.log(delegationIdentity)
    }
  }, [nfid])

  if (!address) {
    return (
      <Button onClick={handleLogin} variant="outline">
        Connect wallet
      </Button>
    )
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Avatar
          size="3"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="AT"
          radius="full"
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.DropdownMenuContent} sideOffset={5}>
          {menu.map((item) => (
            <DropdownMenu.Item className={styles.DropdownMenuItem} key={item.slug}>
              {item.text}
              {item.rightSlot && <div className={styles.RightSlot}>{item.rightSlot}</div>}
            </DropdownMenu.Item>
          ))}

          <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />

          <DropdownMenu.Item className={styles.DropdownMenuItem} onClick={() => login(null)}>
            Log out <div className={styles.RightSlot}>⌘+E</div>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className={styles.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
