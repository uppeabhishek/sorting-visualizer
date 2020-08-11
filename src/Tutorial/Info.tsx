import React, { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";
import algorithmDropDown from "../../assets/AlgorithmDropDown.png";
import mazeDropDown from "../../assets/MazeDropDown.png";
import Download from "../../assets/Download.png";

const Info: FunctionComponent<{ activeStep: number }> = ({ activeStep }) => {
    const pages = {
        0: (
            <div>
                <Typography variant="h6">
                    This tutorial will walk through the features of Sorting Visualizer.
                </Typography>
                <br />
                <Typography>
                    If you want to dive into the application directly. Feel free to Skip this
                    tutorial by closing it.
                </Typography>
            </div>
        ),
        1: (
            <div>
                <Typography variant="h6">Sorting Algorithm</Typography>
                <br />
                <div>I have implemented the below sorting algorithms.</div>
                <ul>
                    <li>Merge Sort</li>
                    <li>Quick Sort</li>
                    <li>Bubble Sort</li>
                    <li>Insertion Sort</li>
                    <li>Selection Sort</li>
                </ul>

                <div>
                    To choose an algorithm, pick an algorithm from "Algorithms" drop down menu.
                </div>
                <div className="center-items" style={{ marginTop: 10 }}>
                    {/* <img src={algorithmDropDown} /> */}
                </div>
            </div>
        ),
        2: (
            <div>
                <Typography variant="h6">Array Type</Typography>
                <br />
                <div>You can select your initial state of array from the following options</div>
                <ul>
                    <li>Random</li>
                    <li>Increasing</li>
                    <li>Decreasing</li>
                    <li>Almost Sorted</li>
                </ul>

                <div>
                    To choose an intial state of array, pick an array type from <b>Array Type</b> drop
                    down menu.
                </div>
                <div className="center-items" style={{ marginTop: 10 }}>
                    {/* <img src={algorithmDropDown} /> */}
                </div>
            </div>
        ),
        3: (
            <div>
                <Typography variant="h6">Array Size</Typography>
                <br />

                <div>To change array size use the <b>Array Size</b> Slider.</div>
                <div className="center-items" style={{ marginTop: 10 }}>
                    {/* <img src={algorithmDropDown} /> */}
                </div>
            </div>
        ),
        4: (
            <div>
                <Typography variant="h6">Animation Speed</Typography>
                <br />

                <div>To change animation speed use the <b>Animation Speed</b> Slider.</div>
                <div className="center-items" style={{ marginTop: 10 }}>
                    {/* <img src={algorithmDropDown} /> */}
                </div>
            </div>
        ),
        5: (
            <div>
                <Typography variant="h6">Visualize</Typography>
                <br />

                <div>To Visualize the algorithm. Click <b>Sort</b></div>
                <div className="center-items" style={{ marginTop: 10 }}>
                    {/* <img src={algorithmDropDown} /> */}
                </div>
                <Typography variant="h6">Enjoy the visualization tool :)</Typography>
            </div>
        )
    };

    // @ts-ignore
    return pages[activeStep];
};

export default Info;
