import axios from 'axios';

export const API_URL = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:8000/api';

/* selectors */
export const getAll = ({gifts}) => gifts.data;

export const getLoadingState = ({ gifts }) => gifts.loading;

export const getGiftsByCategory = ({ gifts }, id ) => {
  const categoryGifts = gifts.data.filter(gift => gift.category === id);
  return categoryGifts;
};

export const getGiftByOption = ({gifts}, id) => {
  const gift = gifts.data.filter(gift => gift.option === id);
  return gift.length ? gift[0] : { error: true };
};

export const getGiftsById = ({ gifts }) => gifts.opened;

/* action name creator */
const reducerName = 'gifts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_GIFTS_BY_ID = createActionName('FETCH_GIFTS_BY_ID');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchGifttById = payload => ({ payload, type: FETCH_GIFTS_BY_ID });

/* thunk creators */
export const fetchPublished = () => {
  return (dispatch, getState) => {
    try {
      const { gifts } = getState();
      if (!gifts.data.length || gifts.loading.active === false) {
        dispatch(fetchStarted());
        axios.get(`${API_URL}/gifts`).then((res) => {
          dispatch(fetchSuccess(res.data));
        });
      }
    } catch (err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

export const loadProductByIdRequest = id => {
  return async dispatch => {
    dispatch(fetchStarted());
    try {
      let res = await axios.get(`${API_URL}/gift/${id}`);
      dispatch(fetchGifttById(res.data));
    } catch (e) {
      dispatch(fetchError(e.message || true));
    }
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
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_GIFTS_BY_ID: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        opened: action.payload,
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
