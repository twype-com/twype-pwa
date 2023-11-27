'use client'
import { FC } from 'react'
import { Avatar, Button } from '@radix-ui/themes'
import { Envelope } from '@phosphor-icons/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import useUserStore from '@/features/user/store'
import { TMP_WALLET_ADDRESS } from '@/features/user/constants'
import { UserMenuItem } from '../types'
import styles from './HeaderUser.module.scss'

type HeaderUserProps = {
  className?: string
}

export const HeaderUser: FC<HeaderUserProps> = ({ className }) => {
  const address = useUserStore((state) => state.walletAddress)
  const login = useUserStore((state) => state.updateWalletAddress)

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

  if (!address) {
    return (
      <Button onClick={() => login(TMP_WALLET_ADDRESS)} variant="outline">
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
