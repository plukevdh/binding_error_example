$(function() {
  var test = function(msg) {
    console.log('IFRAME', msg);
  }

  parent.crunch.pubsub.subscribe('MSG', test);


  $(window).bind('beforeunload', function() {
    parent.crunch.pubsub.unsubscribe();
  });
})
