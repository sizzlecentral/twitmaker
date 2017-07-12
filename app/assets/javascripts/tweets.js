// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener("DOMContentLoaded", function() {

  $(function(){
    $('.new_tweet').on('submit', function(e){
      e.preventDefault();

      $.ajax({
        url: $(this).attr('action'),
        method: $(this).attr('method'),
        data: $(this).serialize(),
        dataType: 'json'
      }).done(function(responseData) {
        var tweets = document.querySelector('.tweets');
        var tweet = document.createElement('li');
        var tweetP = document.createElement('p');
        tweet.className = 'tweet';
        tweetP.innerHTML = responseData.message;
        tweet.appendChild(tweetP);
        tweets.prepend(tweet);
      }).fail(function() {
        console.log("Action failed.");
      }).always(function() {
        console.log("Click logged.");
      });
    });
  });
});
