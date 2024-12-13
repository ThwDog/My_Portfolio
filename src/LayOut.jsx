import  NavBar  from '/src/Function/NavBar'
import { Outlet } from "react-router-dom"

export  default function LayOut(){
    return(
        <>
        <NavBar />
        <main>
                <Outlet/>
        </main>
        </>
    )
}