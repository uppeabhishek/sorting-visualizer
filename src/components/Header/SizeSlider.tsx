import React, { FunctionComponent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { changeArraySize } from "../../actions/globals";

export const SizeSlider: FunctionComponent = () => {
    const arraySize = useSelector((state: RootState) => state.globals.arraySize);
    const isSorting = useSelector((state: RootState) => state.globals.sort);

    const dispatch = useDispatch();

    function changeArraySizeFunc(e: ChangeEvent<HTMLInputElement>) {
        dispatch(changeArraySize(parseInt(e.currentTarget.value, 10)));
    }

    return (
        <div>
            <div>Change Array Size</div>
            <input
                className={isSorting ? "disabled" : ""}
                max="100"
                min="1"
                style={{ cursor: "pointer" }}
                type="range"
                value={arraySize}
                onChange={changeArraySizeFunc}
            />
        </div>
    );
};
