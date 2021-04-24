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

export {
    getUniqCounts,
    getAuthUser,
    setAuthUser,
    clearAuthUser,
};
