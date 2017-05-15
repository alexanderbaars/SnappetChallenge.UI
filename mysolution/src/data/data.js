const mathgrade1 = [{
  objective: '123. Doortellen en terugtellen, met sprongen van 3 of meer dan 10 en zelf meer dan 100',
  number: 123,
  done: 16,
  todo: 24,
  optional: 0
},
  {
    objective: '101. Splitsend vermenigvuldigen (6 x 32 = 6837) En nog meer rekenen dan je zou willen',
    number: 101,
    done: 10,
    todo: 27,
    optional: 3
  },
  {
    objective: '121. Doortellen en terugtellen, met sprongen van 1, 2, 4 en 6',
    number: 121,
    done: 3,
    todo: 34,
    optional: 3
  }]

const mathgrade2 = [{
  objective: '223. Kwadraat afsplitsen, met sprongen van 3 of meer dan 10 en zelf meer dan 100',
  number: 223,
  done: 3,
  todo: 34,
  optional: 3
},
  {
    objective: '201. Splitsend vermenigvuldigen (6 x 32 = 6837) En nog meer rekenen dan je zou willen',
    number: 201,
    done: 10,
    todo: 27,
    optional: 3
  },
  {
    objective: '221. Doortellen en terugtellen, met sprongen van 1, 2, 4 en 6',
    number: 121,
    done: 3,
    todo: 34,
    optional: 3
  }]
const mathgrade3 = [{
  objective: '323. Vierendelen, met sprongen van 3 of meer dan 10 en zelf meer dan 100',
  number: 323,
  done: 3,
  todo: 34,
  optional: 3
},
  {
    objective: '301. Fatsoenlijk vermenigvuldigen (6 x 32 = 6837) En nog meer rekenen dan je zou willen',
    number: 301,
    done: 10,
    todo: 27,
    optional: 3
  },
  {
    objective: '321. Doortellen en terugtellen, met sprongen van 1, 2, 4 en 6',
    number: 321,
    done: 3,
    todo: 34,
    optional: 3
  }]

const grades = [mathgrade1, mathgrade2, mathgrade3]

const datatree = {
  getTree () {
    return grades
  },
  filterTree (filter) {
    return grades[filter]
  }
}

module.exports = datatree
