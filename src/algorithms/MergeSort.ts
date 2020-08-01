import {
    timer,
    arrayItemOriginalColor,
    arrayItemNotEqualColor,
    arrayItemCurrentPositionColor,
    arrayItemEqualColor,
    swapSVGNodes
} from "../commonUtilities";

export async function MergeSort(
    array: number[],
    svgChildren: HTMLCollectionOf<SVGGElement>,
    animationSpeed: number
) {
    const len = array.length;

    async function MergeHelper(array: Array<number>, low: number, mid: number,  high: number) {
        console.log(low, mid, high) 
        
        const firstSize = mid - low + 1;
        const secondSize = high - mid;

        const firstArray = new Array(firstSize);
        const secondArray = new Array(secondSize);

        for (let i = 0; i<firstSize; i++) {
            firstArray[i] = array[low+i];
        }

        for (let i = 0; i<secondSize; i++) {
            secondArray[i] = array[mid+i+1];
        }

        let i = 0, j = 0, k = low;

        while (i < firstSize && j < secondSize) {
            
            const first = svgChildren[i].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;

            const second = svgChildren[j].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;

            const firstRect = first[0];
            const secondRect = second[0];

            // Indicate these cells are currently being sorted
            firstRect.style.fill = arrayItemCurrentPositionColor;
            secondRect.style.fill = arrayItemCurrentPositionColor;

            await timer(animationSpeed);


            if (firstArray[i] <= secondArray[j]) {
                 // Indicate these cells are currently being sorted
                firstRect.style.fill = arrayItemNotEqualColor;
                secondRect.style.fill = arrayItemNotEqualColor;

                await timer(animationSpeed);

                // swapSVGNodes(svgChildren[i], svgChildren[k]);

                array[k++] = firstArray[i];
                i+=1;
            }
            else {
                 // Indicate these cells are currently being sorted
                firstRect.style.fill = arrayItemEqualColor;
                secondRect.style.fill = arrayItemEqualColor;

                await timer(animationSpeed);

                // swapSVGNodes(svgChildren[j], svgChildren[k]);

                array[k++] = secondArray[j];
                j+=1;
            }
        }

        while (i < firstSize) {

            const first = svgChildren[i].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;
            const firstRect = first[0];

            // swapSVGNodes(svgChildren[i], svgChildren[k]);
            firstRect.style.fill = arrayItemEqualColor;

            await timer(animationSpeed);

            array[k++] = firstArray[i];
            i+=1;
        }

        while (j < secondSize) {
            const first = svgChildren[j].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;
            const firstRect = first[0];

            firstRect.style.fill = arrayItemEqualColor;

            await timer(animationSpeed);

            // swapSVGNodes(svgChildren[j], svgChildren[k]);
            array[k++] = secondArray[j];
            j+=1;
        }
    }

    async function MergeSortHelper(array: Array<number>, low: number, high: number) {
        if (low >= high) {
            return;
        }
        const mid = Math.floor((low + (high-low) / 2));
        await MergeSortHelper(array, low, mid);
        await MergeSortHelper(array, mid+1, high);
        await MergeHelper(array, low, mid, high);
    }

    async function sort() {
        await MergeSortHelper(array, 0, len-1); 
    }

    function func() {
        return sort()
            .then(() => true)
            .catch((err) => err);
    }

    return func();
}