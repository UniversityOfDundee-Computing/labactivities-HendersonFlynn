let link = window.location.href;
let url = "https://www.omdbapi.com/?i=" + link.split("?")[1] + "&apikey=8161c153";

function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}


let posterContainer = document.getElementById("posterContainer");
let movieInfo = document.getElementById("movieInfo");

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        document.title = data["Title"]
        let movieTitle = createNode("h1"),
            moviePoster = createNode("img"),
            movieReleaseDate = createNode("h4"),
            moviePlot = createNode("p"),
            movieDirector = createNode("p"),
            movieActors = createNode("p"),
            movieRating = createNode("p");
            backButton = createNode("a");
        
        moviePoster.setAttribute("src", data["Poster"]);
        moviePoster.setAttribute("class", "w-auto h-auto");
        movieTitle.innerText = data["Title"];
        movieReleaseDate.innerText = data["Released"];
        moviePlot.innerText = data["Plot"];
        movieDirector.innerHTML = '<div class="fw-bold">Director:</div>' + data["Director"];
        movieActors.innerHTML = '<div class="fw-bold">Cast:</div>' + data["Actors"];
        movieRating.innerHTML = '<div class="fw-bold">Ratings:</div>' + data["imdbRating"];
        backButton.setAttribute("class", "btn btn-secondary pt-2");
        backButton.setAttribute("href", "javascript: history.go(-1)")
        backButton.innerHTML = ("Back");

        append(posterContainer, moviePoster);
        append(movieInfo, movieTitle);
        append(movieInfo, movieReleaseDate);
        append(movieInfo, moviePlot);
        append(movieInfo, movieDirector);
        append(movieInfo, movieActors);
        append(movieInfo, movieRating);
        append(movieInfo, backButton);
        })
        .catch(function(error){
            console.log(error);
        })