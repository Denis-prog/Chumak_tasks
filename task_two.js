(function () {
    /*
    alphabetPosition("The sunset sets at twelve o' clock.")
    // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    */

    const option1 = {  //для локализации
        lang: 'ru',
        unicodeFrom: 1072,
        countLetters: 33,
    }

    function alphabetPosition1(str, option = {
        lang: 'en',
        unicodeFrom: 97,
        countLetters: 26,
    }) {
        const createAlphabet = (option) => {
            const alphabet = new Map();
            let { lang, unicodeFrom, countLetters } = option;

            for (let i = 0; i < countLetters; i++) {

                if (lang === 'ru') {

                    if (i === 6) { //для буквы ё
                        countLetters--;
                        alphabet.set(String.fromCharCode(1105), i + 1);
                    }

                    if (i >= 6) {
                        alphabet.set(String.fromCharCode(i + unicodeFrom), i + 2);
                        continue;
                    }
                }

                alphabet.set(String.fromCharCode(i + unicodeFrom), i + 1);
            }

            return alphabet;
        }

        const alphabet = createAlphabet(option);
        let result = "";

        for (let i = 0; i < str.length; i++) {
            const item = alphabet.get(str[i].toLowerCase());

            if (item) {
                result += item + ' ';
            }
        }

        return result.substring(0, result.length - 1);
    }

    console.log(alphabetPosition1("The sunset sets at twelve o' clock."));
    console.log(alphabetPosition1("Велосипедист наткнулся на ёжика", option1));

    //опции для локали ру
    const option2 = {
        lang: 'ru',
        range: {
            unicodeFrom: 1072,
            unicodeTo: 1105,
        },
    }

    function init(option = {
        lang: 'en',
        range: {
            unicodeFrom: 97,
            unicodeTo: 122,
        },
    }) {
        const cache = Object.create(null);
        const { lang, range: { unicodeFrom, unicodeTo } } = option;

        const isValidCode = (code) => code >= unicodeFrom && code <= unicodeTo;

        const getUnicodeFromChar = (letter) => {
            const record = cache[letter];
            const code = record ? record : cache[letter] = letter.toLowerCase().charCodeAt();

            return isValidCode(code) ? code : -1;    //-1 => char не попал в диапазон букв. это значение в результирующем массиве отфильтруется
        }

        const unicodeToAlphabet = function (code) {

            if (!~code) return code;

            if (lang === 'ru') {

                if (code === 1104 || code === 1105) { //для буквы ё
                    return 7;
                }

                if (code > 1077) {     //после буквы ё
                    code += 1;
                }
            }

            return code - unicodeFrom + 1;
        };

        return function (str) {

            return Array.prototype.map.call(str, (item) => unicodeToAlphabet(getUnicodeFromChar(item)))
                .filter(item => item > 0)
                .join(' ');
        }
    }

    const alphabetPositionEn = init();
    console.log(alphabetPositionEn("The sunset sets at twelve o' clock."));
    
    const alphabetPositionRu = init(option2);
    console.log(alphabetPositionRu("Велосипедист наткнулся на ёжика"));
})();
