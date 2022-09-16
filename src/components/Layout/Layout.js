import Header from "pages/Header/Header"
import Sidebar from "pages/Sidebar/Sidebar"
import { Routes, Route, Link, Outlet} from "react-router-dom"

const Layout = () => {

    return (
<div>
<Header/>
<div style={{display: "flex"}}>
<Sidebar/>
<Outlet/>
</div>

<footer>FOOTER</footer>
</div>
    )
}

export default Layout
