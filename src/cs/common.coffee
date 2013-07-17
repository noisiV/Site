## This file will be compiled before any views or router code
## place anything that needs to be publicly available 
## in this file.

window.app ?= {}
app.dropdown = $('.pull-menu')

class app.CoreView extends Backbone.View
  el: $('#core')

  hackNav: ->
    if $(document).width() < 980
      app.dropdown.trigger 'click'