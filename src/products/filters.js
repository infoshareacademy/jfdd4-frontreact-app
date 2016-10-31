const filters = {
    all: {
    label: 'wszystkie produkty',
    predicate: product => true
    },
    cereals : {
        label: "kasza",
        predicate: product => product.category === 'kasza'
    },
    oils : {
        label: "olej",
        predicate: product => product.category === 'olej'
    },
    rices : {
        label: "ryż",
        predicate: product => product.category === 'ryż'
    },
    fruits : {
        label: "owoce",
        predicate: product => product.category === 'owoce'
    },
    fishs : {
        label: "ryby",
        predicate: product => product.category === 'ryby'
    },
    breads : {
        label: "pieczywo",
        predicate: product => product.category === 'pieczywo'
    },
    price1s : {
        label: "cena < 5.00zł",
        predicate: product => product.category === 'price1'
    },
    price2s : {
        label: "cena > 5.00 < 10.00zł",
        predicate: product => product.category === 'price2'
    },
    price3s : {
        label: "cena < 10.00zł",
        predicate: product => product.category === 'price3'
    }
}

export default filters