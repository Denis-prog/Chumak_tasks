const getUniqCounts = (array) => {
    let seen = {};

    return array.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
};

const getAuthUser = () => JSON.parse(localStorage.getItem('token'));


const setAuthUser = (user) => {
    localStorage.setItem('token', JSON.stringify(user));
};

export {
    getUniqCounts,
    getAuthUser,
    setAuthUser,
};
