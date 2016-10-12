/**
 * Created by karol on 12.10.16.
 */
import React from 'react'
import $ from 'jquery'

import { Link } from 'react-router'

export default class Maps extends React.Component {
    constructor(props) {
        super();
        this.state = {
           shops: []
        }
    }

        componentWillMount() {
            $.get('http://rest.learncode.academy/api/johnbob/friends', function (data) {
                this.setState({
                    shops: data
                });
            }.bind(this));
        }

        render() {
            var allShops = this.state.shops;
            var shopsToShow = allShops.filter(function (shops) {
                return shops.name !== undefined && typeof shops.name === 'string' && shops.name.length > 0
                // return friend.name
            })
            return (
                <ul>
                    {shopsToShow.map(function (shops) {
                        return (
                            <li key={shops.id}>
                                {shops.name}
                                <Link to={`/users/${shops.name}`}>Show</Link>
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }