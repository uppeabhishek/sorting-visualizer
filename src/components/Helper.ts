export function getRandomInt(min: number, max: number): number {
    const mi = Math.ceil(min);
    const ma = Math.floor(max);

    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (ma - mi)) + mi;
}
