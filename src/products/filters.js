const filters = {
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
    fish : {
        label: "RYBY",
        predicate: product => product.category === 'ryby'
    },
    breads : {
        label: "PIECZYWO",
        predicate: product => product.category === 'pieczywo'
    }
}

export default filters