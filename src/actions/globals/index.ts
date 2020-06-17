import {
    CHANGE_DEFAULT_ALGORITHM,
    AlgorithmType,
    GlobalTypes,
    ArraySize,
    CHANGE_ARRAY_SIZE,
    AnimationSpeed,
    SortingType,
    CHANGE_ANIMATION_SPEED,
    CHANGE_SORTING_TYPE,
    GENERATE_NEW_ARRAY,
    GenerateNewArrayType
} from "./types";

export const changeDefaultAlgorithm = (algorithm: AlgorithmType): GlobalTypes => ({
    algorithm,
    type: CHANGE_DEFAULT_ALGORITHM
});

export const changeArraySize = (arraySize: ArraySize): GlobalTypes => ({
    arraySize,
    type: CHANGE_ARRAY_SIZE
});

export const changeAnimationSpeed = (animationSpeed: AnimationSpeed): GlobalTypes => ({
    animationSpeed,
    type: CHANGE_ANIMATION_SPEED
});

export const changeSortingType = (sortingType: SortingType): GlobalTypes => ({
    sortingType,
    type: CHANGE_SORTING_TYPE
});

export const generateNewArray = (generate: GenerateNewArrayType): GlobalTypes => ({
    generate,
    type: GENERATE_NEW_ARRAY
});
