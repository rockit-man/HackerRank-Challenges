/* Day 2: Loops */

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    [...s].forEach(l => 'aeiou'.includes(l) ? console.log(l) : null);
    [...s].forEach(l => 'aeiou'.includes(l) ? null : console.log(l));
}