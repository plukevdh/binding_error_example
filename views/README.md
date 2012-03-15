README

Problem
----

We found an interesting "bug" that seems to only affect Firefox
when messaging back and forth between main windows and iframes.

We have a scenario where we perform some actions within an iframe (same-domain)
and once it completes, the iframe reloads itself so it can be reused again in a fresh state.

However, we are using pubsub like event messaging and socket communication both on the main
page and the iframe to communicate to other clients. The iframe is setup to reuse the parent connection
so that we dont get conflicting connections,

However, we found when the iframe reloads itself, any bindings we made to the parent's socket
_persist beyond the iframe refresh_.

When this happens, you send a signal to you socket/event/pubsub bindings and it still tries to
run whatever the binding was, which has gone out of scope. Boom.


Solution
---

The solution was to proxy all the requests that could go out of scope in the iframe so that,
when we do go out of scope (beforeunload), we can unbind all of the events we've bound to _before_
going out of scope. That way, future events don't try to trigger out-of-scope bindings.

Hope this helps someone else :)