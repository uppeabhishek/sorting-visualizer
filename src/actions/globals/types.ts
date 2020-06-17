export const CHANGE_DEFAULT_ALGORITHM = "CHANGE_DEFAULT_ALGORITHM";

export type AlgorithmType = string;

export interface ChangeDefaultAlgorithm {
    type: typeof CHANGE_DEFAULT_ALGORITHM;
    algorithm: AlgorithmType;
}

export type GlobalTypes = ChangeDefaultAlgorithm;

export interface GlobalState {
    algorithm: AlgorithmType;
}
