import {
    timer,
    arrayItemOriginalColor,
    arrayItemNotEqualColor,
    arrayItemCurrentPositionColor,
    arrayItemEqualColor,
    arrayItemSortedColor,
    swapSVGNodes
} from "../commonUtilities";

export async function InsertionSort(
    arr: number[],
    svgChildren: HTMLCollectionOf<SVGGElement>,
    animationSpeed: number
) {
    const len = arr.length;

    async function sort() {
        const minElement = svgChildren[0].children as HTMLCollectionOf<
            SVGRectElement | SVGTextElement
        >;

        minElement[0].style.fill = arrayItemEqualColor;

        timer(animationSpeed);

        let i;

        for (i = 1; i < len; i++) {
            let currentElement = arr[i];
            let currentElementIndex = i;

            let currentSVGElement = svgChildren[currentElementIndex].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;

            for (let j = 0; j <= i; j++) {
                currentSVGElement[0].style.fill = arrayItemCurrentPositionColor;

                const secondElement = svgChildren[j].children as HTMLCollectionOf<
                    SVGRectElement | SVGTextElement
                >;

                secondElement[0].style.fill = arrayItemCurrentPositionColor;

                await timer(animationSpeed);

                if (currentElement < arr[j]) {
                    currentSVGElement[0].style.fill = arrayItemNotEqualColor;

                    secondElement[0].style.fill = arrayItemNotEqualColor;

                    await timer(animationSpeed);

                    [arr[j], arr[currentElementIndex]] = [arr[currentElementIndex], arr[j]];

                    currentElement = arr[i];

                    swapSVGNodes(svgChildren[j], svgChildren[currentElementIndex]);

                    currentSVGElement[0].style.fill = arrayItemOriginalColor;
                    secondElement[0].style.fill = arrayItemOriginalColor;

                    await timer(animationSpeed);

                    currentSVGElement = svgChildren[i].children as HTMLCollectionOf<
                        SVGRectElement | SVGTextElement
                    >;

                    currentElementIndex = i;
                } else {
                    secondElement[0].style.fill = arrayItemEqualColor;
                    await timer(animationSpeed);

                    currentSVGElement[0].style.fill = arrayItemOriginalColor;
                    secondElement[0].style.fill = arrayItemOriginalColor;
                }

                await timer(animationSpeed);
            }
        }
    }

    function func() {
        return sort()
            .then(() => true)
            .catch((err) => err);
    }

    return func();
}
