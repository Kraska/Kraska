/**
 * Calculate the best sum
 * @param t - max sum of distances
 * @param k - count of cities to visit, k> = 1
 * @param ls - list of distances (every distance > 0), ls.length > 0
 * @returns - the biggest sum of k distances, that <= t. If don't exists - null
 */
const chooseBestDistance = (t, k, ls) => {

    if ( !isPositiveInt(t) ) {
        throw new TypeError("t must be positive integer!");
    }

    if ( !isPositiveInt(k) || k < 1 ) {
        throw new TypeError("k should be integer >= 1!");
    }

    if ( typeof(ls.length) !== "number" || ls.length < 1 ) {
        throw new TypeError("ls must be an array with length > 0");
    }

    if ( !ls.every(elem => isPositiveInt(elem)) ) {
        throw new TypeError("ls must be an array with positive integers");
    }

    return getCombinations(ls, [], k)
        .map(arr => arr.reduce((sum, elem) => sum + elem, 0))
        .filter(sum => sum <= t)
        .reduce((max, elem) => elem > max ? elem : max, null);
};


const isPositiveInt = (num) => {
    return typeof(num) == "number" && Number.parseInt(num) === num && num > 0;
}

/**
 * Recursive method for calculating all combinations
 * First method call calculate all variants for first position,
 * trim array and send it to "second level" calls (in order to avoid duplicate combinations).
 * "Second level" calls calculate all variants for second position, ...
 *
 * @param srcArray - the array from which to take the elem for next position
 * @param accum - array with prev positions
 * @param count - count of all positions
 * @returns [[]] - array of all combinations
 */
const getCombinations = (srcArray, accum, count) => {

    if( accum.length === count ) {
        return [ accum ];
    }

    return srcArray
        .map((elem, index) => getCombinations(trimArray(srcArray, index), [...accum, elem], count))
        .flatMap(arr => arr);
};


/**
 * Trim n first elements from array
 * @param arr - the array to trim
 * @param n - count elements to trim
 * @returns new cut array
 */
const trimArray = (arr, n) => {
    return arr.filter((el, i) => i > n)
}

module.exports = chooseBestDistance;