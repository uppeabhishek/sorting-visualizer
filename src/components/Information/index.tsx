import React, { FunctionComponent } from "react";
import { arrayItemCurrentPositionColor, arrayItemNotEqualColor, arrayItemEqualColor, arrayItemSortedColor } from '../../commonUtilities';

export const Information: FunctionComponent = () => {
    const Bar: FunctionComponent<{color: string}> = ({color}) => {
        return (
            <div style={{backgroundColor: color, width: "100px", height: "20px"}} />
        )
    }

    return (
        <div className="information">
            <div className="item">
                <div>
                    Current Comparision
                </div>
                <Bar color={arrayItemCurrentPositionColor} />
            </div>
            <div className="item">
                <div>
                    Incorrect Position
                </div>
                <Bar color={arrayItemNotEqualColor} />
            </div>
            <div className="item">
                <div>
                    Correct Position
                </div>
                <Bar color={arrayItemEqualColor} />
            </div>
            <div className="item">
                <div>
                    Sorted
                </div>
                <Bar color={arrayItemSortedColor} />
            </div>
        </div>
    )
}