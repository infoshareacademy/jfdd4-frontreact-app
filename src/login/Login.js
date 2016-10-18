/**
 * Created by karol on 12.10.16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);
}

ReactDOM.render(
    <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
    />,
    document.getElementById('demo')
);