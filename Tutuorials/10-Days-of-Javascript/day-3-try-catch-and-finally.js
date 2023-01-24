/* Day 3: Try, Catch, and Finally */

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {  
    try {
        console.log(s.split('').reverse().join(''));
    }
    catch (error) {
        console.log('s.split is not a function');
        console.log(s);
    }
}