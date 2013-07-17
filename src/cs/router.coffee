## Core Router ##

class app.Router extends Backbone.Router
  routes:
    "": "home"
    "about": "about"
    "contact": "contact"
    "services/:type": "services"
    "computers/:type": "computers"

  home: -> app.views.home.render()
  about: -> app.views.about.render()
  contact: -> app.views.contact.render()
  services: (t) -> app.views.services.render(t)
  computers: (t) -> app.views.computers.render(t)