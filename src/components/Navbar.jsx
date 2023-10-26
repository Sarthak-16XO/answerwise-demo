import logo from "../assets/logoImage.png";
import brandname from "../assets/brandlog.png";
import { Link } from "react-router-dom";


function Header() {
  return (

    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-b border-gray-200">
        <Link to='/' className="flex items-center">
          <img src={logo} className="h-10 mr-3 rounded-md" alt="Answerwise Logo" />
          <img src={brandname} className="h-10 mr-3 rounded-md" alt="Answerwise Logo" />
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <nav className="">
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Dashboard</button>
          </nav>
        </div>
      </div>
    </nav>

  );
}

export default Header;
