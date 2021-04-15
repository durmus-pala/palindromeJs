function checkPal(word){
    let reversedWord = word.split('').reverse().join('');
    if(word == reversedWord){
        return true;
    }else{
        return false;
    }
}

console.log(checkPal('racecar')); // output true
console.log(checkPal('racing')); // output false