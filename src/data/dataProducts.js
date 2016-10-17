var initialState = {
    data: [],
    // filters : {
    //     none: function () {return true},
    //     shops: function (shop) {return shop.name === 'shops'}
    // }
}

var finalState = {
    products: [
    {
        ID: 1,
        Name: "Kasza Jaglana 500 g",
        Description: "Kasza Jaglana jest smaczna, zdrowa i tania. Okreslana krolowa kasz. Jaglani rycerze bronia namietnie jej doskonalosci i maja racje!",
        Price: 4.99,
        Category: "Kasze",
        Shops: [1, 2, 3, 4, 5],
    },
    {
        ID: 2,
        Name: "Oliwa z oliwek 500 ml",
        Description: "Oliwa z oliwek z Grecji, dokladniej z Knosos jest jedna z najsmaczniejszych oliw na swiecie. Doskoanala do salatek.",
        Price: 9.99,
        Category: "Olej",
        Shops: [1, 2,  4],

    },
    {
        ID: 3,
        Name: "Olej kokosowy 1 kg",
        Description: "Interesujacy kokosowy smak i zapach. Tloczony na zimno. Na chleb, do pieczenai i smazenia. Uznany za najzdrowszy olej swiata",
        Price: 9.99,
        Category: "Olej",
        Shops: [2, 4],
    },
    {
        ID: 4,
        Name: "Makaron Razowy 500 g",
        Description: "Ekonoliczny makaron z pszenicy orkiszowej z pelnego przemialu. Nie polecany dla bezglutenowcow",
        Price: 2.49,
        Category: "Makaron",
        Shops: [5],
    },
    {
        ID: 5,
        Name: "Ryz Basmati 500 g",
        Description: "Subtelny ryz basmati bialy charakteryzuje sie subtelnym smakiem i niepowtarzalnym aromatem. Stanowi najszlachetniejsza odmiane ryzu na swiecie.",
        Price: 3.99,
        Category: "Ryż",
        Shops: [1, 3,  4],
    },
    {
        ID: 6,
        Name: "Morele Suszone 500 g",
        Description: "Ekologiczne morele suszone smakuja przepysznie jako przekaska oraz dodatej do cieplej owsianki.",
        Price: 12.49,
        Category: "Owoce suszone",
        Shops: [1],
    },
    {
        ID: 7,
        Name: "Losos Norweski 1 kg",
        Description: "Produkt idealny jako przystawka do salatek i pieczywa. Dzieki bogatym kwasom tluszczowym omega 3 i 6 jest produktem bardzo zdrowym.",
        Price: 66.66,
        Category: "Ryby",
        Shops: [1, 2, 5],
    },
    {
        ID: 8,
        Name: "Tunczyk 1 kg",
        Description: "Produkt idealny jako przystawka do salatek i pieczywa.",
        Price: 66.66,
        Category: "Ryby",
        Shops: [2,  4],
    },
    {
        ID: 9,
        Name: "Tatar z lososia 125 g",
        Description: "Gotowy pyszny tatar z lososia, idealny zamiennik zdrowego posilku.",
        Price: 9.99,
        Category: "Ryby",
        Shops: [1],
    },
    {
        ID: 10,
        Name: "Chleb gryczany 500 g",
        Description: "Swiezy chleb bezglutenowy Bio 500 g z farmy swietokrzyskiej. Polecany dla koneserow zdrowej zywnosci.",
        Price: 5.99,
        Category: "Chleb",
        Shops: [4],
    }, 
]
}

export {initialState, finalState}

