import React from 'react'
import DataShops from '../data/dataShops'
import {finalState} from '../data/dataProducts'
import DataProducts from '../data/dataProducts'
import { Well, Glyphicon, PageHeader, Table, Button } from 'react-bootstrap'

import {
    ToastContainer,
    ToastMessage,

} from 'react-toastr';

import 

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


export default class Favorites extends React.Component {
    render() {
        var prop = this.props;

        var favShopsIds = getFavoriteShops();
        var favProductsIds = getFavoriteProducts();

        return (
            <div>
                {DataShops.finalState.shops
                    .filter (s =>
                            favShopsIds.filter(favShop => favShop === s.id).length
                    ).map(s => {
                        return (
                            <div>
                                <Col xs={10} sm={6} md={4} lg={3} key={s.id}>
                                    <div className="card FavoriteShops polaroid">
                                        <li  className="card-header">
                                            SKLEP
                                        </li>
                                        <div className="card-image">
                                            <Image className="size" src={s.icon}/>
                                        </div>
                                        <li className="list-group-item">
                                            <span className="left-side">NAZWA</span>
                                            <span className="right-side">{s.name}</span>
                                        </li>
                                    </div>
                                </Col>
                            </div>
                        )
                    })
                }
                {finalState.products
                    .filter(prod =>
                        favProductsIds.find(favProd => favProd === prod.id)
                    ).map(prod => {
                        return (
                            <div>
                                <Col xs={10} sm={6} md={4} lg={3} key={prod.id}>
                                    <div className="card FavoriteProducts polaroid">
                                        <li  className="card-header">
                                            PRODUKT
                                        </li>
                                        <div className="card-image">
                                            <Image className="size" src={prod.image}/>
                                            <ButtonAddToList />
                                        </div>
                                        <li className="list-group-item">
                                            <span className="left-side">NAZWA</span>
                                            <span className="right-side">{prod.name}</span>
                                        </li>
                                    </div>
                                </Col>
                            </div>
                        )
                    })
                }
             </div>
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
        )
    }
}
