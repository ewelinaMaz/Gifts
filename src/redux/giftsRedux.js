/* selectors */
export const getAll = ({gifts}) => gifts.data;

export const getGiftsByCategory = ({ gifts }, id ) => {
  const categoryGifts = gifts.data.filter(gift => gift.category === id);
  console.log(categoryGifts);
  return categoryGifts;
};

export const getGiftByOption = ({gifts}, id) => {
  const gift = gifts.data.filter(gift => gift.option === id);
  return gift.length ? gift[0] : { error: true };
};

/* action name creator */
const reducerName = 'gifts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

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
    default:
      return statePart;
  }
};
