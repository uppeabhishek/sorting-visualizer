import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortAlgorithm } from "../../actions/globals";
import { RootState } from "../../reducers";

export const SortButton: FunctionComponent = () => {
    const dispatch = useDispatch();

    const isSorting = useSelector((state: RootState) => state.globals.sort);

    return (
        <button
            className={isSorting ? "disabled" : ""}
            type="button"
            onClick={() => dispatch(sortAlgorithm(true))}
        >
            Sort
        </button>
    );
};
