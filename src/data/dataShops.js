var initialState = {
    data: [],
    filters : {
        none: function () {return true},
        shops: function (shop) {return shop.name === 'shops'}
    }
}


var finalState = {
    shops: [
        {
            id : 1,
            name : 'Lidl', 
            location: {lat:54.356504,lng:18.588442},
            opened : 'pn-nd od 8:00 do 21:00'
        },
        {
            id : 2,
            name : 'Biedronka',
            location: {lat:54.342656,lng:18.615378},
            opened : 'pn-nd od 8:00 do 21:00'
        },
        
        {
            id: 3,
            name: 'Tesco',
            location: {lat:54.354616, lng:18.638935},
            opened: 'pn-nd od 6:00 do 24:00'
        },


        {
            id: 4,
            name: 'Stokrotka',
            location: {lat:54.356504,lng:18.588442},
            opened: 'pn-nd od 6:00 do 24:00'
        },


        {
            id: 5,
            name: 'U Jadzi',
            location: {lat:54.354616,lng:18.638935},
            opened: 'pn-nd od 6:00 do 24:00'
        }
    ]
};

export {initialState, finalState}