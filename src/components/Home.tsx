import { Link } from "react-router-dom";
import homeSvg from "../assets/home.svg";
function Home() {
  return (
    <Link to="/">
      <img src={homeSvg} alt="home" />
    </Link>
  );
}

export default Home;
