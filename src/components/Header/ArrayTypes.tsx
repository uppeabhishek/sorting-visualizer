import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem, Select, Typography } from "@material-ui/core";
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
            <Typography id="select" color="inherit">
                Array Type
            </Typography>
            <Select
                color="primary"
                disabled={isSorting}
                id="select"
                labelId="select"
                value={arrayType}
                onChange={handleChange}
            >
                {types.map((type) => (
                    <MenuItem value={type} key={type}>
                        {type}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};
