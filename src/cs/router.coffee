## Core Router ##

class Router extends Backbone.Router
  routes:
    " ": "home"
    "about": "about"
    "contact": "contact"
    "services/:type": "services"
    "computers/:type": "computers"

  home: ->
  about: ->
  contact: ->
  services: (t) ->
  computers: (t) ->