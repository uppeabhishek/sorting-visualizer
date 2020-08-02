import React, { FunctionComponent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeArrayType } from "../../actions/globals";
import { RootState } from "../../reducers";

export const ArrayTypes: FunctionComponent = () => {
    const types = ["Randomize", "Almost Sorted", "Increasing", "Decreasing"];

    const dispatch = useDispatch();

    const arrayType = useSelector((state: RootState) => state.globals.arrayType);
    const isSorting = useSelector((state: RootState) => state.globals.sort);

    function changeArrayTypeFunc(e: ChangeEvent<HTMLSelectElement>) {
        dispatch(changeArrayType(e.currentTarget.value));
    }

    return (
        <div>
            <div>Select Array Type</div>
            <select
                key={arrayType}
                className={isSorting ? "disabled" : ""}
                value={arrayType}
                onChange={changeArrayTypeFunc}
            >
                {types.map((type) => (
                    <option key={type}>{type}</option>
                ))}
            </select>
        </div>
    );
};
