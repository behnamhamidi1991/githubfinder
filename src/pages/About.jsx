import { BiSolidHome } from "react-icons/bi";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1 className="text-4xl mb-4">Github Finder</h1>
      <p className="mb-4 text-xl font-light">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
        aliquam odit, beatae id a voluptatem adipisci ex libero voluptate
        repellat nesciunt ullam consectetur vitae officiis, quis perferendis
        eaque doloribus fugit.
      </p>
      <button>
        <Link className="btn bg-blue-500 text-white font-bold" to="/">
          <BiSolidHome /> Back To Homepage
        </Link>
      </button>
    </div>
  );
}

export default About;
