import { BiSolidHome } from "react-icons/bi";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold mb-8">Ooops :(</h1>
          <p className="text-2xl mb-8">404 - Page not found!</p>
          <button>
            <Link className="btn bg-blue-500 text-white font-bold" to="/">
              <BiSolidHome /> Back To Homepage
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
