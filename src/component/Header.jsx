import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="flex h-12 items-center justify-between bg-black px-4 text-white sm:h-14 sm:px-6 sm:py-10">
      <div className="flex items-center gap-6">
        <img src="../netflix.png" alt="" className="w-16 sm:w-28" />
        <a href="">Phim</a>
        <a href="">Truyền hình</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faSearch} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
