var initialState = {
    data: [],
    filters : {
        none: function () {return true},
    }
}


var finalState = {
    shops: [
        {
            id : 1,
            name : 'Lidl',
            location: {lat:54.389993,lng:18.591996},
            adres: 'Hynka 67, Gdańsk',
            opened : 'od 8:00 do 21:00',
            icon: '/img/lidl-icon.png',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat diam. Pellentesque sed velit pharetra, condimentum arcu non, gravida est. Suspendisse viverra, libero eu semper consectetur, enim erat dignissim sem, eu placerat sapien justo non dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ullamcorper porttitor est in ullamcorper.',
            pic: '/img/lidl.jpg',
            link: 'http://www.lidl.pl/pl/index.htm'
        },
        {
            id : 2,
            name : 'Biedronka',
            location: {lat:54.411593,lng:18.584894},
            adres: 'Czerwony Dwór 19, Gdańsk',
            opened : 'od 8:00 do 21:00',
            icon: '/img/biedronka-icon.png',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat diam. Pellentesque sed velit pharetra, condimentum arcu non, gravida est. Suspendisse viverra, libero eu semper consectetur, enim erat dignissim sem, eu placerat sapien justo non dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ullamcorper porttitor est in ullamcorper.',
            pic: '/img/biedronka.jpg',
            link: 'http://www.biedronka.pl/pl'
        },
        
        {
            id: 3,
            name: 'Tesco',
            location: {lat:54.410236, lng:18.600062},
            opened: 'od 6:00 do 24:00',
            adres: 'Obrońców Wybrzeża 21, Gdańsk',
            icon: '/img/tesco-icon.png',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat diam. Pellentesque sed velit pharetra, condimentum arcu non, gravida est. Suspendisse viverra, libero eu semper consectetur, enim erat dignissim sem, eu placerat sapien justo non dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ullamcorper porttitor est in ullamcorper.',
            pic: '/img/tesco.jpg',
            link: 'https://www.tesco.pl/'

        },
        {
            id: 4,
            name: 'Stokrotka',
            location: {lat:54.404339,lng:18.597892},
            opened: 'od 6:00 do 24:00',
            adres: 'Kołobrzeska 44M, Gdańsk',
            icon: '/img/stokrotka-icon.png',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat diam. Pellentesque sed velit pharetra, condimentum arcu non, gravida est. Suspendisse viverra, libero eu semper consectetur, enim erat dignissim sem, eu placerat sapien justo non dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ullamcorper porttitor est in ullamcorper.',
            pic: '/img/stokrotka.jpg',
            link: 'http://stokrotka.pl/'
        },
        {
            id: 5,
            name: 'Żabka',
            location: {lat:54.402022,lng: 18.578064},
            opened: 'od 6:00 do 23:00',
            adres: 'Kołobrzeska 7, Gdańsk',
            icon: '/img/zabka-icon.png',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat diam. Pellentesque sed velit pharetra, condimentum arcu non, gravida est. Suspendisse viverra, libero eu semper consectetur, enim erat dignissim sem, eu placerat sapien justo non dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ullamcorper porttitor est in ullamcorper.',
            pic: '/img/zabka.jpg',
            link: 'http://zabka.pl/pl'
        }
    ]
};

export default {initialState, finalState}
export {initialState, finalState};