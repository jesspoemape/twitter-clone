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
         var $count = $("#char-count");
         // update the charcount length by updating the val 
         $(this).keyup(function() {
             $count.text(140 - $(this).val().length);

             if ((140 - $(this).val().length) <= 10) {
                $($count).css("color","red");
             }
             else {
                 $($count).css("color","#999");
             }

             // disable button if tweet is too long 
             if ((140 - $(this).val().length) <= 0) {
                $(".button").prop("disabled", true);
             }
             else {
                 $(".button").prop("disabled", false);
             }
             
         });

     });


});