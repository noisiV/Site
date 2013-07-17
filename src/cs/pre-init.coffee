## pre-initialization ##

window.app = {}
app.dropdown = $('.pull-menu')

class app.CoreView extends Backbone.View
  el: $('#core')

  hackNav: ->
    if document.width < 980
      app.dropdown.trigger('click')