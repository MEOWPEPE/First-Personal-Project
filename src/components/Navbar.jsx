import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul className="flex justify-end px-10 items-center w-full bg-blue-700 h-14  gap-x-6 text-2xl text-white ">
        <li>
          <Link to="/" className="font-mono text-white px-2 hover:text-blue-300">
            <u>Home</u>
          </Link>
        </li>
        <li>
          <Link to="/owner" className="font-mono text-white px-2 hover:text-blue-300">
            <u>Owner</u>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
