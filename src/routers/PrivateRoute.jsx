import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, Route } from 'react-router-dom'

export const PrivateRoute = ({
    isAuthenticated,
    element: Element,
    ...rest
}) => {

    return (
        <Route {...rest}
            element={(props) => (
                (isAuthenticated)
                    ? (<Element {...props} />)
                    : (<Navigate to='/login' replace />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    element: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired
}
