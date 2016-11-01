const filters = {
    all: {
    label: 'WSZYSTKIE PRODUKTY',
    predicate: product => true
    },
    cereals : {
        label: "KASZA",
        predicate: product => product.category === 'kasza'
    },
    oils : {
        label: "OLEJ",
        predicate: product => product.category === 'olej'
    },
    rices : {
        label: "RYŻ",
        predicate: product => product.category === 'ryż'
    },
    fruits : {
        label: "OWOCE",
        predicate: product => product.category === 'owoce'
    },
    fishs : {
        label: "RYBY",
        predicate: product => product.category === 'ryby'
    },
    breads : {
        label: "PIECZYWO",
        predicate: product => product.category === 'pieczywo'
    }
    // price1s : {
    //     label: "cena < 5.00zł",
    //     predicate: product => product.category === 'price1'
    // },
    // price2s : {
    //     label: "cena > 5.00 < 10.00zł",
    //     predicate: product => product.category === 'price2'
    // },
    // price3s : {
    //     label: "cena < 10.00zł",
    //     predicate: product => product.category === 'price3'
    // }
}

export default filters