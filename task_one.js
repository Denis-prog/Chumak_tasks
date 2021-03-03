(function () {
    /* console.log(123);
    arrayDiff([1, 2], [1]) == [2]
    arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3]
    arrayDiff([1, 2, 2, 2, 3], [2, 9, 99, -1]) == [1, 3]
     */

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

        for (let i = 0; i < subtrahendArr.length; i++) {

            while (true) {
                let isMatch = minuendArr.indexOf(subtrahendArr[i]);

                if (!~isMatch) { break; }

                minuendArr.splice(isMatch, 1);
            }
        }

        return minuendArr;
    }

    console.log(arrayDiff2([1, 2], [1]));
    console.log(arrayDiff2([1, 2, 2, 2, 3], [2]));
    console.log(arrayDiff2([1, 2, 2, 2, 3], [2, 9, 99, -1]));

    function arrayDiff3(minuendArr, subtrahendArr) {

        const result = [];
        const cache = {
            match: {},
            noMatch: {},
        };

        for (let number of minuendArr) {

            if (typeof cache['match'][number] === 'number') {
                continue;
            }

            if (typeof cache['noMatch'][number] === 'number') {
                result.push(number);
                continue;
            }

            let isMatch = subtrahendArr.indexOf(number);

            if (!~isMatch) {
                result.push(number);
                cache['noMatch'][number] = number;
                continue;
            }

            cache['match'][number] = number;
        }

        return result;
    }

    console.log(arrayDiff3([1, 2], [1]));
    console.log(arrayDiff3([1, 2, 2, 2, 3], [2]));
    console.log(arrayDiff3([1, 2, 2, 2, 3], [2, 9, 99, -1]));
})()
