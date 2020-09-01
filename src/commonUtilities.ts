export const arrayItemOriginalColor = "#251b12";
export const arrayItemCurrentPositionColor = "blue";
export const arrayItemNotEqualColor = "red";
export const arrayItemEqualColor = "yellowgreen";
export const arrayItemSortedColor = "green";

export function timer(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
}

export function getRandom(min: number, max: number): number {
    const mi = Math.ceil(min);
    const ma = Math.floor(max);

    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (ma - mi + 1)) + mi;
}

export function fillColor(
    svgChildren: HTMLCollectionOf<SVGGElement>,
    index: number,
    color: string
) {
    const rect = svgChildren[index].children as HTMLCollectionOf<SVGRectElement | SVGTextElement>;

    rect[0].style.fill = color;
}

export function shuffle(arr: Array<any>) {
    const le = arr.length;

    for (let i = le - 1; i > 0; i--) {
        const rI = getRandom(0, i - 1);

        [arr[i], arr[rI]] = [arr[rI], arr[i]];
    }

    return arr;
}

export function swapSVGNodes(svgChildren1: SVGGElement, svgChildren2: SVGGElement) {
    const { parentNode } = svgChildren1;

    const firstChild = svgChildren1;
    const secondChild = svgChildren2;
    const { nextSibling } = svgChildren2;

    if (parentNode) {
        parentNode.insertBefore(secondChild, firstChild);
        parentNode.insertBefore(firstChild, nextSibling);
    }

    const first = svgChildren1.transform.baseVal.getItem(0);
    let firstX = 0;
    let firstY = 0;

    if (first.type === SVGTransform.SVG_TRANSFORM_TRANSLATE) {
        firstX = first.matrix.e;
        firstY = first.matrix.f;
    }

    const second = svgChildren2.transform.baseVal.getItem(0);
    let secondX = 0;
    let secondY = 0;

    if (second.type === SVGTransform.SVG_TRANSFORM_TRANSLATE) {
        secondX = second.matrix.e;
        secondY = second.matrix.f;
    }

    svgChildren2.transform.baseVal.getItem(0).setTranslate(firstX, secondY);
    svgChildren1.transform.baseVal.getItem(0).setTranslate(secondX, firstY);
}
