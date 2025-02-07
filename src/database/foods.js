const foods = () => {
  return [
    {
      name: 'Café com leite e açucar',
      description: 'Café, 300ml de leite e 15g de açucar',
      calories: 235.5,
      carbohydrate: 30,
      proteins: 8.7,
      fat: 9,
      quantity: 300,
      measure: 'ml'
    },
    {
      name: 'Castanha do pará',
      description: 'Castanha do pará 100g',
      calories: 643.00,
      carbohydrate: 15.10,
      proteins: 14.50,
      fat: 63.50,
      quantity: 100,
      measure: 'g'
    },
    {
      name: 'Pão de forma, presunto, queijo, maionese',
      description: '2 Fatias de pão de forma, 20g de presunto, 20g de queijo, 12g de maionese',
      calories: 247.4,
      carbohydrate: 25.46,
      proteins: 11.62,
      fat: 10.92,
      quantity: 1,
      measure: 'un'
    },
    {
      name: 'Arroz, feijão, peito de frango',
      description: '50g de arroz, 100g de feijão, 400g de peito de frango',
      calories: 695,
      carbohydrate: 28,
      proteins: 97.85,
      fat: 18.15,
      quantity: 1,
      measure: 'un'
    },

    //Itens separados

    {
      name: 'Arroz',
      description: 'Arroz Cozido com oleo',
      calories: 150,
      carbohydrate: 28,
      proteins: 2.7,
      fat: 1.3,
      quantity: 100,
      measure: 'g'
    },
    {
      name: 'Feijão',
      description: 'Feijão Cozido com oleo',
      calories: 100,
      carbohydrate: 14,
      proteins: 4.5,
      fat: 1.5,
      quantity: 100,
      measure: 'g'
    },
    {
      name: 'Peito de Frango Sadia Grelhado',
      description: 'Peito de Frango Sadia Grelhado em 3g de azeite e 3g de manteiga',
      calories: 130,
      carbohydrate: 0,
      proteins: 23,
      fat: 4,
      quantity: 100,
      measure: 'g'
    },
    {
      name: 'Brócolis',
      description: 'Brócolis Cru',
      calories: 34,
      carbohydrate: 6.64,
      proteins: 2.82,
      fat: 0.37,
      quantity: 100,
      measure: 'g'
    },
    {
      name: 'Batata mc cain',
      description: 'Batata mc cain airfryer',
      calories: 103,
      carbohydrate: 15,
      proteins: 2,
      fat: 3.2,
      quantity: 100,
      measure: 'g'
    },
    {
      name: 'Nuggets Rezende',
      description: 'Nuggets Rezende airfryer',
      calories: 280,
      carbohydrate: 23,
      proteins: 14,
      fat: 14,
      quantity: 130,
      measure: 'g'
    },
    {
      name: 'Nuggets Aurora',
      description: 'Nuggets Aurora airfryer',
      calories: 233.85,
      carbohydrate: 20.77,
      proteins: 10,
      fat: 12.32,
      quantity: 100,
      measure: 'g'
    },
    {
      name: 'Pão de queijo tradicional duduxo',
      description: 'Pão de queijo tradicional duduxo',
      calories: 52.5,
      carbohydrate: 8.5,
      proteins: 0.35,
      fat: 2.65,
      quantity: 1,
      measure: 'un'
    },
    {
      name: 'Lasanha Bolonhesa Sadia',
      description: 'Lasanha Bolonhesa Sadia',
      calories: 125,
      carbohydrate: 10,
      proteins: 8.6,
      fat: 5.6,
      quantity: 100,
      measure: 'g'
    },
    {
      name: 'Coxa Sadia',
      description: 'Coxa Sadia',
      calories: 84,
      carbohydrate: 0,
      proteins: 12,
      fat: 6,
      quantity: 1,
      measure: 'un'
    },
    {
      name: 'Coxinha da asa aurora',
      description: 'Coxinha da asa aurora',
      calories: 84.67,
      carbohydrate: 0,
      proteins: 8,
      fat: 6,
      quantity: 1,
      measure: 'un'
    },
    {
      name: 'Sobrecoxa Sadia',
      description: 'Sobrecoxa Sadia',
      calories: 194,
      carbohydrate: 0,
      proteins: 17,
      fat: 14,
      quantity: 1,
      measure: 'un'
    },
    {
      name: 'Suco em pó',
      description: 'Suco em pó feito em 2 litros dagua',
      calories: 3,
      carbohydrate: 0.5,
      proteins: 0,
      fat: 0,
      quantity: 100,
      measure: 'ml'
    },
    {
      name: 'Leite',
      description: 'Leite',
      calories: 117,
      carbohydrate: 10,
      proteins: 5.8,
      fat: 6,
      quantity: 200,
      measure: 'ml'
    },
    {
      name: 'Coca Cola Original',
      description: 'Coca Cola Original',
      calories: 60,
      carbohydrate: 15,
      proteins: 0,
      fat: 0,
      quantity: 200,
      measure: 'ml'
    },
    {
      name: 'Ferrero Rocher',
      description: 'Ferrero Rocher',
      calories: 75.560,
      carbohydrate: 5.5,
      proteins: 1.05,
      fat: 5.5,
      quantity: 1,
      measure: 'un'
    },
    {
      name: 'Chocolate Branco Lacta',
      description: 'Chocolate Branco Lacta',
      calories: 29,
      carbohydrate: 3.20,
      proteins: 1.05,
      fat: 1.64,
      quantity: 1,
      measure: 'un'
    },
    {
      name: 'Chocolate Moça',
      description: 'Chocolate Moça',
      calories: 47,
      carbohydrate: 5.5,
      proteins: 0.57,
      fat: 2.475,
      quantity: 1,
      measure: 'un'
    },
    {
      name: 'Açucar Refinado',
      description: 'Açucar Refinado',
      calories: 20,
      carbohydrate: 5,
      proteins: 0,
      fat: 0,
      quantity: 5,
      measure: 'g'
    },
    {
      name: 'Pão Frances',
      description: 'Pão Frances',
      calories: 150,
      carbohydrate: 29.30,
      proteins: 4.00,
      fat: 1.55,
      quantity: 1,
      measure: 'un'
    },
    {
      name: 'Pão de forma',
      description: 'Pão de forma',
      calories: 125,
      carbohydrate: 24,
      proteins: 3.9,
      fat: 1.5,
      quantity: 1,
      measure: 'un'
    },
    {
      name: 'Mussarela',
      description: 'Mussarela',
      calories: 31.80,
      carbohydrate: 0.25,
      proteins: 2.16,
      fat: 2.46,
      quantity: 10,
      measure: 'g'
    },
    {
      name: 'Presunto',
      description: 'Presunto',
      calories: 9.4,
      carbohydrate: 0.08,
      proteins: 1.7,
      fat: 0.25,
      quantity: 10,
      measure: 'g'
    },
    {
      name: 'Maionese',
      description: 'Maionese',
      calories: 40,
      carbohydrate: 0.8,
      proteins: 0,
      fat: 4,
      quantity: 12,
      measure: 'g'
    },
    {
      name: 'Requeijão Vigor',
      description: 'Requeijão Vigor',
      calories: 78,
      carbohydrate: 1,
      proteins: 2.4,
      fat: 7.2,
      quantity: 30,
      measure: 'g'
    },
    {
      name: 'Danette Chocolate Branco',
      description: 'Danette Chocolate Branco',
      calories: 122,
      carbohydrate: 19,
      proteins: 2.6,
      fat: 3.9,
      quantity: 1,
      measure: 'un'
    },
    {
      name: 'Licor Fino de Doce de Leite Dom Tapparo',
      description: 'Licor Fino de Doce de Leite Dom Tapparo',
      calories: 179.5,
      carbohydrate: 36.3,
      proteins: 0,
      fat: 0,
      quantity: 50,
      measure: 'ml'
    },
    {
      name: 'Abacate',
      description: 'Abacate',
      calories: 96,
      carbohydrate: 6,
      proteins: 1.20,
      fat: 12,
      quantity: 100,
      measure: 'g'
    },
    {
      name: 'Yo Pro Cappuccino',
      description: 'Yo Pro Cappuccino',
      calories: 159,
      carbohydrate: 20,
      proteins: 15,
      fat: 2,
      quantity: 250,
      measure: 'ml'
    },
    {
      name: 'Pure de batata',
      description: 'Pure de batata',
      calories: 88,
      carbohydrate: 15,
      proteins: 1.7,
      fat: 2.8,
      quantity: 100,
      measure: 'g'
    },
    {
      name: 'Palmito',
      description: 'Palmito comprido',
      calories: 11,
      carbohydrate: 1.5,
      proteins: 0.8,
      fat: 0,
      quantity: 50,
      measure: 'g'
    },
    {
      name: 'Personalizado',
      description: 'Personalizado',
      calories: 0,
      carbohydrate: 0,
      proteins: 0,
      fat: 0,
      quantity: 1,
      measure: 'un'
    },
  ]
}

export { foods }