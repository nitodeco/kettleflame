import { FC, ReactNode } from 'react'
import './style.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  )
}

export default Layout
