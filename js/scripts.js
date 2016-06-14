//Business Logic

//Set Global Variables
var price = 0;

//Set Objects
function Ticket (movie, time, age) {
  this.movieName = movie;
  this.movieTime = time;
  this.userAge = age;
}

//Set Object Prototypes
Ticket.prototype.findPrice = function () {
  if (this.movieName === "new" && this.movieTime === "Evening") {
    price = 9;
  } else if (this.movieName === "old" && this.movieTime === "Evening") {
    price = 7;
  } else if (this.movieName === "new" && this.movieTime === "Matinee") {
    price = 6;
  } else {
    price = 4;
  }

  if (this.userAge === "Yes") {
    price -= (price * .2);
  }
  return price;
}


//User Logic
$(function(){
  $("form#new-ticket").submit(function(event){
    event.preventDefault();

    var inputtedMovie = $(".movie").val();
    var inputtedTime = $(".time").val();
    var inputtedAge =$(".age").val();

    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    newTicket.findPrice();

    $("#price").text("$" + price.toFixed(2));

  });
});
