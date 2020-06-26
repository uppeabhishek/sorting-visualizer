import {
    CHANGE_DEFAULT_ALGORITHM,
    GlobalState,
    GlobalTypes,
    CHANGE_ARRAY_TYPE,
    CHANGE_ARRAY_SIZE,
    CHANGE_ANIMATION_SPEED,
    SORT_ALGORITHM
} from "../actions/globals/types";

const initialState: GlobalState = {
    algorithm: "Bubble Sort",
    animationSpeed: 50,
    arraySize: 50,
    arrayType: "Randomize",
    sort: false
};

const globals = (state = initialState, action: GlobalTypes): GlobalState => {
    switch (action.type) {
        case CHANGE_DEFAULT_ALGORITHM: {
            return {
                ...state,
                algorithm: action.algorithm
            };
        }
        case CHANGE_ARRAY_SIZE: {
            return {
                ...state,
                arraySize: action.arraySize
            };
        }
        case CHANGE_ANIMATION_SPEED: {
            return {
                ...state,
                animationSpeed: action.animationSpeed
            };
        }
        case CHANGE_ARRAY_TYPE: {
            return {
                ...state,
                arrayType: action.arrayType
            };
        }
        case SORT_ALGORITHM: {
            return {
                ...state,
                sort: action.sort
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
