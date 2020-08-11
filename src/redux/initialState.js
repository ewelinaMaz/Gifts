export const initialState = {
  cathegories: [
    { id: 'soul', name: 'Soul' },
    { id: 'mood', name: 'Mood' },
    { id: 'body', name: 'Body' },
  ],
  gifts: {
    data: [
      {
        _id: '1',
        name: 'candies jar',
        image: 'https://pl.freepik.com/premium-wektory/pyszne-macarons-zestaw-na-bialym-tle-kolekcja-kolorowych-macarons-slodki-kolor-ciasta-obiad-przerwa-recznie-rysowane-ilustracji_8253068.htm',
        description: '',
        price: 25,
        rate: 4,
        cathegory: 'Mood',
        options: [
          { option1: '' },
          { option2: '' },
          { option3: '' },
        ],
      },
      {
        _id: '2',
        name: 'candies jar',
        image: 'https://pl.freepik.com/darmowe-wektory/szkic-candy-jar_2871129.htm',
        description: '',
        price: 25,
        rate: 4,
        cathegory: 'Mood',
        options: [
          { option1: '' },
          { option2: '' },
          { option3: '' },
        ],
      },
      {
        _id: '2',
        name: 'candies jar',
        image: 'https://pl.freepik.com/darmowe-zdjecie/bialy-marshmallow-w-probowce-z-pusta-etykieta-wokol-korka_3421076.htm',
        description: '',
        price: 25,
        rate: 4,
        cathegory: 'Mood',
        options: [
          { option1: '' },
          { option2: '' },
          { option3: '' },
        ],
      },

    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
