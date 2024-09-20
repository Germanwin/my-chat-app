import type { Metadata, Viewport } from 'next'
import './globals.scss'
import Layout from './components/layout/Layout'

export const metadata: Metadata = {
	title: 'chat app',
	description: 'created by herman',
}
export const viewport: Viewport = {
	themeColor: 'black',
	colorScheme: 'dark',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
