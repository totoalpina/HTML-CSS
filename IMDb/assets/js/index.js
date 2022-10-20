window.addEventListener('load', populateMovies)
let moviesNR = [];

function populateMovies() {
    getData().then(data => {
        moviesNR = data;
        
        let rowNR = document.querySelector('#movies-list-new-releases')

        rowNR.innerHTML = '';
        for (movie of moviesNR) {
            rowNR.append(loadElement(movie.movieTitle, movie.URL, movie.movieDescription, movie.movieRating))
        }
    })
}

const getData = async () => {
    const response = await fetch('assets/data.json')
    moviesNR = await response.json()

    return moviesNR
}

function loadElement(title, img, description, rating) {

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
                        '</div> '

    return cardNR
}