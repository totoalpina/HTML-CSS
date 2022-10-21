window.addEventListener('load', loadMovies)
let moviesNR = [];

function populateMovies(movies) {
    let rowNR = document.querySelector('#movies-list-new-releases')

    rowNR.innerHTML = '';
    for (let movie of movies) {
        rowNR.append(loadElement(movie.movie_title, movie.movie_image, movie.movie_trailer_url, movie.movie_description, movie.movie_rating))
    }
}

function loadMovies() {
    getMovies('http://127.0.0.1:3000/users')
    populateMovies(moviesNR)

}

function getMovies(url) {
    // let xhr = new XMLHttpRequest()

    // xhr.open('GET', url, true)

    // xhr.onload = function () {
    //     // console.log(responseText);
    //     data = this.response;
    //     console.log(this.statusText);
    //     if (this.status === 200) {

    //         moviesNR = JSON.parse(data)
    //         console.log(moviesNR);
    //         populateMovies(moviesNR)

    //     } else {
    //         console.log('could not load')
    //     }
    // }

    // xhr.send()

    fetch(url)
    .then(function(response) {
        return response.text()
    })
    .then(
        (data) => {
            moviesNR = JSON.parse(data)
            console.log(moviesNR);
            populateMovies(moviesNR) 
        }
    )
}

function loadElement(title, img, trailer, description, rating) {

    let cardNR = document.createElement('div')
    cardNR.className = 'col-md-6 col-lg-3'
    cardNR.innerHTML = '<div class="card bg bg-dark text-white">' +
        '<img src="' + img + '" alt="" class="card-img-top">' +
        '<div class="card-body">' +
        '<div class="bg bg-dark pb-2"> <span class="text-muted">IMDb rating : </span>' +
        '<i class="bi bi-heart-fill rated"> - <span class="rated" id="rated-nr-span">' + rating + '</span></i>' +
        '</div>' +
        '<h6 class="card-title lead text-center" id="nr-movie-title">' + title + '</h6>' +
        '<p class="card-text text-muted text-truncate" id="nr-description">' + description +
        '</p>' +
        '</div>' +
        '<div class="card-footer"><a class="text-white" href="' + trailer + '" target="_blank" style="text-decoration: none;">Trailer</a> </div>' +
        '</div> '

    return cardNR
}