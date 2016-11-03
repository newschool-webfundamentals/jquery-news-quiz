$(document).ready(function(){
  console.log("JS file loaded!");

  $(".answer").on("click", function() {
    console.log("I am clicked");

    //Removes the blue color from the clicked answer
    $(this).removeClass("bg-info");

    //the answer has the class of correct
    if () {
      //add the class 'bg-succss' to the clicked answer
      $(this).addClass("bg-success");
    } else {
      //add the class 'bg-danger' to the clicked answer
      //find the parent 'answers-container' of the clicked element
      //find the 'correct' answer within the answers container
      //remove the class 'bg-info' from the correct answer
      //add the class 'bg-success' to the correct answer
    }
  });
});
