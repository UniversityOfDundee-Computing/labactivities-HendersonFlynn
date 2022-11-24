function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}

function secureTitle(title) {
  let secureTitleVar = "";
  for (let titlePart of title) {
    secureTitleVar += (titlePart + "+");

  }
  return secureTitleVar.slice(0, -1);
}
  const searchInput = document.getElementById("searchInput");
  const movieContainer = document.getElementById('movieContainer');
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", function (event){
    if (movieContainer.hasChildNodes()) {
      movieContainer.innerHTML = '';

    }
    console.log(movieContainer.parentNode);
    event.preventDefault();

    let searchInputTitleAddendum = secureTitle(searchInput.value.split(" "))
    let url = "http://www.omdbapi.com/?s=" + searchInputTitleAddendum + "&apikey=8161c153";
    console.log(url);
    console.log(searchInput);
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let movies = data["Search"];
            return movies.map((movie) => {
                let cardContainer = createNode("div"),
                card = createNode("div"),
                cardImg = createNode("img"),
                cardBody = createNode("div"),
                cardTitle = createNode("h5"),
                cardText = createNode("p");
                cardButton = createNode("a")

            cardContainer.setAttribute("class", "col-4 mb-3");
            card.setAttribute("class", "card h-100");
            cardImg.setAttribute("class", "card-img-top h-75");
            cardImg.setAttribute("src", movie["Poster"]);
            cardBody.setAttribute("class", "card-body");
            cardTitle.setAttribute("class", "card-title mb-0");
            cardTitle.innerHTML = movie["Title"];
            cardText.setAttribute("class", "card-text");
            cardText.innerHTML = movie["Year"];
            cardButton.setAttribute("class", "btn btn-primary pt-2");
            cardButton.setAttribute("href", ("singleMovie.html?" + movie["imdbID"]))
            cardButton.innerHTML = ("More Information")

            append(cardBody, cardTitle);
            append(cardBody, cardText);
            append(cardBody, cardButton);
            append(card, cardImg);
            append(card, cardBody);
            append(cardContainer, card);
            append(movieContainer, cardContainer);

        })
    })
    .catch(function(error) {
      console.log(error);
    })
 })


  

