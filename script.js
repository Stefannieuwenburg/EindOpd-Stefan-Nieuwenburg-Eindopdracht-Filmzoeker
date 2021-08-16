const mapMovies = movies.Movies.map(movies => {
    return movies.Title
});

const addMoviesToDom = function (movies) {
    const ul = document.getElementById("Films");
    const list = movies.map(movie => {

        const newLi = document.createElement("li")
        newLi.appendChild(getIMDBlink(movie));
        return newLi;
    });
    ul.innerHTML = "";
    list.forEach(li => ul.appendChild(li));
};

const getIMDBlink = function (movie) {
    const newa = document.createElement("a");
    newa.href = 'http://www.imdb.com/title/' + movie.imdbID;
    const newimg = document.createElement("img");
    newimg.src = movie.Poster;
    newa.appendChild(newimg);
    return newa;
};

document.getElementById("alle").addEventListener("change", function () {
    addMoviesToDom(movies.Movies);
});

document.getElementById("nieuwste").addEventListener("change", function () {
    filterLatestMovies()
});

document.getElementById("avengers").addEventListener("change", function () {
    filterFilms("avengers");
});

document.getElementById("xmen").addEventListener("change", function () {
    filterFilms("x-men");
});

document.getElementById("princess").addEventListener("change", function () {
    filterFilms("princess");
});

document.getElementById("batman").addEventListener("change", function () {
    filterFilms("batman");
});

document.getElementById("searchfield").addEventListener("change", function (evt) {
    filterFilms(evt.srcElement.value);
});


const filterFilms = function (filter) {

    const filteredList = movies.Movies.filter(movies => {
        return movies.Title.toLowerCase().includes(filter)

    });
    addMoviesToDom(filteredList);

};

const filterLatestMovies = function () {
    const filteredList2 = movies.Movies.filter(movies => {
        return movies.Year >= 2014

    });
    addMoviesToDom(filteredList2);
};

addMoviesToDom(movies.Movies);