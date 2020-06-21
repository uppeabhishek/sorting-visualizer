import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { sortAlgorithm } from "../../actions/globals";

export const SortButton: FunctionComponent = () => {
    const dispatch = useDispatch();

    return (
        <button type="button" onClick={() => dispatch(sortAlgorithm(true))}>Sort</button>
    );          
};
