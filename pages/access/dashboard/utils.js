export const allZeros = arrayOfNumbers => {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > 0) {
            return false; //If we get here, there is non-zero data
        }
    }

    return true //if we get here, it means that everyone is Zero
}

export function getSubArray(array, pos) {
    return array.map(val => {
        return val[pos];
    })
}