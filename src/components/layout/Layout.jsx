import Sidebar from './Sidebar.jsx'
import Navbar from './Navbar.jsx'
import MobileNav from './MobileNav.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen text-slate-100">
      <MobileNav />
      <div className="mx-auto flex w-full max-w-[1440px]">
        <Sidebar />
        <div className="flex-1 px-6 pb-8 pt-24 lg:px-10 lg:pt-8">
          <div className="flex flex-col gap-8">
            <Navbar />
            <main className="flex flex-col gap-8">{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}
