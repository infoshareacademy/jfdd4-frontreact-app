

import React from 'react'
import shops from '../data/dataShops'
import markShopsAsFavorite from'./favoriteShops'


export default class Shops extends React.Component {
    constructor() {
        super()

        this.state = {
            shops: []
        }
    }


    componentWillMount() {

    }

    render() {
        return (
            <ul>
                <h1>Shops</h1>
                {shops.map(function (shops) {
                    return <li key={shops.id}>{shops.id} {shops.name} {shops.location.lat} {shops.location.lng} {shops.opened} <button onclick={markShopsAsFavorite()}>Ulubione</button></li>
                })}
            </ul>
        )
    }

}
// export function getFavoritesStudents() {
//     return JSON.parse(localStorage.getItem('favoritesStudents')) || []
// }
//
// export function markStudentAsFavorite(student) {
//     var favoriteStudents = getFavoritesStudents()
//     var studentId = student.studentId
//
//     if (favoriteStudents.indexOf(id) === -1) {
//         favoriteStudents.push(id);
//     }
//     localStorage.setItem('favoritesStudents', JSON.stringify(favoriteStudents))
// }