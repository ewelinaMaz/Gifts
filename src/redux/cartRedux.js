import axios from 'axios';
export const API_URL = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:8000/api';
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
const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');
const ADD_NOTES = createActionName('ADD_NOTES');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const SEND_ORDER = createActionName('SEND_ORDER');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const changeProductAmount = payload => ({ payload, type: CHANGE_AMOUNT });
export const addOrderNotes = payload => ({ payload, type: ADD_NOTES });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const sendOrder = payload => ({ payload, type: SEND_ORDER });

/* thunk creators */
export const newOrderRequest = data => {
  return async dispatch => {
    dispatch(fetchStarted());
    try {
      let res = await axios.post(
        `${API_URL}/order`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      dispatch(sendOrder(res.data));
    } catch (e) {
      dispatch(fetchError(e.message));
    }
  };
};

export const saveCartRequest = data => {
  return () => {
    localStorage.setItem('cart', JSON.stringify(data));
  };
};

export const loadCartRequest = () => {
  return dispatch => {
    let getSavedCart;
    localStorage.getItem('cart') ?
      getSavedCart = JSON.parse(localStorage.getItem('cart')) : getSavedCart = [];
    dispatch(fetchSuccess(getSavedCart));
  };
};

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
        gifts: action.payload ? action.payload : [],
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
        for (let item of gifts) {
          if (item._id === action.payload.gift._id) isProductInCart = true;
        }
        return {
          ...statePart,
          gifts: isProductInCart ? [...gifts] : [...gifts, { ...action.payload.gift, amount: action.payload.amount, value: action.payload.value }],
        };
      } else {
        return {
          ...statePart,
          gifts: [{ ...action.payload.gift, amount: action.payload.amount, value: action.payload.value }],
        };
      }
    }
    case CHANGE_AMOUNT: {
      return {
        ...statePart,
        gifts: statePart.gifts.map(gift => {
          if (gift._id === action.payload.id) return { ...gift, amount: action.payload.amount };
          else return gift;
        }),
      };
    }
    case ADD_NOTES: {
      return {
        ...statePart,
        gifts: statePart.gifts.map(gift => {
          if (gift._id === action.payload.id) return { ...gift, notes: action.payload.notes };
          else return gift;
        }),
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...statePart,
        gifts: statePart.gifts.filter(gift => gift._id !== action.payload._id),
      };
    }
    case SEND_ORDER: {
      return {
        ...statePart,
        gifts: [],
      };
    }
    default:
      return statePart;
  }
};
