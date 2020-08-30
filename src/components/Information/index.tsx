import React, { FunctionComponent } from "react";
import {
    arrayItemCurrentPositionColor,
    arrayItemNotEqualColor,
    arrayItemEqualColor,
    arrayItemSortedColor
} from "../../commonUtilities";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

export const Information: FunctionComponent = () => {
    const Bar: FunctionComponent<{ color: string }> = ({ color }) => (
        <div style={{ backgroundColor: color, width: "100px", height: "20px" }} />
    );

    const defaultAlgorithm = useSelector((state: RootState) => state.globals.algorithm);

    const data = {
        "Quick Sort": (
            <div className="sorting-algorithm-info">
                <div className="sorting-fact">
                    <q>
                        <i>
                            Quicksort is an efficient sorting algorithm. It is still a commonly used
                            algorithm for sorting. When implemented well, it can be about two or
                            three times faster than its main competitor merge sort.
                        </i>
                    </q>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Time Complexity</th>
                            <th>Space Complexity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Worst Case</td>
                            <td>O(N^2)</td>
                            <td>O(NlogN)</td>
                        </tr>
                        <tr>
                            <td>Average Case</td>
                            <td>O(NlogN)</td>
                            <td>O(NlogN)</td>
                        </tr>
                        <tr>
                            <td>Best Case</td>
                            <td>O(NlogN)</td>
                            <td>O(NlogN)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ),
        "Bubble Sort": (
            <div className="sorting-algorithm-info">
                <div className="sorting-fact">
                    <q>
                        <i>
                            Simple sorting algorithm that repeatedly steps through the list,
                            compares adjacent elements and swaps them if they are in the wrong
                            order. The pass through the list is repeated until the list is sorted.
                        </i>
                    </q>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Time Complexity</th>
                            <th>Space Complexity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Worst Case</td>
                            <td>O(N^2)</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Average Case</td>
                            <td>O(N^2)</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Best Case</td>
                            <td>O(N)</td>
                            <td>O(1)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ),
        "Selection Sort": (
            <div className="sorting-algorithm-info">
                <div className="sorting-fact">
                    <q>
                        <i>
                            It is an in-place comparison sorting algorithm. It has an O(n²) time
                            complexity, which makes it inefficient on large lists, and generally
                            performs worse than the similar insertion sort.
                        </i>
                    </q>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Time Complexity</th>
                            <th>Space Complexity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Worst Case</td>
                            <td>O(N^2)</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Average Case</td>
                            <td>O(N^2)</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Best Case</td>
                            <td>O(N^2)</td>
                            <td>O(1)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ),
        "Insertion Sort": (
            <div className="sorting-algorithm-info">
                <div className="sorting-fact">
                    <q>
                        <i>
                            Insertion sort is a simple sorting algorithm that builds the final
                            sorted array one item at a time. It is much less efficient on large
                            lists than more advanced algorithms such as quicksort, heapsort, or
                            merge sort.
                        </i>
                    </q>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Time Complexity</th>
                            <th>Space Complexity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Worst Case</td>
                            <td>O(N)</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Average Case</td>
                            <td>O(N^2)</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Best Case</td>
                            <td>O(N^2)</td>
                            <td>O(1)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ),
        "Merge Sort": (
            <div className="sorting-algorithm-info">
                <div className="sorting-fact">
                    <q>
                        <i>
                            Merge sort is an efficient, general-purpose, comparison-based sorting
                            algorithm. Most implementations produce a stable sort, which means that
                            the order of equal elements is the same in the input and output. Merge
                            sort is a divide and conquer algorithm that was invented by John von
                            Neumann in 1945
                        </i>
                    </q>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Time Complexity</th>
                            <th>Space Complexity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Worst Case</td>
                            <td>O(NlogN)</td>
                            <td>O(N)</td>
                        </tr>
                        <tr>
                            <td>Average Case</td>
                            <td>O(NlogN)</td>
                            <td>O(N)</td>
                        </tr>
                        <tr>
                            <td>Best Case</td>
                            <td>O(NlogN)</td>
                            <td>O(N)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };

    const getData = () => {
        // @ts-ignore
        return data[defaultAlgorithm];
    };
    return (
        <div className="information">
            <div className="colors">
                <div className="item">
                    <div>Current Comparision</div>
                    <Bar color={arrayItemCurrentPositionColor} />
                </div>
                <div className="item">
                    <div>Incorrect Position</div>
                    <Bar color={arrayItemNotEqualColor} />
                </div>
                <div className="item">
                    <div>Correct Position</div>
                    <Bar color={arrayItemEqualColor} />
                </div>
                <div className="item">
                    <div>Sorted</div>
                    <Bar color={arrayItemSortedColor} />
                </div>
            </div>

            <div>{getData()}</div>
        </div>
    );
};
