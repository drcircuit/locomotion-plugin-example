var pal = require("./index");

const test1 = "A single digit or character IS A PALINDROME!";
const test2 = "A double character IS A PALINDROME!";
const test3 = "This word is NOT A PALINDROME!";
const test4 = "This word is A PALINDROME!";
const test5 = "WHITESPACE is IGNORED on PALINDROMES!";
const test6 = "PUNCTUATION is IGNORED on PALINDROMES!";
const test7 = "Mixed case word IS A PALINDROME!";
const test8 = "A sentence is a PALINDROME!";
const test9 = "A sentence with MIXED CASE and PUNCTUATION IS A PALINDROME!";
const test10 = "A sentance that is NOT A PALINDROME!";

if(!pal.isPalindrome(1)){
    console.error(test1);
} else {
    console.info(test1);
}

if(!pal.isPalindrome("a")){
    console.error(test1);
} else {
    console.info(test1);
}

if(!pal.isPalindrome("aa")){
    console.error(test2);
} else {
    console.info(test2);
}

if(pal.isPalindrome("anda")){
    console.error(test3);
} else {
    console.info(test3);
}

if(!pal.isPalindrome("racecar")){
    console.error(test4);
} else {
    console.info(test4);
}

if(!pal.isPalindrome("race car")){
    console.error(test5);
} else {
    console.info(test5);
}

if(!pal.isPalindrome("!@#$%^&*()_-+=}{[]/?,\\|racecar.")){
    console.error(test6);
} else {
    console.info(test6);
}

if(!pal.isPalindrome("rACe CaR")){
    console.error(test7);
} else {
    console.info(test7);
}

if(!pal.isPalindrome("no x in nixon")){
    console.error(test8);
} else {
    console.info(test8);
}

if(!pal.isPalindrome("No X, in Nixon!")){
    console.error(test9);
} else {
    console.info(test9);
}

if(pal.isPalindrome("No X, btw in Nixon!")){
    console.error(test10);
} else {
    console.info(test10);
}