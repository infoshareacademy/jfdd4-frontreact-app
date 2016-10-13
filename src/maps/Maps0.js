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
       $.get('../shop/Shops.js', function (data) {
       this.setState({
       shops: data
        });
        }.bind(this));
        }

        render() {
           return (
               <li key={shops.id}>
               {shops.name}
               <Place to={`/users/${shops.location}`}>Show</Place>
               </li>
                  )
                    }
            }
            