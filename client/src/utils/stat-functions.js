// Functions used for javascript

function runStats(array, variable) {
    const filterArray = array.map(item => item[variable]);
    const freq = {};

    if (!filterArray) {
        console.log('nothing to filter');
    } else {
        filterArray.forEach((value) => {
            freq[value] = freq[value] ? freq[value] + 1: 1;
        })
    }

    if (!freq) {
        console.log('nothing to freq')
    } else {
        const entries = Object.entries(freq);
        entries.sort((a, b) => b[1] - a[1]);
        const top5 = entries.slice(0,5);
        const resultTop5 = Object.fromEntries(top5);
        return resultTop5;
    }
}; 

module.exports = {
    runStats
};