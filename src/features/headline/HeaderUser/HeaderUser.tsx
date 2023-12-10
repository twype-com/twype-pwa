'use client'
import { FC } from 'react'
import { Button } from '@radix-ui/themes'
import { Envelope } from '@phosphor-icons/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import useUserStore from '@/features/user/store'
import { TMP_WALLET_ADDRESS } from '@/features/user/constants'
import { Avatar } from '@/components/Avatar/Avatar'
import { UserMenuItem } from '../types'
import styles from './HeaderUser.module.scss'

type HeaderUserProps = {
  className?: string
}

export const HeaderUser: FC<HeaderUserProps> = ({ className }) => {
  const address = useUserStore((state) => state.walletAddress)
  const login = useUserStore((state) => state.updateWalletAddress)
  const logout = useUserStore((state) => state.logout)

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
        <div className={styles.avatar}>
          <Avatar address={address} />
        </div>
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

          <DropdownMenu.Item className={styles.DropdownMenuItem} onClick={() => logout()}>
            Log out <div className={styles.RightSlot}>⌘+E</div>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className={styles.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
