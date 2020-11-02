const SHOP_DATA = {
  beverages: {
    id: 1,
    title: 'Beverages',
    routeName: 'beverages',
    items: [
      {
        id: 1,
        name: 'Iced Coffee',
        imageUrl: 'https://images.unsplash.com/photo-1595000453467-15d064f058c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 25
      },
      {
        id: 2,
        name: 'Cold Brew Sweet Cream',
        imageUrl: 'https://images.unsplash.com/photo-1570470752074-34141d4159be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 18
      },
      {
        id: 3,
        name: 'Cold Brew Bottle',
        imageUrl: 'https://images.unsplash.com/photo-1578635073170-2f2d5190638f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 35
      },
      {
        id: 4,
        name: 'Iced Tea Latte',
        imageUrl: 'https://images.unsplash.com/photo-1505985234602-75cfa9ad9de5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 25
      },
      {
        id: 5,
        name: 'Iced Tea Ginger',
        imageUrl: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        price: 18
      },
      {
        id: 6,
        name: 'Peach Tea',
        imageUrl: 'https://images.unsplash.com/photo-1585644156285-d7f4665407a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 14
      },
      {
        id: 7,
        name: 'Hot Chocolate',
        imageUrl: 'https://images.unsplash.com/photo-1512035986687-f3cc6aefba8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 18
      },
      {
        id: 8,
        name: 'Lemonades',
        imageUrl: 'https://images.unsplash.com/photo-1507281549113-040fcfef650e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 14
      },
      {
        id: 9,
        name: 'Detox Drinks',
        imageUrl: 'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 16
      }
    ]
  },
  merchandise: {
    id: 2,
    title: 'Merchandise',
    routeName: 'merchandise',
    items: [
      {
        id: 10,
        name: 'Cups',
        imageUrl: 'https://images.unsplash.com/photo-1513521773210-0cc22dfee8db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 220
      },
      {
        id: 11,
        name: 'Teas',
        imageUrl: 'https://images.unsplash.com/photo-1519095615130-d36e0fe3bf63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 280
      },
      {
        id: 12,
        name: 'Kettles',
        imageUrl: 'https://images.unsplash.com/photo-1487168791452-17942644e6f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 110
      },
      {
        id: 13,
        name: 'Green Tea',
        imageUrl: 'https://images.unsplash.com/photo-1530536306355-1bd7a4113d88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 160
      },
      {
        id: 14,
        name: 'Jars',
        imageUrl: 'https://images.unsplash.com/photo-1515094264130-1c21fc4c9dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 160
      },
      {
        id: 15,
        name: 'Coffee Makers',
        imageUrl: 'https://images.unsplash.com/photo-1491755276353-97642ec79167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 160
      },
      {
        id: 16,
        name: 'Filters',
        imageUrl: 'https://images.unsplash.com/photo-1519307608401-1a6a9083c4a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        price: 190
      },
      {
        id: 17,
        name: 'Coffee Beans',
        imageUrl: 'https://images.unsplash.com/photo-1544486867-c651bce0b9b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 200
      }
    ]
  },
  food: {
    id: 3,
    title: 'Food',
    routeName: 'food',
    items: [
      {
        id: 18,
        name: 'Donuts',
        imageUrl: 'https://images.unsplash.com/photo-1506224477000-07aa8a76be20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 125
      },
      {
        id: 19,
        name: 'Macaroons',
        imageUrl: 'https://images.unsplash.com/photo-1568926728897-5e20b503dc20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 90
      },
      {
        id: 20,
        name: 'Breads',
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 90
      },
      {
        id: 21,
        name: 'Breakfast Sandwiches',
        imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 165
      },
      {
        id: 22,
        name: 'Salads',
        imageUrl: 'https://images.unsplash.com/photo-1599020792689-9fde458e7e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 185
      }
    ]
  },
  coffee: {
    id: 4,
    title: 'Coffee',
    routeName: 'coffee',
    items: [
      {
        id: 23,
        name: 'Americano',
        imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        price: 25
      },
      {
        id: 24,
        name: 'Cappuccino',
        imageUrl: 'https://images.unsplash.com/photo-1517958911667-09c05f6cd698?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 20
      },
      {
        id: 25,
        name: 'Latte',
        imageUrl: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 80
      },
      {
        id: 26,
        name: 'Espresso',
        imageUrl: 'https://images.unsplash.com/photo-1583165278997-0250ea5d72e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 80
      },
      {
        id: 27,
        name: 'Cold Brew',
        imageUrl: 'https://images.unsplash.com/photo-1570470752239-78e3fe00c416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 45
      },
      {
        id: 28,
        name: 'Iced Latte',
        imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        price: 135
      },
      {
        id: 29,
        name: 'Iced Mocha',
        imageUrl: 'https://images.unsplash.com/photo-1520031607889-97ba0c7190ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        price: 20
      }
    ]
  },
  tea: {
    id: 5,
    title: 'Tea',
    routeName: 'tea',
    items: [
      {
        id: 30,
        name: 'Sencha',
        imageUrl: 'https://images.unsplash.com/photo-1536998003793-b13c28fae74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80',
        price: 325
      },
      {
        id: 31,
        name: 'Gyokuru',
        imageUrl: 'https://images.unsplash.com/photo-1536677813196-8fed27bcecdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 20
      },
      {
        id: 32,
        name: 'Tencha',
        imageUrl: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 25
      },
      {
        id: 33,
        name: 'Konacha',
        imageUrl: 'https://images.unsplash.com/photo-1504382103100-db7e92322d39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 25
      },
      {
        id: 34,
        name: 'Matcha',
        imageUrl: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 40
      },
      {
        id: 35,
        name: 'Shincha',
        imageUrl: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
