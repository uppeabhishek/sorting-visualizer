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

    const isSorting = useSelector((state: RootState) => state.globals.sort);

    return (
        <div className={isSorting ? "disabled d-flex flex-column justify-center align-center" : "d-flex flex-column justify-center align-center"}>
            <div className="d-flex justify-center align-center">
                <div>Slow</div>
                <input
                    style={{cursor: "pointer"}}
                    max="100"
                    min="10"
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
