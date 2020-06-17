export const CHANGE_DEFAULT_ALGORITHM = "CHANGE_DEFAULT_ALGORITHM";
export const CHANGE_ARRAY_SIZE = "CHANGE_ARRAY_SIZE";
export const CHANGE_ANIMATION_SPEED = "CHANGE_ANIMATION_SPEED";
export const CHANGE_SORTING_TYPE = "CHANGE_SORTING_TYPE";
export const GENERATE_NEW_ARRAY = "GENERATE_NEW_ARRAY";

export type AlgorithmType = string;
export type ArraySize = number;
export type AnimationSpeed = number;
export type SortingType = string;
export type GenerateNewArrayType = boolean;

export interface ChangeDefaultAlgorithm {
    type: typeof CHANGE_DEFAULT_ALGORITHM;
    algorithm: AlgorithmType;
}
export interface ChangeArraySize {
    type: typeof CHANGE_ARRAY_SIZE;
    arraySize: ArraySize;
}
export interface ChangeAnimationSpeed {
    type: typeof CHANGE_ANIMATION_SPEED;
    animationSpeed: AnimationSpeed;
}
export interface ChangeSortingType {
    type: typeof CHANGE_SORTING_TYPE;
    sortingType: SortingType;
}
export interface GenerateNewArray {
    type: typeof GENERATE_NEW_ARRAY;
    generate: GenerateNewArrayType;
}

export type GlobalTypes =
    | ChangeDefaultAlgorithm
    | ChangeArraySize
    | ChangeAnimationSpeed
    | ChangeSortingType
    | GenerateNewArray;

export interface GlobalState {
    algorithm: AlgorithmType;
    arraySize: ArraySize;
    animationSpeed: AnimationSpeed;
    sortingType: SortingType;
    generate: GenerateNewArrayType;
}
