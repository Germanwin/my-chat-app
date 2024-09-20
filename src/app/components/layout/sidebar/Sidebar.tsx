'useClient'

import { Sun } from 'lucide-react'
import Image from 'next/image'
import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { MENU } from './sidebar.data'
import cn from 'clsx'
import { getServerPathName } from '@/server-actions/get-path-name'
import { usePathname } from 'next/navigation'

export function Sidebar() {
	const pathname = usePathname()

	return (
		<div className={styles.sidebar}>
			<Image width={45} height={45} priority src='/logo.svg' alt='logo' />

			<div>
				{MENU.map(item => (
					<Link href={item.url} className={cn({
						[styles.active]: pathname === item.url
					})}>
						<item.icon size={27}></item.icon>
					</Link>
				))}
			</div>

			<Sun size={30} />
		</div>
	)
}
