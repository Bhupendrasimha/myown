import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const ProtectedRoute = (props) => {
    return (
        props.user?.details?.auth_token ?
            (
                props?.isProtected ?
                    <Route {...props} />
                    :
                    <Redirect to='/admins' />
            )
            :
            (
                props?.isProtected ?
                    <Redirect to='/' />
                    :
                    <Route {...props} />
            )

    );
}

const mapStateToProps = (state) => {
    return {
        user: state.User,
    }
}

export default connect(mapStateToProps, null)(ProtectedRoute);