import {
    timer,
    arrayItemOriginalColor,
    arrayItemNotEqualColor,
    arrayItemCurrentPositionColor,
    arrayItemEqualColor,
    swapSVGNodes,
    arrayItemSortedColor
} from "../commonUtilities";

export async function MergeSort(
    array: number[],
    svgChildren: HTMLCollectionOf<SVGGElement>,
    animationSpeed: number
) {
    const len = array.length;

    function swapNodes(i: number, j: number) {
        swapSVGNodes(svgChildren[i], svgChildren[j]);

        // if (i<j) {
        //     console.log(i, j, array);
        //     if (array[i] > array[j]) {
        //         console.log("gone");
        //         swapSVGNodes(svgChildren[i], svgChildren[j]);
        //     }
        // }
        // else {
        //     console.log(i, j, array);
        //     if (array[i] < array[j]) {
        //         console.log("gone");
        //         swapSVGNodes(svgChildren[j], svgChildren[i]);
        //     }
        // }
    }

    async function MergeHelper(array: Array<number>, low: number, mid: number, high: number) {
        const firstSize = mid - low + 1;
        const secondSize = high - mid;

        const firstArray = new Array(firstSize);
        const secondArray = new Array(secondSize);

        const firstArrayPosition = new Array(firstSize);
        const secondArrayPosition = new Array(secondSize);

        for (let i = 0; i < firstSize; i++) {
            firstArray[i] = array[low + i];
            firstArrayPosition[i] = low + i;
        }

        for (let i = 0; i < secondSize; i++) {
            secondArray[i] = array[mid + i + 1];
            secondArrayPosition[i] = mid + i + 1;
        }

        let i = 0;
        let j = 0;
        let k = low;

        while (i < firstSize && j < secondSize) {
            const first = svgChildren[i].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;

            const second = svgChildren[j].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;

            // const firstRect = first[0];
            // const secondRect = second[0];

            // // Indicate these cells are currently being sorted
            // firstRect.style.fill = arrayItemCurrentPositionColor;
            // secondRect.style.fill = arrayItemCurrentPositionColor;

            // await timer(animationSpeed);

            if (firstArray[i] <= secondArray[j]) {
                // Indicate these cells are currently being sorted
                // firstRect.style.fill = arrayItemNotEqualColor;
                // secondRect.style.fill = arrayItemNotEqualColor;

                // await timer(animationSpeed);

                // swapSVGNodes(svgChildren[i], svgChildren[k]);

                swapNodes(k, firstArrayPosition[i]);

                array[k++] = firstArray[i];

                console.log(array);

                i += 1;
            } else {
                // Indicate these cells are currently being sorted
                // firstRect.style.fill = arrayItemEqualColor;
                // secondRect.style.fill = arrayItemEqualColor;

                // await timer(animationSpeed);

                swapNodes(k, secondArrayPosition[j]);

                array[k++] = secondArray[j];

                console.log(array);

                j += 1;
            }
        }

        while (i < firstSize) {
            // const first = svgChildren[i].children as HTMLCollectionOf<
            //     SVGRectElement | SVGTextElement
            // >;
            // const firstRect = first[0];

            // firstRect.style.fill = arrayItemEqualColor;

            // await timer(animationSpeed);

            swapNodes(k, firstArrayPosition[i]);

            array[k++] = firstArray[i];

            console.log(array);

            i += 1;
        }

        while (j < secondSize) {
            // const first = svgChildren[j].children as HTMLCollectionOf<
            //     SVGRectElement | SVGTextElement
            // >;
            // const firstRect = first[0];

            // firstRect.style.fill = arrayItemEqualColor;

            // await timer(animationSpeed);

            swapNodes(k, secondArrayPosition[j]);

            array[k++] = secondArray[j];

            console.log(array);

            j += 1;
        }
    }

    async function MergeSortHelper(array: Array<number>, low: number, high: number) {
        if (low >= high) {
            return;
        }
        const mid = Math.floor(low + (high - low) / 2);

        await MergeSortHelper(array, low, mid);
        await MergeSortHelper(array, mid + 1, high);
        await MergeHelper(array, low, mid, high);
    }

    async function sort() {
        await MergeSortHelper(array, 0, len - 1);
    }

    function func() {
        return sort()
            .then(() => {
                return true;
            })
            .catch((err) => err);
    }

    return func();
}
