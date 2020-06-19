export const CHANGE_DEFAULT_ALGORITHM = "CHANGE_DEFAULT_ALGORITHM";
export const CHANGE_ARRAY_SIZE = "CHANGE_ARRAY_SIZE";
export const CHANGE_ANIMATION_SPEED = "CHANGE_ANIMATION_SPEED";
export const CHANGE_ARRAY_TYPE = "CHANGE_ARRAY_TYPE";

export type AlgorithmType = string;
export type ArraySize = number;
export type AnimationSpeed = number;
export type ArrayType = string;

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
export interface ChangeArrayType {
    type: typeof CHANGE_ARRAY_TYPE;
    arrayType: ArrayType;
}

export type GlobalTypes =
    | ChangeDefaultAlgorithm
    | ChangeArraySize
    | ChangeAnimationSpeed
    | ChangeArrayType;

export interface GlobalState {
    algorithm: AlgorithmType;
    arraySize: ArraySize;
    animationSpeed: AnimationSpeed;
    arrayType: ArrayType;
}
