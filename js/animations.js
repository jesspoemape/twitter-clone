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

     // if its a valid tweet, add the tweet to the top of the stream
     // i guess we are going to clone the element and change the values then prepend to the stream 
     $(".button").on("click", function(){
        var $nTweet = $(".tweet:first").clone();

        $(".fullname", $nTweet).text("Jessica Poémape");
        $(".username", $nTweet).text("@japoemape");
        $(".tweet-text", $nTweet).html($(".tweet-compose").val());
        $(".avatar", $nTweet).attr("src", "img/alagoon.jpg");
        $(".reply .tweet-compose", $nTweet).attr("placeholder", "Reply to @japoemape");

        $nTweet.prependTo("#stream");
     });



});