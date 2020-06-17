import { CHANGE_DEFAULT_ALGORITHM, AlgorithmType, GlobalTypes } from "./types";

export const changeDefaultAlgorithm = (algorithm: AlgorithmType): GlobalTypes => ({
    algorithm,
    type: CHANGE_DEFAULT_ALGORITHM
});
