import { Link } from "react-router-dom";

import Username from "../features/user/Username";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="border-b border-stone-400 bg-yellow-500 p-4 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
