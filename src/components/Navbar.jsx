import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between px-10 items-center w-full bg-blue-700 h-14  gap-x-6 text-2xl text-white ">
        <div className="flex gap-2 font-mono">
          <img class="h-8 w-8 border-1 border-white" src="https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-12-15-185113.png"></img>
          <h1>BEST HACKERMAN IN FAMILY !!! "and only one"</h1>
        </div>

        <div className="flex font-mono">
          <li>
            <Link
              to="/"
              className=" text-white px-2 hover:text-blue-300"
            >
              <u>Home</u>
            </Link>
          </li>
          <li>
            <Link
              to="/owner"
              className=" text-white px-2 hover:text-blue-300"
            >
              <u>Contact</u>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
