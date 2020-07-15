import {timer, arrayItemOriginalColor,arrayItemNotEqualColor,arrayItemCurrentPositionColor, arrayItemEqualColor,arrayItemSortedColor, swapSVGNodes} from '../commonUtilities'

export async function SelectionSort(arr: number[], svgChildren: HTMLCollectionOf<SVGGElement>, animationSpeed: number) {
    const len = arr.length;

    async function sort() {
        for (let i=0;i<len-1;i++)  {
            let min = arr[i], minIndex = i;

            let minRect = svgChildren[minIndex].children as HTMLCollectionOf<
                SVGRectElement | SVGTextElement
            >;

            minRect[0].style.fill = arrayItemEqualColor;

            for (let j=i+1; j<len; j++) {
               
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
                }
                else {
                    currentRect[0].style.fill = arrayItemOriginalColor;
                }

                await timer(animationSpeed);

                console.log (arr[i], arr[minIndex]);

                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

                swapSVGNodes(svgChildren[i], svgChildren[minIndex]);

                await timer(animationSpeed);
            }
        }
        console.log(arr);        
    }

    function func() {
        return sort().then(()=>{
                return true;
            }).catch((err)=>{
                return err;
            })
    }

    return func();
}