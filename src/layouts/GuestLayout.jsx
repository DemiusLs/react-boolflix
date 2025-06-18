import { Outlet } from "react-router-dom"
import HeaderComponent from "../components/HeaderComponent"


const GuestLayout = () => {

    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
    )
}

export default GuestLayout