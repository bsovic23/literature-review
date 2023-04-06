// Functions used for javascript

/* Function will filter over the array and create a new array
    with just the values of the "variable" passed into the fx
    and return the new array 'filterArray'
*/
function filterResults(array, variable) {
    const filterArray = array.map(item => item[variable]);

    return filterArray;
}; 

/* Function will count the frequency of each value in the array
    and add to previous count or create count 1 if new
*/
function countTerms(array) {
    const freq = {};
    array.forEach((value) => {
        freq[value] = freq[value] ? freq[value] + 1: 1;
    })
    return freq;
};

/*
    function counts the term, and only returns the top 10
*/
function sortTerms(object) {
    const entries = Object.entries(object);
    entries.sort((a, b) => b[1] - a[1]);
    const top10 = entries.slice(0,10);
    const resultTop10 = Object.fromEntries(top10);
    return resultTop10;
}

module.exports = {
    filterResults,
    countTerms,
    sortTerms
};