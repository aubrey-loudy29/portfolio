import logo from '../assets/logo.png'

import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div id='navbar' className=" bg-white bg-opacity-50 grid grid-cols-5 gap-4">
            <img id='nav-logo' src={logo} alt="logo" />
            <div id='nav-button-group' className="col-end-6 col-span-2 space-x-9 text-darkGreen">
                <Link to={"/"}>
                    <button id='nav-button' className="btn hover:text-green hover:opacity-75 focus:opacity-50 focus:text-darkGreen">home</button>
                </Link>
                <Link to={"/about"}>
                    <button id='nav-button' className="btn hover:text-green hover:opacity-75 focus:opacity-50 focus:text-darkGreen">about</button>
                </Link>
                <Link to={"/skills"}>
                    <button id='nav-button' className="btn hover:text-green hover:opacity-75 focus:opacity-50 focus:text-darkGreen">skills</button>
                </Link>
                <Link to={"/projects"}>
                    <button id='nav-button' className="btn hover:text-green hover:opacity-75 focus:opacity-50 focus:text-darkGreen">projects</button>
                </Link>
                <Link to={"/contact"}>
                    <button id='nav-button' className="btn hover:text-green hover:opacity-75 focus:opacity-50 focus:text-darkGreen">contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar