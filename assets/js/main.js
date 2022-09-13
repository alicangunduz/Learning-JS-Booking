let movies = [  
    // array of movie objects
    {   
        id: "uncharted",
        title: "Uncharted",
        desc: "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor Sully Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.",
        duration: "1h 56min",
        imdb: "6/10",
        img: "images/movies/uncharted.jpg",
        price: "10",
        seatarr: []
    },
    {   
        id: "the-umbrella-academy",
        title: "The Umbrella Academy",
        desc: "A family of former child heroes, now grown apart, must reunite to continue to protect the world.",
        duration: "3 Episodes",
        imdb: "7.9/10",
        img: "images/movies/the-umbrella-academy.jpg",
        price: "50",
        seatarr: []
    },
    
]
localStorage.setItem("movies", JSON.stringify(movies));


for (let index in movies){
    let moviesHTML = `    <div class="card w-50 ">
    <div class="card-body">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <img src="${movies[index].img}" width="185" height="270">
                </div>
                <div class="col-9">
                    <div class="card-body">
                        <div class="card-title">
                            <h3>${movies[index].title}</h3>
                        </div>
                        <div class="card-text">
                            <p>${movies[index].desc}</p>
                            <p><i class="bi bi-star-fill"><b> IMDB : </b> ${movies[index].imdb}</i></p>
                            <p><i class="bi bi-clock"><b> Duration : </b> ${movies[index].duration}</i></p>
                        </div>
                       <a href="page/choose-seat.html?id=${index}" <button  class="btn btn-primary">Book Now</button> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<br>
`
    let moviesDOM = document.getElementById("movies");
    moviesDOM.insertAdjacentHTML("beforebegin", moviesHTML)

}