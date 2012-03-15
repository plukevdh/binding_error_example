crunch = {}

crunch.pubsub = _.extend({}, Backbone.Events);

// Hide backbone implementation by aliasing
crunch.pubsub.publish     = crunch.pubsub.trigger;
crunch.pubsub.subscribe   = crunch.pubsub.bind;
crunch.pubsub.unsubscribe = crunch.pubsub.unbind;

$(function() {
  $('.replace-it').click(function() {
    $('iframe')[0].contentWindow.location.reload();
  });

  $('.send-it').click(function() {
    crunch.pubsub.publish("MSG", "What's UP!");
  });

  crunch.pubsub.subscribe('all', function(msg) {
    console.log("MAIN", msg);
  });

});