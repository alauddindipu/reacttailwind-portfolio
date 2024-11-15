import logo from "../assets/logo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex item-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-20  rounded-2xl " src={logo} alt="logo" />
            </div>
            <div>

            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/alauddin-dipu-b809ba188" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/alauddindipu" target="_blank"> <FaGithub /></a>
                {/* <FaSquareXTwitter />
                <FaInstagram /> */}
            </div>

        </nav>
    );

};

export default Navbar;
