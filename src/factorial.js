function getDigits(n){
    const digits = [];
    while (n >= 10) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }
    digits.push(n);
    return digits;
}

function schoolMultiply(digits, multiplier){
    const result = [];
    let next = 0;
    for (let i=0, ic = digits.length; i<ic; i++){
        const multiplicationResult = digits[i] * multiplier + next;
        const newDigit = multiplicationResult % 10;
        next = Math.floor(multiplicationResult / 10);
        result.push(newDigit);
    }
    if (next) 
        result.push(...getDigits(next));
    
    return result;
}

function schoolAdd(digits1, digits2){
    const length = Math.max(digits1.length, digits2.length);
    const result = [];
    let next = 0;

    for (let i=0; i<length; i++){
        const sum = (digits1[i] || 0) + (digits2[i] || 0) + next;
        result.push(sum % 10);
        next = Math.floor(sum / 10);
    }

    if (next)
        result.push(next);

    return result;
}

function fac(n){
    return n > 1 ? n * n -1 : 1;    
}

function facExt(n){
    let digits = getDigits(n);
    while (n > 1){
        digits = schoolMultiply(digits, n-1);
        n--;
    }

    return digits.reverse();
}

console.log(facExt(25).join(''));