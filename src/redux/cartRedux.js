
/* selectors */
export const getCart = ({cart}) => cart;
export const getProductFromCart = ({ cart }, giftId) => cart.gifts.filter(gift => gift._id === giftId)[0];
export const getTotalPrice = ({ cart }) => cart.gifts.reduce((total, gift) => gift.price * gift.amount + total, 0);


/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_TO_CART = createActionName('ADD_TO_CART');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_TO_CART: {
      const { gifts } = statePart;
      if (gifts.length) {
        let isProductInCart = false;
        for (let gift of gifts) {
          if (gift._id === action.payload.gift._id) isProductInCart = true;
        }
        return {
          ...statePart,
          gifts: isProductInCart ? [...gifts] : [...gifts, { ...action.payload.gift, amount: action.payload.amount }],
        };
      } else {
        return {
          ...statePart,
          gifts: [{ ...action.payload.gift, amount: action.payload.amount }],
        };
      }
    }
    default:
      return statePart;
  }
};
