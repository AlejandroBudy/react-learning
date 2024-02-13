import {Outlet} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import "../index.css"


const Root = () => {
    return <>
        <MainNavigation></MainNavigation>
        <main>
            <Outlet></Outlet>
        </main>
    </>
}

export default Root