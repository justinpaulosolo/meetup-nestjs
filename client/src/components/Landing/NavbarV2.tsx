import { Link } from "react-router-dom";

export const NavbarV2 = () => {
  return (
    <div className="flex justify-center m-5 sticky top-0">
      <nav className="max-w-7xl w-full">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-5xl px-5 text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Meetup
            </h1>
          </div>
          <div>
            <Link
              to="/login"
              className="bg-primary-500 hover:bg-primary-500 rounded text-white font-bold py-2 px-4 text-center"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
