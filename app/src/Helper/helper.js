const getUniqCounts = (array) => {
    let seen = {};

    return array.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
};

const getAuthUser = () => JSON.parse(localStorage.getItem('user'));

const setAuthUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

const clearAuthUser = () => {
    localStorage.removeItem('user');
}

const convertTimeToString = (timestamp) => {
    const timeSecond = Math.floor(timestamp / 1000);
    const seconds = timeSecond % 60;
    const minutes = Math.floor(timeSecond % 3600 / 60);
    const hours = Math.floor(timeSecond % 86400 / 3600);

    if (hours) return `${hours} hours`;
    if (minutes) return `${minutes} minutes`;
    if (seconds) { return `${seconds} seconds` }
}


export {
    getUniqCounts,
    getAuthUser,
    setAuthUser,
    clearAuthUser,
    convertTimeToString,
};
