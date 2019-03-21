let Util = {};
Util.factorial = (n) => {

    if (n < 0) {
        throw 'Unable to compute factorial for n < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    if (n >= 100) {
        throw 'Unable to compute factorial for n > 100'
    }

    if (0 === n) {
        return 1;
    }

    return n * Util.factorial(n - 1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(num) {
    for(var i = 2; i <= num /2; i++)
        if(num % i === 0) return false;
    return num > 1;
};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(num) {
    var sum = 0;
    for(var i = 2; i <= num; i++){
        if(Util.isPrime(i)) sum += i;
    }
    return sum;
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(num) {
    var data = [];
    for(var i = 1; i <= num; i++){
        if(i % 15 === 0) data[i-1] = "FizzBuzz";
        else if (i % 3 === 0) data[i-1] = "Fizz";
        else if (i % 5 === 0) data[i-1] = "Buzz";
        else data[i-1] = i;
    }
    return data
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
    var newPhrase = "";
    for (var i = 0; i <= phrase.length; i++){
        var char = phrase.charAt(i);
        var code = phrase.charCodeAt(i);

        if(char.search(/[z|Z]/) !== -1)
            newPhrase += String.fromCharCode( code - 25);
        else
        if (char.search(/[a-yA-Y]/) !== -1)
            newPhrase += String.fromCharCode( code + 1);
        else
            newPhrase += char;
    }
    return newPhrase;
};


module.exports = Util;