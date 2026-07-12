export function getSubProbArray(start, end, probabilityArray) {
    const subProb = []; //<--- Array that will be built

    //Filling the array
    for (let i = 0; i < start; i++) {
        subProb.push(null);
    }
    for (let i = start; i <= end; i++) {
        subProb.push(probabilityArray[i][1]);
    }
    for (let i = end + 1; i <= probabilityArray.length; i++) {
        subProb.push(null);
    }
    
    return subProb;
}