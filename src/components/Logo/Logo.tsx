import { FC } from 'react'
import { Righteous } from 'next/font/google'
import cn from 'classnames'
import Link from 'next/link'
import styles from './Logo.module.scss'

const righteous = Righteous({ weight: '400', subsets: ['latin'] })

type LogoProps = {
  className?: string
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={cn(styles.brand, righteous.className, className)}>
      <div className={styles.logo}>Twype</div>
    </Link>
  )
}
