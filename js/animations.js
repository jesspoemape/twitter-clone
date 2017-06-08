$(document).ready(function() {
    // upon clicking the text field,
    // text area double in size, and 
    // char count and tweet button appear
     $(".tweet-compose").on("click", function(){
         $(".tweet-compose").css("height", "5em");
         $("#tweet-controls").show();
     });

     // When the user starts typing in the tweet compose area, 
     // start decreasing the character count 
     $(".tweet-compose").keypress(function() {
         // update the charcount length by updating the val 
         $("#char-count").replaceWith(function() {
             $(".tweet-compose").length;
         });

     });


});