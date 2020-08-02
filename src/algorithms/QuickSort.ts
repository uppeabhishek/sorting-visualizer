import {
    timer,
    arrayItemOriginalColor,
    arrayItemNotEqualColor,
    arrayItemCurrentPositionColor,
    arrayItemEqualColor,
    swapSVGNodes,
    fillColor
} from "../commonUtilities";

export async function QuickSort(
    array: number[],
    svgChildren: HTMLCollectionOf<SVGGElement>,
    animationSpeed: number
) {
    const len = array.length;

    async function ParitionHelper(array: number[], low: number, high: number) {
        const pivotIndex = high;

        let currentIndex = low;

        fillColor(svgChildren, pivotIndex, arrayItemCurrentPositionColor);

        for (let i = low; i < high; i++) {
            fillColor(svgChildren, i, arrayItemCurrentPositionColor);
            fillColor(svgChildren, currentIndex, arrayItemCurrentPositionColor);

            await timer(animationSpeed);

            if (array[i] < array[pivotIndex]) {
                fillColor(svgChildren, i, arrayItemNotEqualColor);
                fillColor(svgChildren, currentIndex, arrayItemNotEqualColor);

                await timer(animationSpeed);

                swapSVGNodes(svgChildren[currentIndex], svgChildren[i]);

                [array[i], array[currentIndex]] = [array[currentIndex], array[i]];

                fillColor(svgChildren, i, arrayItemOriginalColor);
                fillColor(svgChildren, currentIndex, arrayItemOriginalColor);

                await timer(animationSpeed);

                currentIndex++;
            } else {
                fillColor(svgChildren, i, arrayItemEqualColor);
                fillColor(svgChildren, currentIndex, arrayItemEqualColor);

                await timer(animationSpeed);

                fillColor(svgChildren, i, arrayItemOriginalColor);
                fillColor(svgChildren, currentIndex, arrayItemOriginalColor);

                await timer(animationSpeed);
            }
            await timer(animationSpeed);
        }

        fillColor(svgChildren, pivotIndex, arrayItemOriginalColor);

        await timer(animationSpeed);

        swapSVGNodes(svgChildren[currentIndex], svgChildren[pivotIndex]);

        [array[pivotIndex], array[currentIndex]] = [array[currentIndex], array[pivotIndex]];

        return currentIndex;
    }

    async function QuickSortHelper(array: number[], low: number, high: number) {
        if (low >= high) {
            return;
        }

        const pivotIndex = await ParitionHelper(array, low, high);

        await QuickSortHelper(array, low, pivotIndex - 1);
        await QuickSortHelper(array, pivotIndex + 1, high);
    }

    async function sort() {
        await QuickSortHelper(array, 0, len - 1);
    }

    function func() {
        return sort()
            .then(() => true)
            .catch((err) => err);
    }

    return func();
}
