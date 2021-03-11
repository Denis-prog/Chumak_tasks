const alphabetPosition = (function () {
    let currentLocale = 'en';

    const _initWayFirst = () => {
        const LOCALES = {
            ru: {
                unicodeFrom: 1072,
                unicodeTo: 1105,
            },
            en: {
                unicodeFrom: 97,
                unicodeTo: 122,
            }
        };
        const cache = Object.create(null);
        let unicodeFrom;
        let unicodeTo;

        const isValidCode = (code) => code >= unicodeFrom && code <= unicodeTo;

        const getUnicodeFromChar = (letter) => {
            const record = cache[letter];
            const code = record ? record : cache[letter] = letter.toLowerCase().charCodeAt();

            return isValidCode(code) ? code : -1;    //-1 => char не попал в диапазон букв. это значение в результирующем массиве отфильтруется
        }

        const unicodeToAlphabet = function (code) {

            if (!~code) return code;

            if (unicodeFrom === 1072) {

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
            ({ unicodeFrom, unicodeTo } = LOCALES[currentLocale]);
            return [].map.call(str, (item) => unicodeToAlphabet(getUnicodeFromChar(item)))
                .filter(item => item > 0)
                .join(' ');
        };
    };

    const _initWaySecond = () => {
        const LOCALES = {
            ru: {
                unicodeFrom: 1072,
                countLetters: 33,
            },
            en: {
                unicodeFrom: 97,
                countLetters: 26,
            }
        };

        const createAlphabet = (locale) => {
            const alphabet = new Map();
            let { unicodeFrom, countLetters } = LOCALES[locale];

            for (let i = 0; i < countLetters; i++) {

                if (unicodeFrom === 1072) {

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

        return function (str) {
            const alphabet = createAlphabet(currentLocale);
            let result = "";

            for (let i = 0; i < str.length; i++) {
                const item = alphabet.get(str[i].toLowerCase());

                if (item) {
                    result += item + ' ';
                }
            }

            return result.substring(0, result.length - 1);
        }
    }

    const changeWay = () => {
        API.replace = _initWaySecond();
    }

    const changeLocale = (locale) => {
        currentLocale = locale;
    }

    const showLocale = () => {
        console.log(currentLocale);
    }

    const API = {
        replace: _initWayFirst(),
        changeWay,
        changeLocale,
        showLocale,
    };

    return API;
})();

console.log(alphabetPosition.replace("The sunset sets at twelve o' clock."));

alphabetPosition.changeLocale('ru');

console.log(alphabetPosition.replace("а б в г д е ё"));

alphabetPosition.changeLocale('en');

console.log(alphabetPosition.replace("The sunset sets at twelve o' clock."));

alphabetPosition.changeWay();

console.log(alphabetPosition.replace("The sunset sets at twelve o' clock."));

alphabetPosition.changeLocale('ru');

console.log(alphabetPosition.replace("а б в г д е ё"));
