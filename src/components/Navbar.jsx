import logo from "../assets/logoImage.png";
import brandname from "../assets/brandlog.png";
import { Link } from "react-router-dom";


function Header() {
  return (

    <nav className="bg-slate-800 border-b border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-b border-gray-600">
        <Link to='/' className="flex items-center">
          <img src={logo} className="h-10 mr-3 rounded-md" alt="Answerwise Logo" />
          <p  className="mr-3 rounded-md text-white text-2xl" alt="Answerwise Logo">answerwise.ai</p>
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
