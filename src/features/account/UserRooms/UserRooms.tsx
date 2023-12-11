import { FC, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { Badge, Button, Dialog } from '@radix-ui/themes'
import { Link as LinksIcon } from '@phosphor-icons/react'
import { TradeRoom, UserProfile } from '@/features/account/types'
import rooms from '@/mocks/user-rooms.json'
import styles from './UserRooms.module.scss'
import Input from '@/components/Input/Input'

type UserRoomsProps = {
  className?: string
}

export const UserRooms: FC<UserRoomsProps> = ({ className }) => {
  const tradeRooms = rooms as TradeRoom[]

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeRoomBuy, setActiveRoomBuy] = useState<TradeRoom | null>(null)
  const [activeRoomSell, setActiveRoomSell] = useState<TradeRoom | null>(null)

  useEffect(() => {
    if (!isDialogOpen) {
      setTimeout(() => {
        setActiveRoomBuy(null)
        setActiveRoomSell(null)
      }, 300)
    }
  }, [isDialogOpen])

  const handleSell = useCallback((room: TradeRoom) => {
    setActiveRoomSell(room)
    setIsDialogOpen(true)
  }, [])

  const handleBuy = useCallback((room: TradeRoom) => {
    setActiveRoomBuy(room)
    setIsDialogOpen(true)
  }, [])

  return (
    <section className={cn(styles.rooms, className)}>
      <h2 className={styles.title}>Your rooms</h2>
      <ul className={styles.list}>
        <li className={cn(styles.item, styles.itemHeader)}>
          <span className={styles.name}>Room name</span>
          <span className={styles.participants}>Users</span>
          <span className={styles.price}>Price</span>
          <span className={styles.own}>Tickets</span>
          <span className={styles.sell} />
          <span className={styles.buy} />
        </li>
        {tradeRooms.map((room) => (
          <li className={styles.item} key={room.id}>
            <span className={styles.name}>{room.name}</span>
            <span className={styles.participants}>{room.participants}</span>
            <span className={styles.price}>{room.price}</span>
            <span className={styles.own}>{room.own}</span>
            <div className={styles.sell}>
              <Button
                color="pink"
                radius="full"
                size="2"
                disabled={!room.own}
                onClick={() => handleSell(room)}
              >
                Sell
              </Button>
            </div>
            <div className={styles.buy}>
              <Button color="teal" radius="full" size="2" onClick={() => handleBuy(room)}>
                Buy
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Content style={{ maxWidth: 320 }}>
          <Dialog.Title>Trade tickets</Dialog.Title>
          {activeRoomSell && (
            <Dialog.Description size="2" mb="4">
              Sell <Input value={'4'} className={styles.input} /> tickets for 30 ICP
            </Dialog.Description>
          )}
          {activeRoomBuy && (
            <Dialog.Description size="2" mb="4">
              Buy <Input value={'2'} className={styles.input} /> tickets fot 26 ICP
            </Dialog.Description>
          )}
          {/* CONTENT */}
          <footer className={styles.footer}>
            <Dialog.Close>
              <Button variant="soft" color="gray" radius="full">
                Cancel
              </Button>
            </Dialog.Close>
            {activeRoomSell && (
              <Dialog.Close>
                <Button color="pink" radius="full">
                  Sell
                </Button>
              </Dialog.Close>
            )}
            {activeRoomBuy && (
              <Dialog.Close>
                <Button color="teal" radius="full">
                  Buy
                </Button>
              </Dialog.Close>
            )}
          </footer>
        </Dialog.Content>
      </Dialog.Root>
    </section>
  )
}
