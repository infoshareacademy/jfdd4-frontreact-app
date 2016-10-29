const filters = {
    all: {
    label: 'all',
    predicate: product => true
    },
    cereals : {
        label: "Kasze",
        predicate: product => product.category === 'cereal'
    },
    oils : {
        label: "olej",
        predicate: product => product.category === 'oil'
    },
    rices : {
        label: "ryz",
        predicate: product => product.category === 'rice'
    },
    fruits : {
        label: "owoce",
        predicate: product => product.category === 'fruit'
    },
    fishs : {
        label: "ryby",
        predicate: product => product.category === 'fish'
    },
    breads : {
        label: "pieczywo",
        predicate: product => product.category === 'bread'
    },
    price1s : {
        label: "cena5",
        predicate: product => product.category === 'price1'
    },
    price2s : {
        label: "cena10",
        predicate: product => product.category === 'price2'
    },
    price3s : {
        label: "cenapow10",
        predicate: product => product.category === 'price3'
    }
}

export default filters