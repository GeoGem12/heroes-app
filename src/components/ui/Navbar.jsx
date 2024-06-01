import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const Navbar = () => {

    const { user: { name }, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.setItem('lastRoute', window.location.pathname);

        dispatch({
            type: types.logout
        });

        navigate("/login", { replace: true });
    };


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
                    <span className='nav-item nav-link text-info'>
                        {name}
                    </span>

                    <button
                        className="btn btn-primary nav-item nav-link"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav >
    )
}