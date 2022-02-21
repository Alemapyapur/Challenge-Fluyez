import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"


function Layout() {

  return (
    <div>
      <Header />
      <div className="flex bg-slate-800">
        <Sidebar />
        <div className="bg-slate-900 w-5/6">
          <Outlet />
        </div>
      </div>
    </div >
  )
}

export default Layout