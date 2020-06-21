import React, { FunctionComponent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { changeAnimationSpeed } from "../../actions/globals";

export const AnimationSlider: FunctionComponent = () => {
    const dispatch = useDispatch();

    const animationSpeed = useSelector((state: RootState) => state.globals.animationSpeed);

    function changeAnimationSpeedFunc(e: ChangeEvent<HTMLInputElement>) {
        dispatch(changeAnimationSpeed(parseInt(e.currentTarget.value, 10)));
    }

    return (
        <div className="d-flex flex-column justify-center align-center">
            <div className="d-flex justify-center align-center">
                <div>Slow</div>
                <input
                    max="100"
                    min="1"
                    type="range"
                    value={animationSpeed}
                    onChange={changeAnimationSpeedFunc}
                />
                <div>Fast</div>
            </div>
            <div>Animation Speed</div>
        </div>
    );
};
