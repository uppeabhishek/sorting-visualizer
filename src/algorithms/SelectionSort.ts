import {
    timer,
    arrayItemOriginalColor,
    arrayItemCurrentPositionColor,
    arrayItemEqualColor,
    arrayItemSortedColor,
    swapSVGNodes
} from "../commonUtilities";

export async function SelectionSort(
    arr: number[],
    svgChildren: HTMLCollectionOf<SVGGElement>,
    animationSpeed: number
) {
    const len = arr.length;

    async function sort() {
        let i;

        for (i = 0; i < len - 1; i++) {
            let min = arr[i];
            let minIndex = i;

            let minRect = svgChildren[minIndex].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;

            minRect[0].style.fill = arrayItemEqualColor;

            for (let j = i + 1; j < len; j++) {
                const currentRect = svgChildren[j].children as HTMLCollectionOf<
                    SVGRectElement | SVGTextElement
                >;

                currentRect[0].style.fill = arrayItemCurrentPositionColor;

                await timer(animationSpeed);

                if (arr[j] < min) {
                    // Current Min Element
                    minRect[0].style.fill = arrayItemOriginalColor;
                    currentRect[0].style.fill = arrayItemEqualColor;
                    minRect = currentRect;

                    min = arr[j];
                    minIndex = j;
                } else {
                    currentRect[0].style.fill = arrayItemOriginalColor;
                }
                await timer(animationSpeed);
            }

            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

            swapSVGNodes(svgChildren[i], svgChildren[minIndex]);

            const firstRect = svgChildren[i].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;

            firstRect[0].style.fill = arrayItemSortedColor;

            await timer(animationSpeed);
        }

        // Paint last element as sorted
        const firstRect = svgChildren[i].children as HTMLCollectionOf<
            SVGRectElement | SVGTextElement
        >;

        firstRect[0].style.fill = arrayItemSortedColor;
    }

    function func() {
        return sort()
            .then(() => true)
            .catch((err) => err);
    }

    return func();
}
