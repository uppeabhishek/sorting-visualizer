import React, { FunctionComponent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { pauseExecution } from "../../actions/globals";

export const Controls: FunctionComponent = () => {

    const isSorting = useSelector((state: RootState) => state.globals.sort);

    const pause = useSelector((state: RootState) => state.globals.pause);

    const dispatch = useDispatch();

    return (
        <div className="controls">
            <button type="button" className={isSorting ? "" :"disabled"} onClick={() => dispatch(pauseExecution(!pause))}>
                { !pause ? "Pause" : "Play" }
            </button>
        </div>
    )
}