/**
 * Created by karol on 12.10.16.
 */
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
                    style={{
              background: '#369',
              fontFamily: 'sans-serif'
            }}
               />
          );
    }
}

export default Login;