import {
    CHANGE_DEFAULT_ALGORITHM,
    AlgorithmType,
    GlobalTypes,
    ArraySize,
    CHANGE_ARRAY_SIZE,
    AnimationSpeed,
    ArrayType,
    CHANGE_ANIMATION_SPEED,
    CHANGE_ARRAY_TYPE,
    SortAlgorithm,
    SORT_ALGORITHM
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

export const changeArrayType = (arrayType: ArrayType): GlobalTypes => ({
    arrayType,
    type: CHANGE_ARRAY_TYPE
});

export const sortAlgorithm = (sort: SortAlgorithm): GlobalTypes => ({
    sort,
    type: SORT_ALGORITHM
});
