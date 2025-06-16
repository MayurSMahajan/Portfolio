import Carousal from "./Carousal";
import { Link } from "react-scroll";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

function MyWork() {
  return (
    <div>
      <h1 className="my-work-heading">
        My Work
        <Link
          activeClass="active"
          to="my-work"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
        >
          <ExpandCircleDownIcon className="circle-down-icon" />
        </Link>
      </h1>
      <Carousal />
    </div>
  );
}

export default MyWork;
