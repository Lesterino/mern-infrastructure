import { Link } from "react-router-dom";
import * as usersService from '../../utilities/users-service';

const NavBar = ({user, setUser}) => {
    const handleLogOut = () => {
        usersService.logOut();
        setUser(null);
    }
    return (
        <nav>
            <div> 
                Hello, {user.name} &nbsp;
                <Link to ='' onClick={handleLogOut}>
                    Log Out
                </Link>
            </div>
            <Link to="/puppies">All Puppies</Link>
            &nbsp; | &nbsp;
            <Link to="/puppies/new">New Puppy</Link>
        </nav>
    )
}

export default NavBar;