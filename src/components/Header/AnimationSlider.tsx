import React, { FunctionComponent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider, Typography } from "@material-ui/core";
import { RootState } from "../../reducers";
import { changeAnimationSpeed } from "../../actions/globals";

export const AnimationSlider: FunctionComponent = () => {
    const dispatch = useDispatch();

    const animationSpeed = useSelector((state: RootState) => state.globals.animationSpeed);

    function changeAnimationSpeedFunc(event: ChangeEvent<{}>, value: number | number[]) {
        if (typeof value === "number") {
            dispatch(changeAnimationSpeed(value));
        }
    }

    function getAnimationSpeed(value: number) {
        return value.toString();
    }

    const isSorting = useSelector((state: RootState) => state.globals.sort);

    return (
        <div>
            <Typography color="inherit" gutterBottom={true} id="animationSpeedSlider">
                Animation Speed
            </Typography>
            <Slider
                color="primary"
                aria-labelledby="animationSpeedSliderr"
                disabled={isSorting}
                getAriaValueText={getAnimationSpeed}
                marks={true}
                max={90}
                min={10}
                step={10}
                value={animationSpeed}
                valueLabelDisplay="off"
                onChange={changeAnimationSpeedFunc}
            />
        </div>
    );
};
