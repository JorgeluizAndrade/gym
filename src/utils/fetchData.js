export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3ac492af8cmshcffcd5cab6b6552p165ce0jsn2e78d1c4d49f',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data
}