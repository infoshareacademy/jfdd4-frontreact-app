const filters = {
    all: {
    label: 'all',
    predicate: product => true
    },
    isCereal : {
        label: "Kasze",
        predicate: product => product.type === 'cereal'
    },
    isOils : {
        label: "olej",
        predicate: product => product.type === 'oil'
    },
    isRice : {
        label: "ryz",
        predicate: product => product.type === 'rice'
    },
    isFruit : {
        label: "owoce",
        predicate: product => product.type === 'fruit'
    },
    isFish : {
        label: "ryby",
        predicate: product => product.type === 'fish'
    },
    isBread : {
        label: "pieczywo",
        predicate: product => product.type === 'bread'
    },
    price1 : {
        label: "cena5",
        predicate: product => product.type === 'price1'
    },
    price2 : {
        label: "cena10",
        predicate: product => product.type === 'price2'
    },
    price3 : {
        label: "cenapow10",
        predicate: product => product.type === 'price3'
    }
}

export default filters