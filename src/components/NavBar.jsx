import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/puppies">All Puppies</Link>
            &nbsp; | &nbsp;
            <Link to="/puppies/new">New Puppy</Link>
        </nav>
    )
}

export default NavBar;