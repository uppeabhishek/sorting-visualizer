import React, { FunctionComponent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { changeArraySize } from "../../actions/globals";

export const SizeSlider: FunctionComponent = () => {
    const arraySize = useSelector((state: RootState) => state.globals.arraySize);

    const dispatch = useDispatch();

    function changeArraySizeFunc(e: ChangeEvent<HTMLInputElement>) {
        dispatch(changeArraySize(parseInt(e.currentTarget.value, 10)));
    }

    return (
        <div>
            <input
                max="100"
                min="1"
                type="range"
                value={arraySize}
                onChange={changeArraySizeFunc}
            />
            <div>Change Array Size</div>
        </div>
    );
};
