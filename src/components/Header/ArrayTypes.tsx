import React, { FunctionComponent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import { MenuItem, Select } from "@material-ui/core";
import { changeArrayType } from "../../actions/globals";
import { RootState } from "../../reducers";

export const ArrayTypes: FunctionComponent = () => {
    const types = ["Randomize", "Almost Sorted", "Increasing", "Decreasing"];

    const dispatch = useDispatch();

    const arrayType = useSelector((state: RootState) => state.globals.arrayType);
    const isSorting = useSelector((state: RootState) => state.globals.sort);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(changeArrayType(event.target.value as string));
    };

    return (
        <div>
            <InputLabel id="select">Array Type</InputLabel>
            <Select
                disabled={isSorting}
                id="select"
                labelId="select"
                value={arrayType}
                onChange={handleChange}
            >
                {types.map((type) => (
                    <MenuItem value={type}>{type}</MenuItem>
                ))}
            </Select>
        </div>
    );
};
