export const initialState = {

  options: {
    data: [/*
      { id: 'Jar with macaron',
        option: 'chocolate-cherry flavour',
        image: 'https://cdn.pixabay.com/photo/2018/01/16/19/00/macaron-3086577_1280.jpg' },
      { id: 'Jar with macaron',
        option: 'vanilla-berry flavour',
        image: 'https://cdn.pixabay.com/photo/2017/03/12/03/16/macaron-2136370_1280.jpg' },
      { id: 'Jar with macaron',
        option: 'almond-orange flavour',
        image: 'https://cdn.pixabay.com/photo/2019/10/09/03/47/pink-4536379_1280.jpg' },
      { id: 'Jar with caramels',
        option: 'saltet caramel',
        image: 'https://i.postimg.cc/bJ4y98g0/caramels-2.jpg'},
      { id: 'Jar with caramels',
        option: 'pistache caramel',
        image: 'https://i.postimg.cc/x8PZT3Xk/caramels.jpg' },
      { id: 'Jar with caramels',
        option: 'vanilla caramel',
        image: 'https://i.postimg.cc/Hxg3c7Db/candy-3.jpg' },
      { id: 'Jar with chocolates',
        option: 'peanut',
        image: 'https://cdn.pixabay.com/photo/2016/10/13/11/44/chocolates-1737503_1280.jpg' },
      { id: 'Jar with chocolates',
        option: 'trufel',
        image: 'https://cdn.pixabay.com/photo/2015/03/26/23/09/cake-pops-693645_1280.jpg' },
      { id: 'Jar with chocolates',
        option: 'cherry',
        image: 'https://cdn.pixabay.com/photo/2017/11/20/16/59/praline-2966091_1280.jpg' },
      { id: 'Inspire',
        option: 'Promyczek',
        image: 'https://cdn.pixabay.com/photo/2014/08/17/16/33/travel-420011_1280.jpg' },
      { id: 'Inspire',
        option: 'Raj',
        image: 'https://cdn.pixabay.com/photo/2017/03/20/22/13/book-2160539_1280.png' },
      { id: 'Inspire',
        option: 'Neo City',
        image: 'https://cdn.pixabay.com/photo/2016/10/22/15/19/book-1760998_1280.jpg' },
      { id: 'Planet Care',
        option: 'Drzewo życia',
        image: 'https://cdn.pixabay.com/photo/2014/04/17/23/26/environmental-protection-326923_1280.jpg' },
      { id: 'Planet Care',
        option: 'Chatka',
        image: 'https://cdn.pixabay.com/photo/2019/02/09/11/03/globe-3984876_1280.jpg' },
      { id: 'Planet Care',
        option: 'Historia trzech planet',
        image: 'https://cdn.pixabay.com/photo/2016/09/13/17/33/book-1667828_1280.jpg' },
      { id: 'Value of life',
        option: 'Leśne pokusy',
        image: 'https://cdn.pixabay.com/photo/2017/08/06/15/20/room-2593422_1280.jpg' },
      { id: 'Value of life',
        option: 'Stara gitara',
        image: 'https://cdn.pixabay.com/photo/2017/08/07/20/21/still-2607441_960_720.jpg' },
      { id: 'Value of life',
        option: 'Wyprawa w nieznane',
        image: 'https://cdn.pixabay.com/photo/2017/06/27/13/54/books-2447393_1280.jpg' },
      { id: 'For young readers',
        option: 'Ziarenko prawdy',
        image: 'https://cdn.pixabay.com/photo/2017/08/07/15/18/boy-2604853__340.jpg' },
      { id: 'For young readers',
        option: 'Figielek',
        image: 'https://cdn.pixabay.com/photo/2014/11/15/15/11/take-532097_1280.jpg' },
      { id: 'For young readers',
        option: 'Dodo i smocze miasto',
        image: 'https://cdn.pixabay.com/photo/2017/10/18/11/14/books-2863724_1280.jpg' },
      { id: 'Natural soap',
        option: 'mango',
        image: 'https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_1280.jpg' },
      { id: 'Natural soap',
        option: 'lavender',
        image: 'https://cdn.pixabay.com/photo/2017/09/07/19/43/soap-2726387_1280.jpg' },
      { id: 'Natural soap',
        option: 'spring flower',
        image: 'https://cdn.pixabay.com/photo/2016/01/14/09/21/handmade-1139554_1280.jpg' },
      { id: 'Natural oils and creams',
        option: 'opuncia',
        image: 'https://cdn.pixabay.com/photo/2017/09/07/19/46/soap-2726394_1280.jpg' },
      { id: 'Natural oils and creams',
        option: 'lotus flower',
        image: 'https://cdn.pixabay.com/photo/2017/05/30/19/42/cosmetic-2357981_1280.jpg' },
      { id: 'Natural oils and creams',
        option: 'orange & cynamon',
        image: 'https://cdn.pixabay.com/photo/2019/06/09/20/20/oil-4262839_1280.jpg' },
      { id: 'Body scrub',
        option: 'lemon',
        image: 'https://cdn.pixabay.com/photo/2017/05/30/19/42/skincare-2357980_1280.jpg' },
      { id: 'Body scrub',
        option: 'rasberry & mint',
        image: 'https://cdn.pixabay.com/photo/2018/01/16/19/05/flower-3086596_1280.jpg' },
      { id: 'Body scrub',
        option: 'coffee',
        image: 'https://cdn.pixabay.com/photo/2018/11/15/02/41/essential-oil-3816410_1280.jpg' },*/
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  gifts: {
    data: [/*
      {
        _id: '1',
        name: 'candies jar',
        option: 'Jar with macaron',
        image: 'https://i.postimg.cc/fTvpdGnf/macaron-jar.jpg',
        description: 'Macarons are a butter-creamed filled cookie sandwich that  transport you to a cobbled street in Paris with one taste. They are magical, dainty, chic, stylish and delicious in equal measure.',
        price: 25,
        rate: 4,
        category: 'mood',
        productSelect: 'Select favourite flavour',
      },
      {
        _id: '2',
        name: 'candies jar',
        option: 'Jar with caramels',
        image: 'https://i.postimg.cc/T1fQYPwM/caramels-jar.jpg',
        description: 'SOFT, CREAMY, BUTTERY TEXTURE – Individually wrapped high quality caramel means a soft bite that doesn’t stick to your teeth.',
        price: 25,
        rate: 4,
        category: 'mood',
        productSelect: 'Select favourite flavour',
      },
      {
        _id: '3',
        name: 'candies jar',
        option: 'Jar with chocolates',
        image: 'https://i.postimg.cc/K8k7bTN3/chocolates-jar.jpg',
        description: 'The dark mouth melting chocolate with crackling hazelnuts under your teeth. leaves you with a irresistible taste of heaven smells sweeter then honey , tempting you to eat more and more!',
        price: 25,
        rate: 4,
        category: 'mood',
        productSelect: 'Select favourite flavour',
      },
      {
        _id: '4',
        name: 'A unique story gift to inspire your loved ones',
        option: 'Inspire',
        image: 'https://i.postimg.cc/PqNZsvdv/388226-PC4-CEW-583.jpg',
        description: 'Vulputate suspendisse arcu accumsan eu adipiscing quam vehicula dictumst a cras leo in cursus platea scelerisque nisi inceptos nam. Interdum a a nec ut scelerisque suspendisse cras aenean mollis a integer porta a a nisl.',
        price: 25,
        rate: 4,
        category: 'soul',
        productSelect: 'Select story option',
      },
      {
        _id: '5',
        name: 'Stories for those who do not care about our planet',
        option: 'Planet Care',
        image: 'https://i.postimg.cc/5NzRJDKm/planet.jpg',
        description: 'Conubia condimentum sociis gravida rutrum platea odio non commodo integer vestibulum maecenas condimentum ultricies a a. Aliquet rutrum a est consequat arcu a nostra a tortor a nibh nibh a laoreet facilisi.',
        price: 25,
        rate: 4,
        category: 'soul',
        productSelect: 'Select story option',
      },
      {
        _id: '6',
        name: 'Stories about love and wisdom',
        option: 'Value of life',
        image: 'https://i.postimg.cc/X79QmdXH/life.jpg',
        description: 'Ullamcorper suscipit porttitor condimentum cursus risus taciti curae suspendisse ad nullam parturient habitasse gravida vestibulum turpis dis est. Tristique sapien ipsum congue dictumst ante ac taci.',
        price: 25,
        rate: 4,
        category: 'soul',
        productSelect: 'Select story option',
      },
      {
        _id: '7',
        name: 'Magic stories with dedication',
        option: 'For young readers',
        image: 'https://i.postimg.cc/rmSpj2rh/2135.jpg',
        description: 'A leo malesuada aenean porta pretium iaculis dui quisque consectetur ipsum vestibulum vestibulum nisl nunc tincidunt.',
        price: 25,
        rate: 4,
        category: 'soul',
        productSelect: 'Select story option',
      },
      {
        _id: '8',
        name: 'SPA',
        option: 'Natural soap',
        image: 'https://i.postimg.cc/kXxLKB3S/3728.jpg',
        description: 'A cras suspendisse est a potenti sagittis lobortis parturient porta est erat nec facilisis integer inceptos torquent hendrerit.',
        price: 25,
        rate: 4,
        category: 'body',
        productSelect: 'Select fragrance',
      },
      {
        _id: '9',
        name: 'SPA',
        option: 'Natural oils and creams',
        image: 'https://i.postimg.cc/5thRXC9D/spa.jpg',
        description: 'A a a conubia auctor ante mauris hac ullamcorper potenti sed fames commodo condimentum orci sit magna urna feugiat vestibulum in pharetra nibh parturient.',
        price: 25,
        rate: 4,
        category: 'body',
        productSelect: 'Select fragrance',
      },
      {
        _id: '10',
        name: 'SPA',
        option: 'Body scrub',
        image: 'https://i.postimg.cc/8PWk80n6/8858.jpg',
        description: 'Rutrum at consectetur ullamcorper vestibulum consectetur vivamus adipiscing tincidunt eu lacus a dis suspendisse tristique habitant fermentum metus ultricies magnis enim curae nascetur.',
        price: 25,
        rate: 4,
        category: 'body',
        productSelect: 'Select fragrance',
      },*/
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    gifts: [],
  },
};
