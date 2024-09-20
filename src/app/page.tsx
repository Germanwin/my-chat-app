import Chat from "./components/screens/chats/Chat"
import ChatsList from "./components/screens/chats/ChatsList"
import CurrentUser from "./components/screens/chats/CurrentUser"
import styles from './chatPage.module.scss'

export default function Home() {
	return (
		<div className={styles.chatPage}>
			<div className={styles.chatList}>
				<CurrentUser />
				<ChatsList />
			</div>
      <div>
        <Chat />
      </div>
		</div>
	)
}
