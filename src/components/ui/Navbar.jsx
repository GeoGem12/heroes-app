import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand px-3"
                to="/"
            >
                HeroApp
            </Link>

            <div className='container-fluid'>
                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className="nav-item nav-link"
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className="nav-item nav-link"
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink
                            className="nav-item nav-link"
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="nav navbar-nav navbar-right">
                    <NavLink
                        className="nav-item nav-link"
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </div>
            </div>
        </nav >
    )
}