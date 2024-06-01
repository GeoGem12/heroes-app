import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div >
                <Routes>
                    <Route
                        path="/login"
                        element={user.logged ? <Navigate to="/" replace /> : <LoginScreen />}
                    />
                    <Route
                        path="/*"
                        element={user.logged ? <DashboardRoutes /> : <Navigate to="/login" replace />}
                    />
                </Routes>
            </div>
        </Router>
    )
}
