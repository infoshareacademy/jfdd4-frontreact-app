import React from "react"

import {
    ToastContainer,
    ToastMessage,

} from 'react-toastr';


const ToastMessageFactory = React.createFactory(ToastMessage.animation);

export default class App extends React.Component {

    addAlert = this.addAlert.bind(this);
    clearAlert = this.clearAlert.bind(this);

    addAlert() {
        this.refs.container.success(`Dodałeś produkt o nazwie  do ulubionych`, ``, {
            closeButton: true,
        });
    }

    clearAlert() {
        this.refs.container.clear();
    }

    render() {
        return (
            <div>
                <ToastContainer
                    toastMessageFactory={ToastMessageFactory}
                    ref="container"
                    className="toast-top-right"
                />

                <h1>
                    React-Toastr
                    <small>React.js toastr component</small>
                </h1>

                <div className="btn-container">
                    <button className="primary" onClick={this.addAlert}>
                        Hello
                    </button>
                    <button className="primary" onClick={this.clearAlert}>
                        CLEAR
                    </button>
                </div>

                
            </div>
        );
    }
}