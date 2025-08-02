import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="flex h-12 items-center justify-between bg-black px-4 text-white sm:h-14 sm:px-6 sm:py-10">
        <div className="flex items-center gap-6">
          <Link to={"/"}>
            <img src="/netflix.png" alt="" className="w-16 sm:w-28" />
          </Link>
          <Link to="/search?mediaType=movie" href="">
            Movie
          </Link>
          <Link to="/search?mediaType=tv">TV Show</Link>
        </div>
        <div>
          <Link to={"/search"}>
            <FontAwesomeIcon icon={faSearch} className="cursor-pointer" />
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
