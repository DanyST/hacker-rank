// https://www.hackerrank.com/challenges/js10-loops/problem

function vowelsAndConsonants(s) {
    let vowels = 'aeiou';
    let consonants = '';
    
    for(let letter of s) {
        if (vowels.includes(letter)) {
            console.log(letter);
        }else{
            consonants += letter + '\n';
        }
    }
    
    console.log(consonants);
}