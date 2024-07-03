import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className={`bg-gray-800 bg-opacity-0 text-white p-4 absolute w-full top-0 z-10 transition-transform duration-300 `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">Smooth Operator</div>
        <div>
          <Link to="/" className="px-4">
            Home
          </Link>
          <Link to="/demo" className="px-4">
            Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
