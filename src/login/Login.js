import React from 'react';
import GoogleLogin from 'react-google-login';

const mapStateToProps = (state) => ({
    user: state.user
})

class Login extends React.Component {
    render() {
        return (
            <GoogleLogin
                clientId="287909334341-a9d7rvs2g737tlm1vibohhn0a4kn5bj0.apps.googleusercontent.com"
                onSuccess={console.log}
                onFailure={console.log}
                className="btn btn-default btn-sm"
                bsStyle="link"
                style={{marginRight: '10'}}>
            </GoogleLogin>
        );
    }
}

export default Login;