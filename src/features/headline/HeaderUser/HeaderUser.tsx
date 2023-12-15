'use client'
import { FC } from 'react'
import Link from 'next/link'
import { Button } from '@radix-ui/themes'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import useUserStore from '@/features/user/store'
import { TMP_WALLET_ADDRESS } from '@/features/user/constants'
import { Avatar } from '@/components/Avatar/Avatar'
import { UserMenuItem } from '../types'
import styles from './HeaderUser.module.scss'
import { useInternetIdentity } from '@/hooks/useInternetIdentity'

type HeaderUserProps = {
  className?: string
}

export const HeaderUser: FC<HeaderUserProps> = ({ className }) => {
  const address = useUserStore((state) => state.walletAddress)
  // const login = useUserStore((state) => state.updateWalletAddress)
  // const logout = useUserStore((state) => state.logout)
  const { login, principal } = useInternetIdentity()

  const menu: UserMenuItem[] = [
    {
      text: 'View profile',
      href: `/users/${principal?.toString()}`,
      slug: 'my-profile',
    },
    // {
    //   text: 'Favorites',
    //   slug: 'favorites',
    // },
    // {
    //   text: 'Settings',
    //   slug: 'settings',
    // },
  ]

  if (!principal?.toString()) {
    return (
      <Button onClick={() => login && login()} variant="outline">
        Connect wallet
      </Button>
    )
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className={styles.avatar}>
          <Avatar address={principal.toString()} />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.DropdownMenuContent} sideOffset={5}>
          {menu.map((item) => (
            <DropdownMenu.Item className={styles.DropdownMenuItem} key={item.slug}>
              {item.href ? (
                <Link href={item.href} className={styles.link}>
                  {item.text}
                  {item.rightSlot && <span className={styles.RightSlot}>{item.rightSlot}</span>}
                </Link>
              ) : (
                <button className={styles.button}>
                  {item.text}
                  {item.rightSlot && <span className={styles.RightSlot}>{item.rightSlot}</span>}
                </button>
              )}
            </DropdownMenu.Item>
          ))}

          <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />

          <DropdownMenu.Item className={styles.DropdownMenuItem}>
            <button className={styles.button} onClick={() => logout()}>
              Log out <div className={styles.RightSlot}>⌘+E</div>
            </button>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className={styles.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
