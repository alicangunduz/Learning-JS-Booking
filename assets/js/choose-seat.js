/////////////////////////LOCAL STORAGE//////////////////////////
let movies = []
movies = JSON.parse(localStorage.getItem("movies"));
///////////////////////////////////////////////////////////////
////////////////////////REDIRECTION/////////////////////////////
let urlController = document.location.href.split('?')
if(urlController.length == 1 || urlController[1].search("id=") == -1 || movies.length -1 < urlController[1].split("=")[1]){
    window.location.href = "/index.html"
}
////////////////////////////////////////////////////////////////
////////////////////////URL PARAMETER///////////////////////////
let urlSearchParams = new URLSearchParams(window.location.search);
let params = Object.fromEntries(urlSearchParams.entries());
///////////////////////////////////////////////////////////////
/////////////////////////DOM ELEMENTS///////////////////////////
const id = params['id']
localStorage.setItem("booking-id", JSON.stringify(id));
const bookingId = JSON.parse(localStorage.getItem("booking-id"))
document.getElementById("movie-title").innerHTML = movies[bookingId].title
///////////////////////////////////////////////////////////////
/////////////////////////SEAT SELECTION/////////////////////////
let container = document.querySelector(".container")
container.addEventListener("click", function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("sold")){
        e.target.classList.toggle("selected")
       let selectedSeatCounter = container.querySelectorAll(".seat.selected").length
       let price = movies[bookingId].price*selectedSeatCounter
         document.getElementById("count").innerHTML = selectedSeatCounter
         document.getElementById("total").innerHTML = price
    }
})
///////////////////////////////////////////////////////////////
/////////////////////////BOOKING NOW/////////////////////////
let booknowbtn = document.getElementById("booknowbtn")
booknowbtn.addEventListener("click", function(){
    let selectedSeats = container.querySelectorAll(".seat.selected")
    for(let index in selectedSeats){
        selectedSeats[index].classList.remove("selected")
        selectedSeats[index].classList.add("sold")
        document.getElementById("count").innerHTML = 0
        document.getElementById("total").innerHTML = 0
    }
})
///////////////////////////////////////////////////////////////
let seatsHTML = `  <div class="row">
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
</div>

<div class="row">
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
</div>
<div class="row">
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
</div>
<div class="row">
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
</div>
<div class="row">
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
</div>
<div class="row">
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
<div class="seat"></div>
</div>`
let seatsDOM = document.getElementById("seats");
    seatsDOM.insertAdjacentHTML("beforebegin", seatsHTML)
