import { CHANGE_DEFAULT_ALGORITHM, GlobalState, GlobalTypes } from "../actions/globals/types";

const initialState: GlobalState = {
    algorithm: "Bubble Sort"
};

const globals = (state = initialState, action: GlobalTypes): GlobalState => {
    switch (action.type) {
        case CHANGE_DEFAULT_ALGORITHM: {
            return {
                ...state,
                algorithm: action.algorithm
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
};

export default globals;
