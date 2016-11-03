$(document).ready(function(){
  console.log("JS file loaded!");

  $(".answer").on("click", function() {
    console.log("I am clicked");

    $(this).removeClass("bg-info");

    if ($(this).hasClass("correct")) {
      $(this).addClass("bg-success");
    } else {
      $(this).addClass("bg-danger");
      var answers = $(this).parents(".answers-container");
      var correct = answers.find(".correct")
      correct.removeClass("bg-info");
      correct.addClass("bg-success");
    }
  });
});
