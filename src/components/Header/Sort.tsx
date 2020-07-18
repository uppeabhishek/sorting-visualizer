import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortAlgorithm } from "../../actions/globals";
import { RootState } from "../../reducers";

export const SortButton: FunctionComponent = () => {
    const dispatch = useDispatch();

    const isSorting = useSelector((state: RootState) => state.globals.sort);

    return (
        <button type="button" className={isSorting?"disabled":''} onClick={() => dispatch(sortAlgorithm(true))}>
            Sort
        </button>
    );
};
