(function () {

    let arrayDiff1 = function arrayDiff(minuendArr, subtrahendArr) {

        if (!subtrahendArr.length) {
            return minuendArr;
        }

        let currentSubtrahend = subtrahendArr.pop();

        return arrayDiff(minuendArr.filter((item) => item !== currentSubtrahend), subtrahendArr);
    }

    console.log(arrayDiff1([1, 2], [1]));
    console.log(arrayDiff1([1, 2, 2, 2, 3], [2]));
    console.log(arrayDiff1([1, 2, 2, 2, 3], [2, 9, 99, -1]));


    function arrayDiff2(minuendArr, subtrahendArr) {
        for (let i = 0; i < subtrahendArr.length && minuendArr.length;) {

            let isMatch = minuendArr.indexOf(subtrahendArr[i]);

            if (!~isMatch) { i++; continue; }

            minuendArr.splice(isMatch, 1);
        }
        return minuendArr;
    }

    console.log(arrayDiff2([1, 2], [1]));
    console.log(arrayDiff2([1, 2, 2, 2, 3], [2]));
    console.log(arrayDiff2([1, 2, 2, 2, 3], [2, 9, 99, -1]));


    function arrayDiff3(minuendArr, subtrahendArr) {
        const result = [];
        const match = new Map();
        const noMatch = new Map();

        for (let number of minuendArr) {

            if (match.has(number)) {
                continue;
            }

            if (noMatch.has(number)) {
                result.push(number);
                continue;
            }

            let isMatch = subtrahendArr.indexOf(number);

            if (!~isMatch) {
                result.push(number);
                noMatch.set(number, number);
                continue;
            }

            match.set(number, number);
        }

        return result;
    }

    console.log(arrayDiff3([1, 2], [1]));
    console.log(arrayDiff3([1, 2, 2, 2, 3], [2]));
    console.log(arrayDiff3([1, 2, 2, 2, 3], [2, 9, 99, -1]));


    function arrayDiff4(minuendArr, subtrahendArr) {

        function getRegExp(number) {
            if (number < 0) {
                const numberABS = Math.abs(number);
                return new RegExp(`-\\b${numberABS}\\b`);
            }

            return new RegExp(`(?<!\-)\\b${number}\\b`);
        };

        const result = [];
        const subtrahendStr = subtrahendArr.join();

        minuendArr.forEach(element => {
            const regExp = getRegExp(element);

            if (!regExp.test(subtrahendStr)) {
                result.push(element)
            }
        });

        return result;
    }

    console.log(arrayDiff4([1, 2, 1, -1], [1]));
    console.log(arrayDiff4([1, 2, 2, 2, 3], [2]));
    console.log(arrayDiff4([1, 2, 2, 2, 3], [2, 9, 99, -1]));
})();
