/**
 * Created by karol on 12.10.16.
 */

import React from 'react';
import GoogleLogin from 'react-google-login';

import { FacebookLogin } from 'react-facebook-login-component';


const mapStateToProps = (state) => ({
    user: state.user
})

class Login extends React.Component{
constructor (props, context) {
    super(props, context);
}

responseFacebook (response) {
    console.log(response);
    //anything else you want to do(save to localStorage)...
}

    render() {
        return (
            <div>
                <div>
            <GoogleLogin
                clientId="287909334341-a9d7rvs2g737tlm1vibohhn0a4kn5bj0.apps.googleusercontent.com"
                onSuccess={console.log}
                onFailure={console.log}
                style={{
                    background: '#369',
                    fontFamily: 'sans-serif'
                }}
            />
                    </div>
                <div>
            <FacebookLogin 
                  socialId="4235768"
                  language="en_US"
                  scope="public_profile,email"
                  responseHandler={this.responseFacebook}
                  xfbml={true}
                  version="v2.5"
                  class="facebook-login"
                  buttonText="Login With Facebook" 
            />
                    </div>
           </div> 
        );
    }
}

export default Login;