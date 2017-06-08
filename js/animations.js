$(document).ready(function() {
// upon page load, make the following hide
$(".stats, .reply, .tweet-actions").hide();

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
     // clone the element and change the values then prepend to the stream 
     $(".button").on("click", function(){
         //clear out compose box
         //$(".tweet-compose").val("");
         $(".tweet-compose").css("height", "2.5em");
         $("#tweet-controls").hide();

         // clone tweet stuff
        var $nTweet = $(".tweet:first").clone();

        //reformat tweet stuff
        $(".fullname", $nTweet).text("Jessica Poémape");
        $(".username", $nTweet).text("@japoemape");
        $(".tweet-text", $nTweet).html($(".tweet-compose").val());
        $(".avatar", $nTweet).attr("src", "img/alagoon.jpg");
        $(".reply .tweet-compose", $nTweet).attr("placeholder", "Reply to @japoemape");

        $nTweet.prependTo("#stream");

        // add hover and toggle to new tweets
        $(".tweet").hover(
            function(){
                $(".tweet-actions", this).show();
            },
            function() {
                $(".tweet-actions", this).hide();
            }
        );

        $(".tweet").unbind().click(function() {
        $(".stats, .reply", this).slideToggle("slow");
         });
    
     });

     //the tweet actions only appear on hover 
     $(".tweet").hover(
        function(){
            $(".tweet-actions", this).show();
     },
        function() {
            $(".tweet-actions", this).hide();
     }
     );

     // tweet stats only appear on click of tweet 
     $(".tweet").click(function() {
         console.log("hello");
         $(".stats, .reply", this).slideToggle("slow");
     });



});