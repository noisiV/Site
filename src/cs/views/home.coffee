## Home page view ##

class app.Home extends app.CoreView
  render: ->
    this.$el.empty()
    this.$el.html tmpl.home()
    @