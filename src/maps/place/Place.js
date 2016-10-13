import React from 'react'
import styles from 'Place.css'

export default (props) =>
    <div id="icon"> <img src={process.env.PUBLIC_URL + props.icon} />
    </div>