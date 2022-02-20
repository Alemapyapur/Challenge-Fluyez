import Content from "./Content"
import Header from "./Header"
import Sidebar from "./Sidebar"


function Layout() {

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar/>
        <Content/>
      </div>
    </div>
  )
}

export default Layout