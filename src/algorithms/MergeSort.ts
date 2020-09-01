import {
    timer,
    arrayItemOriginalColor,
    arrayItemCurrentPositionColor,
    arrayItemEqualColor,
    arrayItemSortedColor
} from "../commonUtilities";

export async function MergeSort(
    array: number[],
    svgChildren: HTMLCollectionOf<SVGGElement>,
    animationSpeed: number,
    svgHeight: number
) {
    const len = array.length;

    function swapNodes(i: number, j: number, arrayNodes: Array<HTMLElement>) {
        const first = svgChildren[i],
            second = arrayNodes[j];
        const height = second.children[0].getAttribute("height") as string;

        const tempTransform1 = first.getAttribute("transform");
        const tempTransform2 = first.getAttribute("transform");

        let resultTransform = "";

        let resultTransform2 = 0;

        if (tempTransform1) {
            resultTransform = tempTransform1.split("(")[1].split(" ")[0];

            const temp = tempTransform1.split("(")[1].split(" ")[1];

            resultTransform2 = parseInt(temp.substring(0, temp.length - 2));
        }

        if (height && svgHeight - parseInt(height) !== resultTransform2) {
            first.setAttribute(
                "transform",
                `translate(${resultTransform} ${svgHeight - parseInt(height)})`
            );
            first.children[0].setAttribute("height", height);
            first.children[1].innerHTML = second.children[1].innerHTML;
            first.children[1].setAttribute("y", (parseInt(height) / 2).toString());

            return true;
        }

        return false;
    }

    async function MergeHelper(array: Array<number>, low: number, mid: number, high: number) {
        const firstSize = mid - low + 1;
        const secondSize = high - mid;

        const firstArray = new Array(firstSize);
        const secondArray = new Array(secondSize);

        const firstArrayPosition = new Array(firstSize);
        const secondArrayPosition = new Array(secondSize);

        const firstArrayNodes = new Array(firstSize);
        const secondArrayNodes = new Array(secondSize);

        for (let i = 0; i < firstSize; i++) {
            firstArray[i] = array[low + i];
            firstArrayPosition[i] = low + i;
            firstArrayNodes[i] = svgChildren[low + i].cloneNode(true);
        }

        for (let i = 0; i < secondSize; i++) {
            secondArray[i] = array[mid + i + 1];
            secondArrayPosition[i] = mid + i + 1;
            secondArrayNodes[i] = svgChildren[mid + i + 1].cloneNode(true);
        }

        let i = 0;
        let j = 0;
        let k = low;

        while (i < firstSize && j < secondSize) {
            const first = svgChildren[firstArrayPosition[i]].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;

            const second = svgChildren[secondArrayPosition[j]].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;

            const firstRect = first[0];
            const secondRect = second[0];

            firstRect.style.fill = arrayItemCurrentPositionColor;
            secondRect.style.fill = arrayItemCurrentPositionColor;

            await timer(animationSpeed);

            if (firstArray[i] <= secondArray[j]) {
                const res = swapNodes(k, i, firstArrayNodes);

                if (res) {
                    firstRect.style.fill = arrayItemSortedColor;
                } else {
                    firstRect.style.fill = arrayItemEqualColor;
                }

                await timer(animationSpeed);

                array[k++] = firstArray[i];

                i += 1;

                firstRect.style.fill = arrayItemOriginalColor;
                secondRect.style.fill = arrayItemOriginalColor;
            } else {
                const res = swapNodes(k, j, secondArrayNodes);

                if (res) {
                    secondRect.style.fill = arrayItemSortedColor;
                } else {
                    secondRect.style.fill = arrayItemEqualColor;
                }

                await timer(animationSpeed);

                array[k++] = secondArray[j];

                j += 1;

                firstRect.style.fill = arrayItemOriginalColor;
                secondRect.style.fill = arrayItemOriginalColor;
            }
        }

        while (i < firstSize) {
            const first = svgChildren[firstArrayPosition[i]].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;

            const firstRect = first[0];

            const res = swapNodes(k, i, firstArrayNodes);

            if (res) {
                firstRect.style.fill = arrayItemSortedColor;
            } else {
                firstRect.style.fill = arrayItemEqualColor;
            }

            firstRect.style.fill = arrayItemSortedColor;

            await timer(animationSpeed);

            array[k++] = firstArray[i];

            i += 1;

            firstRect.style.fill = arrayItemOriginalColor;
        }

        while (j < secondSize) {
            const second = svgChildren[secondArrayPosition[j]].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;

            const secondRect = second[0];

            const res = swapNodes(k, j, secondArrayNodes);

            if (res) {
                secondRect.style.fill = arrayItemSortedColor;
            } else {
                secondRect.style.fill = arrayItemEqualColor;
            }

            await timer(animationSpeed);

            array[k++] = secondArray[j];

            j += 1;

            secondRect.style.fill = arrayItemOriginalColor;
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
