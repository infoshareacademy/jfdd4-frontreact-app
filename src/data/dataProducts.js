
var initialState = {
    products: [],
    // isLoading: true,
    filters: {
        none: function () { return true },
        IsCereal: function (product) { return product.category === 'kasza'},
        IsOils: function (product) { return product.category === 'olej'},
        IsRice: function (product) { return product.category === 'ryż'},
        IsFruit: function (product) { return product.category === 'owoce suszone'},
        IsFish: function (product) { return product.category === 'ryby'},
        IsBread: function (product) { return product.category === 'chleb'},
        Price1: function (product) { return product.price < 5 },
        Price2: function (product) { return product.price > 5 && product.price < 10 },
        Price3: function (product) { return product.price > 10 }
    },
    activeFilter: 'none'
}

var finalState = {
    products: [
        {
            id: 1,
            name: 'Kasza Jaglana 500 g',
            description: 'Kasza Jaglana jest smaczna, zdrowa i tania. Okreslana krolowa kasz. Jaglani rycerze bronia namietnie jej doskonalosci i maja racje!',
            price: 4.99,
            category: 'kasza',
            shops: [1, 2, 3, 4, 5],
            image: '/imageProduct/millet.jpg',
        },
        {
            id: 2,
            name: 'Oliwa z oliwek 500 ml',
            description: 'Oliwa z oliwek z Grecji, dokladniej z Knosos jest jedna z najsmaczniejszych oliw na swiecie. Doskoanala do salatek.',
            price: 9.99,
            category: 'olej',
            shops: [1, 2,  4],
            image: '/imageProduct/oil.jpg',
        },
        {
            id: 3,
            name: 'Olej kokosowy 1 kg',
            description: 'Interesujacy kokosowy smak i zapach. Tloczony na zimno. Na chleb, do pieczenai i smazenia. Uznany za najzdrowszy olej swiata',
            price: 9.99,
            category: 'olej',
            shops: [2, 4],
            image: '/imageProduct/oil-coconut.jpg',
        },
        {
            id: 4,
            name: 'Makaron Razowy 500 g',
            description: 'Ekonoliczny makaron z pszenicy orkiszowej z pelnego przemialu. Nie polecany dla bezglutenowcow',
            price: 2.49,
            category: 'makaron',
            shops: [5],
            image: '/imageProduct/wheat-pasta.jpg',
        },
        {
            id: 5,
            name: 'Ryz Basmati 500 g',
            description: 'Subtelny ryz basmati bialy charakteryzuje sie subtelnym smakiem i niepowtarzalnym aromatem. Stanowi najszlachetniejsza odmiane ryzu na swiecie.',
            price: 3.99,
            category: 'ryż',
            shops: [1, 3,  4],
            image: '/imageProduct/rice.jpg',
        },
        {
            id: 6,
            name: 'Morele Suszone 500 g',
            description: 'Ekologiczne morele suszone smakuja przepysznie jako przekaska oraz dodatej do cieplej owsianki.',
            price: 12.49,
            category: 'owoce suszone',
            shops: [1],
            image: '/imageProduct/dried-apricots.jpg',
        },
        {
            id: 7,
            name: 'Losos Norweski 1 kg',
            description: 'Produkt idealny jako przystawka do salatek i pieczywa. Dzieki bogatym kwasom tluszczowym omega 3 i 6 jest produktem bardzo zdrowym.',
            price: 66.66,
            category: 'ryby',
            shops: [1, 2, 5],
            image: '/imageProduct/salmon.jpg',
        },
        {
            id: 8,
            name: 'Tunczyk 1 kg',
            description: 'Produkt idealny jako przystawka do salatek i pieczywa.',
            price: 66.66,
            category: 'ryby',
            shops: [2, 4],
            image: '/imageProduct/tuna.jpg',
        },
        {
            id: 9,
            name: 'Tatar z lososia 125 g',
            description: 'Gotowy pyszny tatar z lososia, idealny zamiennik zdrowego posilku.',
            price: 9.99,
            category: 'ryby',
            shops: [1],
            image: '/imageProduct/salmon-tartare.jpg',
        },
        {
            id: 10,
            name: 'Chleb gryczany 500 g',
            description: 'Swiezy chleb bezglutenowy Bio 500 g z farmy swietokrzyskiej. Polecany dla koneserow zdrowej zywnosci.',
            price: 5.99,
            category: 'chleb',
            shops: [4],
            image: '/imageProduct/buckwheat-bread.jpg',
        }
    ],
}

export default {initialState, finalState}
export {initialState, finalState};