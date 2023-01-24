/* Day 1: Functions */

/*
 * Create the function factorial here
 */
function factorial(n) {
    if (!n) {
        return '';
    } else if (n >= 1 && n <= 10)  {
        let result = 1
        for (let i = 2; i <= n; i++) {
            result = result * i;
        }
        return result;
    } else {
        return '';
    }
}