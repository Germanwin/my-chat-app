'use client'

import { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import styles from './Layout.module.scss'

export default function LayoutClient({children}: PropsWithChildren<unknown>) {
  return (
    <main className={styles.Layout}>
      <Sidebar />
      <section>{children}</section>
    </main>
  )
}