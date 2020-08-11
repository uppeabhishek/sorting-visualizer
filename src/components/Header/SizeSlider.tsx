import React, { FunctionComponent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Slider } from "@material-ui/core";
import { RootState } from "../../reducers";
import { changeArraySize } from "../../actions/globals";

export const SizeSlider: FunctionComponent = () => {
    const arraySize = useSelector((state: RootState) => state.globals.arraySize);
    const isSorting = useSelector((state: RootState) => state.globals.sort);

    const dispatch = useDispatch();

    function changeArraySizeFunc(event: ChangeEvent<{}>, value: number | number[]) {
        if (typeof value === "number") {
            dispatch(changeArraySize(value));
        }
    }

    function getArraySize(value: number) {
        return value.toString();
    }

    return (
        <div>
            <Typography color="textPrimary" gutterBottom={true} id="arraySizeSlider">
                Array Size
            </Typography>
            <Slider
                aria-labelledby="arraySizeSlider"
                disabled={isSorting}
                getAriaValueText={getArraySize}
                marks={true}
                max={90}
                min={10}
                step={10}
                value={arraySize}
                valueLabelDisplay="off"
                onChange={changeArraySizeFunc}
            />
        </div>
    );
};
