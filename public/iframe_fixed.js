$(function() {
  crunch.pubsub = (function(pubsub){
    var proxy = {}
    , localEvents = _.extend({}, Backbone.Events)
    ;

    proxy.subscribe = _.bind(localEvents.bind, localEvents);
    proxy.unsubscribe = _.bind(localEvents.unbind, localEvents);
    proxy.publish = _.bind(localEvents.trigger, localEvents);

    var proxyEvent = function() {
      console.log('MSG PROXY:', arguments);
      localEvents.trigger.apply(localEvents, arguments);
    }

    pubsub.bind('all', proxyEvent);
    $(window).bind("beforeunload", function() {
      pubsub.unbind('all', proxyEvent);
      console.log("PROXY UNLOADED");
    });

    return proxy;
  }(parent.crunch.pubsub));

  crunch.pubsub.subscribe('MSG', function(msg) {
    console.log('IFRAME', msg);
  })

})
