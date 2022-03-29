import actions from './actions';

const initialState = {
};

export default function weatherInfo(state = initialState, action) {
    switch (action.type) {
        case actions.LOAD_DAILY_FORECAST:
            return action.payload
        default:
            return state;
    }
}

