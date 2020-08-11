import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { sortAlgorithm } from "../../actions/globals";
import { RootState } from "../../reducers";

export const SortButton: FunctionComponent = () => {
    const dispatch = useDispatch();

    const isSorting = useSelector((state: RootState) => state.globals.sort);

    return (
        <Button
            color="primary"
            disabled={isSorting}
            variant="contained"
            onClick={() => dispatch(sortAlgorithm(true))}
        >
            Sort
        </Button>
    );
};
