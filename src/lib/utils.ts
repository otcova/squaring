export function formatTime(millis: number) {
    if (!Number.isFinite(millis)) millis = 0;
    millis = Math.trunc(millis);
    const segons = Math.trunc(millis / 1000) % 60;
    const minuts = Math.trunc(millis / 1000 / 60);

    const millisStr = (millis % 1000).toString().padStart(3, "0");
    const segonsStr = segons.toString().padStart(2, "0");
    const minutsStr = minuts.toString().padStart(2, "0");
    return minutsStr + ":" + segonsStr + ":" + millisStr;
}