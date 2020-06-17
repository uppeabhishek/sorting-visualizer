import {
    CHANGE_DEFAULT_ALGORITHM,
    GlobalState,
    GlobalTypes,
    CHANGE_SORTING_TYPE,
    CHANGE_ARRAY_SIZE,
    CHANGE_ANIMATION_SPEED,
    GENERATE_NEW_ARRAY
} from "../actions/globals/types";

const initialState: GlobalState = {
    algorithm: "Bubble Sort",
    animationSpeed: 10,
    arraySize: 10,
    generate: false,
    sortingType: "Randomize"
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
                arraySize: action.animationSpeed
            };
        }
        case CHANGE_SORTING_TYPE: {
            return {
                ...state,
                sortingType: action.sortingType
            };
        }
        case GENERATE_NEW_ARRAY: {
            return {
                ...state,
                generate: action.generate
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
